<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public string $url;
    public int $ttl;

    public function __construct(string $url, int $ttl = 15)
    {
        $this->url = $url;
        $this->ttl = $ttl;
    }

    public function build()
    {
        return $this->subject('Reset Password - PredDia')
            ->view('emails.reset-password');
    }
}
