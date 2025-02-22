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
            'name' => ['sometimes', 'string', 'max:13', 'min:1'],
            'email' => [
                'sometimes',
                'email',
                'max:255',
                'min:1',
                Rule::unique(User::class)->ignore($this->user()->id),
            ],
            'password' => [
                'required',
                'current_password',
                'string'
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
