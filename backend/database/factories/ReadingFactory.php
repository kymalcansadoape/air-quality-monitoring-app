<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Validation\Rules\Unique;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reading>
 */
class ReadingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'device_id' => fake()->numberBetween(1, 3),
            'CO2' => fake()->numberBetween(1, 100),
            'CO' => fake()->numberBetween(1, 100),
            'humidity' => fake()->numberBetween(1, 100),
            'LPG' => fake()->numberBetween(1, 100),
            'methane' => fake()->numberBetween(1, 100),
            'timestamp' => fake()->dateTimeBetween('-7 days', 'now')
        ];
    }
}
