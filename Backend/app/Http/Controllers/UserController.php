<?php

namespace App\Http\Controllers;

use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\RateLimiter;

class UserController extends Controller
{

    public function add_user(Request $request)
    {
        try {

            $validatedData = $request->validate([
                'userInfo.name' => 'required|string|max:255',
                'userInfo.email' => 'required|email|unique:users,email',
                'userInfo.password' => 'required|string|min:6',
                'userInfo.is_active' => 'nullable',
                'roles' => 'nullable|array',
                'roles.*.id' => 'integer|exists:roles,id',

            ]);

            $userInfo = $validatedData['userInfo'];

            $user = User::create([
                'name' => $userInfo['name'],
                'email' => $userInfo['email'],
                'password' => Hash::make($userInfo['password']),
                'is_active' => $userInfo['is_active'],
            ]);

            $roleIds = collect($validatedData['roles'])->pluck('id')->toArray();
            if (!empty($roleIds)) {
                $roles = Role::whereIn('id', $roleIds)->get();
                $user->syncRoles($roles);
            } else {
                $user->syncRoles([]);
            }

            return response()->json([
                'message' => 'User created successfully',
                'data' => $user->load('roles')
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error User create: ' . $e->getMessage());
            return response()->json([
                'error' => 'An error occurred while creating the user',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function edit_user(Request $request, $id)
    {
        try {
            $validatedData = $request->validate([
                'userInfo.name' => 'required|string|max:255',
                'userInfo.password' => 'string|nullable',
                'userInfo.email' => 'required|email|unique:users,email,' . $id,
                'userInfo.is_active' => 'nullable',
                'roles' => 'nullable|array',
                'roles.*.id' => 'integer|exists:roles,id',
                'is_active' => 'nullable|boolean',
            ]);

            $userInfo = $validatedData['userInfo'];
            $user = User::findOrFail($id);

            $user->name = $userInfo['name'];
            $user->is_active = $userInfo['is_active'];
            if ($user->email !== $userInfo['email']) {
                $user->email = $userInfo['email'];
            }
            if (!empty($userInfo['password'])) {
                $user->password = Hash::make($userInfo['password']);
            }

            $roleIds = collect($validatedData['roles'] ?? [])->pluck('id')->toArray();
            if (!empty($roleIds)) {
                $roles = Role::whereIn('id', $roleIds)->get();
                $user->syncRoles($roles);
            } else {
                $user->syncRoles([]);
            }

            $user->save();

            return response()->json([
                'message' => 'User updated successfully',
                'data' => $user->load('roles')
            ]);
        } catch (\Exception $e) {
            Log::error('Error updating user: ' . $e->getMessage());
            return response()->json([
                'error' => 'An error occurred while updating the user',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    public function change_password(Request $request)
    {
        try {
            $user = Auth::user();

            if (!$user) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }

            $validated = $request->validate([
                'current_password' => 'required|string',
                'password' => [
                    'required',
                    'string',
                    'min:6',
                    'confirmed',
                ],
            ]);

            $key = 'change-password:' . $user->id;
            if (RateLimiter::tooManyAttempts($key, 6)) {
                $seconds = RateLimiter::availableIn($key);
                return response()->json([
                    'error' => 'Too many attempts. Try again in ' . $seconds . ' seconds.'
                ], 429);
            }

            if (!Hash::check($validated['current_password'], $user->password)) {
                RateLimiter::hit($key, 60);
                throw ValidationException::withMessages([
                    'error' => 'Your current password is incorrect.'
                ]);
            }

            $user->password = Hash::make($validated['password']);
            $user->save();

            RateLimiter::clear($key);

            return response()->json([
                'message' => 'Password changed successfully.'
            ], 200);
        } catch (ValidationException $e) {
            return response()->json([
                'error' => implode(' ', array_values($e->errors())[0])
            ], 422);
        } catch (\Exception $e) {
            Log::error('Error changing password: ' . $e->getMessage());
            return response()->json([
                'error' => 'An error occurred while changing the password: ' . $e->getMessage()
            ], 500);
        }
    }

    public function user_list(Request $request, $top, $skip)
    {
        try {

            $status = $request->input('$status');
            $query = User::with('roles')->offset($skip)->limit($top);

            if ($status) {

                if (preg_match('/is_active\s+eq\s+true/i', $status)) {
                    $query->where('is_active', true);
                } elseif (preg_match('/is_active\s+eq\s+false/i', $status)) {
                    $query->where('is_active', false);
                }
            }

            $query->where(function ($q) use ($request) {
                if ($request->has('filter')) {
                    $filter = $request->input('filter');
                    $q->where('name', 'LIKE', '%' . $filter . '%')
                        ->orWhere('email', 'LIKE', '%' . $filter . '%')
                        ->orWhere('custom_id', 'LIKE', '%' . $filter . '%');
                }
            });

            $users = $query->orderBy('created_at', 'desc')->get();
            $userCount = User::count();
            return response()->json(['value' => $users, '@count' => $userCount]);
        } catch (\Exception $e) {
            Log::error('Error fetching users: ' . $e->getMessage());
            return response()->json([
                'error' => 'An error occurred while fetching users',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
