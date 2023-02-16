<?php

namespace App\Http\Controllers;

use App\Http\Resources\SensorResource;
use App\Models\Sensor;
use Illuminate\Http\Request;

class SensorControl extends Controller
{

    public function index(){

        return SensorResource::collection(Sensor::all());
    }
}
