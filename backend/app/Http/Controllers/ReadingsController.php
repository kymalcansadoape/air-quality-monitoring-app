<?php

namespace App\Http\Controllers;

use App\Models\Reading;
use Illuminate\Http\Request;

class ReadingsController extends Controller
{
    public function latestReading(Request $request){
        $latest = Reading::latest()->first();
        return response()->json($latest);
    }
}
