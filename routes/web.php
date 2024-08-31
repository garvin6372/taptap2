<?php

use App\Http\Controllers\AxiosReceiverController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/{any?}', function () {
//     return view('welcome');
// });


Route::post('sendrequest', [AxiosReceiverController::class, 'Receive']);


Route::get('telegram-message-webhook', [App\Http\Controllers\TelegramBotController::class, 'telegram_webhook']);
Route::get('sendMessage', [App\Http\Controllers\TelegramBotController::class, 'sendMessage']);