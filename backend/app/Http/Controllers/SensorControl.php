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
        $data->co2 = $request->input("carbonDioxideData");
        $data->hum = $request->input("humidityData");
        $data->pressure = $request->input("pressureData");
        $data->temperature = $request->input("temperatureData");
        $data->lpg = $request->input("lpgData");
        $data->overall = $request->input("airQualityData");
        if($data->save()){
            return response()->json(["The data was inserted successfully!"]);
        }else{
            return response()->json(["Can't insert data to the database!"]);
        }
    }

    public function latestRow(){
        $latestData = Sensor::latest()->first();
        return $latestData;
    }
}
