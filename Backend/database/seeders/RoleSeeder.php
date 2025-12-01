<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = ['super-admin', 'admin', 'accountant', 'user','employee'];

        foreach ($roles as $roleName) {
            $role = Role::updateOrCreate(
                ['name' => $roleName],
                ['guard_name' => 'web']
            );

            $permissions = Permission::all();
            if ($roleName === 'super-admin') {
                $role->syncPermissions($permissions);
            }
            $employeePermissions = [
                'employee-dashboard',
            ];
            if($roleName === 'employee'){
                $role->syncPermissions($employeePermissions);
            }
        }
    }
}
