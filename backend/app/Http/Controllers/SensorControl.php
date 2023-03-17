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
    public function store(Request $request){
        $data = new Sensor;
        $data->co2 = $request->input("value1");
        $data->hum = $request->input("value2");
        $data->pressure = $request->input("value3");
        $data->temperature = $request->input("value4");
        $data->lpg = $request->input("value5");
        $data->overall = $request->input("value6");
        $data->save();
        return response()->json(["Success"]);

    }

    public function latestRow(){
        $latestData = Sensor::latest()->first();
        return $latestData;
    }
}
