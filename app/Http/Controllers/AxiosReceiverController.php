<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AxiosReceiverController extends Controller
{
    public function Receive(Request $request)
    {
        $validatedData = $request->validate([
            'energy' => 'nullable',
            'score' => 'nullable'
        ]);

        return json_encode($validatedData);
    }
}
