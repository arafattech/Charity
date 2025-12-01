<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $permissionGroups = [
            'Data-management' => [
                'base-data-management',
                'product-management',
                'employee-management',
                'machine-management',
                'plant-management',
                'crud-permission'
            ],

            "Department-management" => [
                'department-management',
            ],

            'Variant-management' => [
                'variant-management',
                'item-variants',
                'variant-type',
                'item-type',
            ],
            'Category-management' => [
                'category-management',
                'item-categories',
                'item-subcategories',
            ],
            'Work-order' => [
                'work-order-management',
                'client-management',
                'supplier-management',
                'supplier-bank-details',
            ],
            'User-management' => [
                'user-management',
                'role-permission',
                'activity-log',
                'administration-power',
            ],
            'Operations' => [
                'storage-management',
                'operation-management',
                'tools-management',
                'capacity-management',
            ],
            'Facility-management' => [
                'hall-management',
                'machine-group',
                'machine-state',
            ],
            'Client' => [
                'client-note',
                'client-areas',
            ],
            'Asset' => [
                'asset-management',
            ],
            'Production-Management' => [
                'production-management',
            ],
            'Hr-Management' => [
                'hr-management',
                'employee-dashboard',
            ],
            'Marketing and Sales' => [
                'marketing-and-sales',
            ],
            'Quality-Management' => [
                'quality-management',
            ],
            'Store-Management' => [
                'store-management',
            ],
            'Task-Management' => [
                'task-management',
            ],
            'Purchese-Management' => [
                'purchese-management',
            ]
        ];

        foreach ($permissionGroups as $group => $permissions) {
            foreach ($permissions as $permission) {
                Permission::updateOrCreate([
                    'name' => $permission,
                    'guard_name' => 'web',
                    'group' => $group,
                ]);
            }
        }
    }
}
