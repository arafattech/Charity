<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\App;
use Flat3\Lodata\Facades\Lodata;
use App\Models\User;
use App\Models\Permission;
use App\Models\Role;
use App\Models\ActivityLog;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }
    public function boot(): void
    {
        $isOdataRequest = request()->is(config('lodata.prefix') . "/*") || request()->is(config('lodata.prefix'));

        if (!App::runningInConsole() && $isOdataRequest) {
            Lodata::discover(User::class);
            Lodata::discover(Permission::class);
            Lodata::discover(Role::class);
            Lodata::discover(ActivityLog::class);
            Lodata::getEntitySet('ActivityLogs')->discoverRelationship('user');
            Lodata::getEntitySet('Roles')->discoverRelationship('syncPermissions');
            Lodata::getEntitySet('Users')->discoverRelationship('employee');
        }

    }
}
