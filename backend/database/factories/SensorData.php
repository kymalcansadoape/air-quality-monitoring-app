<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Sensor>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'co2' => fake()->numberBetween(1, 100),
            'hum' => fake()->numberBetween(1, 100),
            'cm' => fake()->numberBetween(1, 100),
            'lpg' => fake()->numberBetween(1, 100),
            'meth' => fake()->numberBetween(1, 100),
            'timestamp' => fake()->dateTimeBetween('-7 days', 'now')
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
