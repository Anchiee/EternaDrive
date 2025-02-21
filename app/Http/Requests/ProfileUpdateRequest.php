<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['sometimes', 'string', 'max:100'],
            'email' => [
                'sometimes', 
                'email', 
                'lowercase', 
                Rule::unique("users")->ignore($this->user()->id),
            ],
            'password' => [
                'required',
                'string',
                'max:255',
                'current_password',
            ],
            'new_password' => [
                'sometimes',
                'nullable',
                'string',
                'max:255',
                'min:8'
            ]
        ];
    }
}
