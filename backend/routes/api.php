<?php

use Carbon\Carbon;
use App\Models\User;
use App\Models\Reading;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReadingsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/latest', function(Request $request){
    $latest = Reading::latest()->first();
    return response()->json($latest);
});
Route::get('/last-seven-days', function(Request $request){
    $sevenDaysAgo = Carbon::now()->subDays(7);
    $readings = Reading::whereRaw('timestamp >= DATE_SUB(NOW(), INTERVAL 7 DAY)')->limit(7)->get();
    return response()->json($readings);
});
