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
        $data->cm = $request->input("value2");
        $data->meth = $request->input("value3");
        $data->lpg = $request->input("value4");
        $data->hum = $request->input("value5");
        $data->save();
        return response()->json(["Success"]);

    }

    public function sumOfallData(){
        $carbonDioxide = Sensor::all()->sum('co2');
        $carbonMonoxide = Sensor::all()->sum('cm');
        $humidity = Sensor::all()->sum('hum');
        $methane = Sensor::all()->sum('meth');
        $lpg = Sensor::all()->sum('lpg');

        $sumData = ['co2'=>$carbonDioxide,
                    'cm'=>$carbonMonoxide,
                    'hum'=>$humidity,
                    'meth'=>$methane,
                    'lpg'=>$lpg];

        return $sumData;
    }
}
