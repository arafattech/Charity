<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\Media;
use App\Models\Employee;
use Exception;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $user = User::where('is_active', true)
            ->where(function ($query) use ($request) {
                $query->where('email', $request->email)
                    ->orWhere('phone', $request->email);
            })->first();

        $userInfo = User::where('email', $request->email)->orWhere('phone', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $token = $user->createToken('token-name')->plainTextToken;
        $roles = $user->roles;
        $allPermissions = $roles->flatMap(function ($role) {
        return $role->permissions->pluck('name');
        })->unique()->values()->all();
        $roleNames = $roles->pluck('name')->unique()->values()->all();
        $this->tokenUpdate($token, $user);


            $employee = Employee::where('user_id', $user->id)->first();

        $profileImageUrl = null;

    if ($employee) {
        $media = Media::where('model_id', $employee->id)
            ->where('is_standard', true)
            ->first();

        if ($media) {
            $profileImageUrl = env('APP_URL') . Storage::url($media->id . '/' . $media->file_name);

        }
    }
        return response()->json([
            'token' => $token,
            'user' => $userInfo,
            'media' => $user->media->toArray(),
            'roles' => $roleNames,
            'profile_image' => $profileImageUrl,
            'permissions' => $allPermissions,
            'permissions_raw' => json_encode($allPermissions),
        ], 200);
    }


    public function auth(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(null, 401);
        }

        if(!$user->is_active){
            $user->remember_token = null;
            $user->save();
            return response()->json(null, 401);
        }

        $rememberToken = $request->header('Authorization')
            ? str_replace('Bearer ', '', $request->header('Authorization'))
            : null;

        if ($user->remember_token !== $rememberToken) {
            return response()->json(null, 401);
        }
        $roles = $user->roles;
        $allPermissions = $roles->flatMap(function ($role) {
            return $role->permissions->pluck('name');
        })->unique()->values()->all();
        $roleNames = $roles->pluck('name')->unique()->values()->all();

        return response()->json([
            'user' => $user,
            'employee' => $user->employee,
            'roles' => $roleNames,
            'permissions' => $allPermissions,
            'permissions_raw' => json_encode($allPermissions)
        ], 200);
        return response()->json($request->user());
    }

    public function tokenUpdate($token, $user)
    {
        $user = User::find($user->id);
        $user->remember_token = $token;
        $user->save();
    }

    public function logout(Request $request)
    {
        try {
            $rememberToken = ($request->has('remember_token')) ? $request->input('remember_token') : null;

            if (!$rememberToken) {
                throw new Exception('You are NOT Authenticate to get this Information');
            }

            $user = User::where('remember_token', $rememberToken)->first();

            if (!$user) {
                throw new \Exception('Authentication Failed');
            } else {
                $user->remember_token = null;
                $user->save();
                $data['status_code']    = 200;
                $data['logout_status']  = true;
            }
        } catch (\Exception $exception) {
            $data['logout_status']  = false;
            $data['status_code']    = 400;
            $data['status']         = $exception->getMessage();
        } finally {
            return response()->json($data);
        }
    }
}
