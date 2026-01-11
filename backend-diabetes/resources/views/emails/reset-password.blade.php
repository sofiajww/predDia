<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Reset Password</title>
  </head>
  <body style="margin:0; padding:0; background:#f3f4f6; font-family: Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6; padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:14px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,.06);">
            <!-- Header -->
            <tr>
              <td style="background:#3b5d50; padding:18px 20px; color:#fff;">
                <div style="font-weight:800; font-size:16px;">PredDia</div>
                <div style="opacity:.9; font-size:12px; margin-top:4px;">Reset Password</div>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:22px 20px; color:#111827;">
                <h2 style="margin:0 0 10px 0; font-size:18px;">Reset Password</h2>
                <p style="margin:0 0 14px 0; color:#4b5563; font-size:14px; line-height:1.6;">
                  Halo, kami menerima permintaan untuk reset password akun kamu.
                  Klik tombol di bawah untuk membuat password baru.
                </p>

                <div style="margin:18px 0 18px 0;">
                  <a href="{{ $url }}"
                     style="display:inline-block; background:#3b5d50; color:#ffffff; text-decoration:none;
                            padding:12px 16px; border-radius:10px; font-weight:800; font-size:14px;">
                    Reset Password
                  </a>
                </div>

                <p style="margin:0 0 10px 0; color:#6b7280; font-size:12px; line-height:1.6;">
                  Link ini berlaku <b>{{ $ttl }}</b> menit. Jika kamu tidak merasa meminta reset password,
                  abaikan email ini.
                </p>

                <hr style="border:none; border-top:1px solid #e5e7eb; margin:16px 0;" />

                <p style="margin:0; color:#6b7280; font-size:12px; line-height:1.6;">
                  Jika tombol tidak bisa diklik, salin link ini ke browser:
                </p>
                <p style="margin:8px 0 0 0; font-size:12px; line-height:1.6; word-break:break-all;">
                  <a href="{{ $url }}" style="color:#3b5d50; text-decoration:underline;">{{ $url }}</a>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:14px 20px; background:#f9fafb; color:#6b7280; font-size:12px;">
                © {{ date('Y') }} PredDia • Email otomatis, mohon tidak membalas.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
