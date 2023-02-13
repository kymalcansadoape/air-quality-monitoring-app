<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reading extends Model
{
    use HasFactory;

    protected $table = 'readings';

    protected $fillable = [
        'device_id',
        'co2',
        'co',
        'humidity',
        'lpg',
        'methane',
        'timestamp'
    ];

    public function device()
    {
        // return $this->belongsTo(Device::class);
    }
}
