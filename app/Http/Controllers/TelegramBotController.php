<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use WeStacks\TeleBot\TeleBot;
use App\Http\Controllers\Exception;

class TelegramBotController extends Controller
{
    //+++++++++++++++++++++++++++++++++++++++
    private $bot;
    private $message_text;
    private $chat_id = 657656419;
    //+++++++++++++++++++++++++++++++++++++++
    public function __construct()
    {
        $this->bot = new TeleBot('AAGCuJxeGUhM5trIIP4AuZr_j4Cvy_vvbg0');
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    public function index()
    {
        return view('welcome');
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    public function telegram_webhook(Request $request)
    {
        //+++++++++++++++++++++++++++++++++++++++++
        //Webhook
        //+++++++++++++++++++++++++++++++++++++++++
        $data = json_decode($request->all());
        if ($data) {
            $this->chat_id      = $data->message->chat->id;
            $this->message_text = $data->message->text;
        }
    }
    // https://api.telegram.org/bot7510331040:AAGCuJxeGUhM5trIIP4AuZr_j4Cvy_vvbg0/getUpdates
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    public function sendMessage(Request $request)
    {
        // try {
            $message = $this->bot->sendMessage([
                'chat_id'      => '657656419',
                'text'         => 'Welcome To Code-180 Youtube Channel',
                'reply_markup' => [
                    'inline_keyboard' => [[[
                        'text' => '@code-180',
                        'url'  => 'https://www.youtube.com/@code-180/videos',
                    ]]],
                ],
            ]);
            // $message = $this->bot->sendMessage([
            //     'chat_id' => '657656419',
            //     'text'    => 'Welcome To Code-180 Youtube Channel',
            // ]);
        // } catch (Exception $e) {
        //     $message = 'Message: ' . $e->getMessage();
        // }
        return Response::json($message);
    }

}