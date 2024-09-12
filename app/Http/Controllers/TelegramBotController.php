<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Http\Controllers\Exception;
use TelegramSDK\BotAPI\Telegram\Bot;

class TelegramBotController extends Controller
{
    //+++++++++++++++++++++++++++++++++++++++
    private $bot;
    private $message_text;
    private $chat_id = 657656419;
    // protected $telegram;

    //+++++++++++++++++++++++++++++++++++++++
    public function __construct()
    {
        // $this->telegram = $telegram;
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
    //https://api.telegram.org/bot7510331040:AAGCuJxeGUhM5trIIP4AuZr_j4Cvy_vvbg0/setWebhook?url=https://bgmitaptap.kesug.com/telegram-message-webhook
    //https://api.telegram.org/bot7510331040:AAGCuJxeGUhM5trIIP4AuZr_j4Cvy_vvbg0/setWebhook?url=https://webhook.site/d8b7dd69-b2ce-45d3-bbcc-c3cddf46d3ae
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    public function sendMessage()
    {


        $bot = new Bot("7510331040:AAGCuJxeGUhM5trIIP4AuZr_j4Cvy_vvbg0"); // Your bot token
        // dd($bot);
        $bot->sendMessage([ // Send a message
            "chat_id" => 657656419, // Your chat id
            "text" => "t.me/bgmi_earn_by_gd_6372_bot/bgmitap"
        ]);
    }
}
