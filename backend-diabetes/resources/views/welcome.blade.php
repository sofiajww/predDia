<!doctype html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <title>PredDia Backend</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style>
        body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: #f3f4f6;
            color: #111827;
        }
        .container {
            max-width: 720px;
            margin: 80px auto;
            background: #ffffff;
            border-radius: 14px;
            padding: 32px;
            box-shadow: 0 10px 30px rgba(0,0,0,.08);
        }
        h1 {
            margin-top: 0;
            color: #3b5d50;
        }
        p {
            line-height: 1.6;
            color: #4b5563;
        }
        .badge {
            display: inline-block;
            background: #3b5d50;
            color: #fff;
            padding: 6px 12px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 16px;
        }
        code {
            background: #f9fafb;
            padding: 6px 10px;
            border-radius: 6px;
            display: inline-block;
            margin-top: 8px;
            color: #111827;
        }
        footer {
            margin-top: 32px;
            font-size: 12px;
            color: #9ca3af;
            text-align: center;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="badge">PredDia API</div>

    <h1>Backend PredDia Aktif</h1>

    <p>
        Ini adalah backend API untuk aplikasi <b>PredDia</b>.
        Halaman ini hanya sebagai landing backend dan <b>bukan</b> endpoint API.
    </p>

    <p>
        Gunakan endpoint API berikut melalui Postman / Frontend:
    </p>

    <ul>
        <li><code>POST /api/register</code></li>
        <li><code>POST /api/login</code></li>
        <li><code>POST /api/forgot-password</code></li>
        <li><code>POST /api/reset-password</code></li>
        <li><code>POST /api/prediksi</code></li>
    </ul>

    <p>
        Jika kamu melihat halaman ini, berarti:
    </p>

    <ul>
        <li>Laravel berjalan dengan benar</li>
        <li>Routing web aktif</li>
        <li>API siap digunakan</li>
    </ul>

    <footer>
        © {{ date('Y') }} PredDia • Backend Service
    </footer>
</div>

</body>
</html>
