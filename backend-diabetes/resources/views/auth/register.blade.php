<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}"> <!-- CSRF Token -->
    <title>Register | PredDia</title>

    <style>
        /* Style untuk form (bisa disesuaikan sesuai kebutuhan) */
        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f3f4f6;
            padding: 20px;
        }
        .form-container {
            max-width: 450px;
            margin: auto;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        input[type="text"], input[type="email"], input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            width: 100%;
            padding: 12px;
            background-color: #3b5d50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:disabled {
            background-color: #aaa;
        }
    </style>
</head>
<body>

    <div class="form-container">
        <h2 style="text-align:center">Registrasi</h2>

        <form action="{{ route('register') }}" method="POST" id="register-form">
            @csrf  <!-- CSRF Protection -->

            <!-- Name Input -->
            <label for="name">Nama Lengkap:</label>
            <input type="text" id="name" name="name" placeholder="Masukkan nama lengkap" required>

            <!-- Email Input -->
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Masukkan email" required>

            <!-- Password Input -->
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Masukkan password" required>

            <!-- Confirm Password Input -->
            <label for="password_confirmation">Konfirmasi Password:</label>
            <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Ulangi password" required>

            <!-- Register Button -->
            <button type="submit" id="submit-btn">Daftar</button>
        </form>
        
        <!-- Error Message -->
        <div id="error-message" style="color:red; display:none;"></div>
    </div>

    <script>
        // Menangani form submission menggunakan AJAX
        document.getElementById('register-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman form biasa

            let formData = new FormData(this); // Mengambil data dari form
            let submitBtn = document.getElementById('submit-btn');
            let errorMessage = document.getElementById('error-message');
            submitBtn.disabled = true;
            errorMessage.style.display = 'none';

            fetch('{{ route("register") }}', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    // Jika berhasil, alihkan ke halaman login
                    alert('Registrasi berhasil! Silakan login.');
                    window.location.href = '/login'; 
                } else {
                    // Jika ada error, tampilkan pesan error
                    errorMessage.style.display = 'block';
                    errorMessage.textContent = data.message || 'Terjadi kesalahan.';
                }
                submitBtn.disabled = false;
            })
            .catch(error => {
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'Terjadi kesalahan pada server.';
                submitBtn.disabled = false;
            });
        });
    </script>

</body>
</html>
