<?php

use App\Http\Controllers\SensorControl;
use Illuminate\Support\Facades\Route;

Route::group([], function() {
    Route::apiResource('sensor',SensorControl::class);
});
