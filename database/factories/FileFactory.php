<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\File>
 */
class FileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => fake()->name(),
            "size" => fake()->numberBetween(1, 1000),
            "file_type" => fake()->randomElement(["image/png", "image/jpeg", "application/pdf"]),
            "is_favorite" => fake()->boolean(),
            "user_id" => User::factory(),
        ];
    }
}
