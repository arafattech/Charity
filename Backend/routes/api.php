<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RolePermissionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\idGeneratorController;
use App\Http\Controllers\NotificationClear;
use App\Http\Controllers\PDFController;


Route::post('login', [AuthController::class, 'login']);
Route::middleware(['auth:sanctum'])->group(function () {
  // ==================== authentication ===============================
  Route::get('auth', [AuthController::class, 'auth']);
  Route::post('logout', [AuthController::class, 'logout']);

  // ==================== Roles permission management================-
  Route::post('permissions', [RolePermissionController::class, 'sync_permission']);
  Route::delete('remove/permissions', [RolePermissionController::class, 'remove_permission']);

  // ============== User management =================
  Route::post('add/user', [UserController::class, 'add_user']);
  Route::put('edit/user/{id}', [UserController::class, 'edit_user']);
  Route::get('user/{skip}/{top}', [UserController::class, 'user_list']);
  Route::post('/user/change-password', [UserController::class, 'change_password']);

  // ============== Notifications =================
  Route::post('/activity-logs/read', [NotificationClear::class, 'markAllAsRead']);

  Route::post('/generate-id', [idGeneratorController::class, 'generateCustomCode']);
    // ============================ PDF Download =====================
  Route::post('/pdf/generate', [PDFController::class, 'generatePDF']);

});
