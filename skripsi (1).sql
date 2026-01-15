-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Jan 2026 pada 08.15
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skripsi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'Super Admin', 'admin@gmail.com', '$2y$10$7sc.6PxjpVts5qRJt.c79eDJod3Au.auqNYrYUMoO7xCk1XnxrEEe', NULL, '2026-01-10 00:03:40', '2026-01-10 00:03:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_kesehatans`
--

CREATE TABLE `data_kesehatans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `Pregnancies` int(11) DEFAULT NULL,
  `Glucose` int(11) NOT NULL,
  `BloodPressure` int(11) DEFAULT NULL,
  `SkinThickness` int(11) DEFAULT NULL,
  `Insulin` double(8,2) DEFAULT NULL,
  `BMI` double(8,2) NOT NULL,
  `DiabetesPedigreeFunction` double(8,2) DEFAULT NULL,
  `Age` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `data_kesehatans`
--

INSERT INTO `data_kesehatans` (`id`, `user_id`, `Pregnancies`, `Glucose`, `BloodPressure`, `SkinThickness`, `Insulin`, `BMI`, `DiabetesPedigreeFunction`, `Age`, `created_at`, `updated_at`) VALUES
(1, 4, 6, 160, 130, 22, 23.00, 22.00, 27.00, 29, '2026-01-09 21:26:07', '2026-01-09 21:26:07'),
(2, 5, 1, 98, 60, 10, 15.50, 24.60, 0.63, 22, '2026-01-09 21:54:05', '2026-01-09 21:54:05'),
(3, 5, 1, 98, 60, 10, 15.50, 24.60, 0.63, 22, '2026-01-09 22:13:07', '2026-01-09 22:13:07'),
(4, 5, 1, 98, 60, 10, 15.50, 24.60, 0.63, 22, '2026-01-09 22:14:59', '2026-01-09 22:14:59'),
(5, 5, 1, 98, 60, 10, 15.50, 24.60, 0.63, 22, '2026-01-09 22:15:07', '2026-01-09 22:15:07'),
(6, 5, 1, 98, 60, 10, 15.50, 24.60, 0.63, 22, '2026-01-09 22:37:23', '2026-01-09 22:37:23'),
(7, 6, 2, 160, 87, 22, 80.00, 26.00, 0.00, 22, '2026-01-09 22:40:06', '2026-01-09 22:40:06'),
(8, 5, 3, 98, 60, 16, 15.50, 24.60, 0.63, 22, '2026-01-09 23:30:42', '2026-01-09 23:30:42'),
(9, 4, 3, 192, 78, 22, 179.00, 24.00, 0.00, 33, '2026-01-09 23:39:32', '2026-01-09 23:39:32'),
(10, 7, 6, 148, 72, 35, 30.50, 33.60, 0.63, 50, '2026-01-09 23:41:35', '2026-01-09 23:41:35'),
(11, 7, 1, 85, 66, 29, 30.50, 26.60, 0.35, 31, '2026-01-09 23:42:14', '2026-01-09 23:42:14'),
(12, 8, 0, 160, 120, 22, 85.00, 23.00, 0.20, 23, '2026-01-10 01:00:33', '2026-01-10 01:00:33'),
(13, 9, 3, 160, 140, 21, 160.00, 23.00, 2.00, 21, '2026-01-10 20:11:06', '2026-01-10 20:11:06'),
(14, 9, 3, 2, 1, 4, 2.00, 5.00, 1.00, 6, '2026-01-10 21:10:17', '2026-01-10 21:10:17'),
(15, 10, 3, 98, 60, 16, 15.50, 24.60, 0.63, 22, '2026-01-10 21:20:36', '2026-01-10 21:20:36'),
(16, 9, 3, 2, 1, 4, 2.00, 5.00, 1.00, 6, '2026-01-10 21:22:16', '2026-01-10 21:22:16'),
(17, 9, 8, 183, 64, 23, 30.50, 23.30, 0.67, 32, '2026-01-10 21:37:54', '2026-01-10 21:37:54'),
(18, 11, 12, 200, 190, 33, 160.00, 27.60, 0.35, 30, '2026-01-10 23:40:57', '2026-01-10 23:40:57'),
(19, 11, 0, 80, 100, 23, 90.00, 22.40, 0.36, 25, '2026-01-10 23:41:34', '2026-01-10 23:41:34'),
(20, 12, 1, 89, 66, 23, 94.00, 28.10, 0.17, 21, '2026-01-11 00:01:19', '2026-01-11 00:01:19'),
(21, 12, 0, 137, 40, 35, 168.00, 43.10, 2.23, 33, '2026-01-11 00:02:28', '2026-01-11 00:02:28');

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `hasil_prediksi`
--

CREATE TABLE `hasil_prediksi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `data_kesehatan_id` bigint(20) UNSIGNED DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `id_admin` bigint(20) UNSIGNED DEFAULT NULL,
  `hasil` varchar(255) NOT NULL,
  `tanggal_prediksi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `hasil_prediksi`
--

INSERT INTO `hasil_prediksi` (`id`, `data_kesehatan_id`, `user_id`, `id_admin`, `hasil`, `tanggal_prediksi`, `created_at`, `updated_at`) VALUES
(2, 6, 5, NULL, 'Negatif Diabetes', '2026-01-09 22:37:23', '2026-01-09 22:37:23', '2026-01-09 22:37:23'),
(3, 7, NULL, NULL, 'Negatif Diabetes', '2026-01-09 22:40:06', '2026-01-09 22:40:06', '2026-01-09 22:40:06'),
(4, 8, 5, NULL, 'Negatif Diabetes', '2026-01-09 23:30:43', '2026-01-09 23:30:43', '2026-01-09 23:30:43'),
(5, 9, NULL, NULL, 'Positif Diabetes', '2026-01-09 23:39:32', '2026-01-09 23:39:32', '2026-01-09 23:39:32'),
(6, 10, 7, 2, 'Positif Diabetes', '2026-01-11 06:11:48', '2026-01-09 23:41:35', '2026-01-10 23:11:48'),
(7, 11, 7, NULL, 'Negatif Diabetes', '2026-01-09 23:42:14', '2026-01-09 23:42:14', '2026-01-09 23:42:14'),
(8, 12, 8, NULL, 'Negatif Diabetes', '2026-01-10 01:00:34', '2026-01-10 01:00:34', '2026-01-10 01:00:34'),
(9, 13, 9, NULL, 'Negatif Diabetes', '2026-01-10 20:11:10', '2026-01-10 20:11:10', '2026-01-10 20:11:10'),
(10, 14, 9, NULL, 'Negatif Diabetes', '2026-01-10 21:10:19', '2026-01-10 21:10:19', '2026-01-10 21:10:19'),
(11, 15, 10, NULL, 'Negatif Diabetes', '2026-01-10 21:20:37', '2026-01-10 21:20:37', '2026-01-10 21:20:37'),
(12, 16, 9, NULL, 'Negatif Diabetes', '2026-01-10 21:22:17', '2026-01-10 21:22:17', '2026-01-10 21:22:17'),
(13, 17, 9, NULL, 'Positif Diabetes', '2026-01-10 21:37:54', '2026-01-10 21:37:54', '2026-01-10 21:37:54'),
(14, 18, NULL, NULL, 'Positif Diabetes', '2026-01-10 23:40:57', '2026-01-10 23:40:57', '2026-01-10 23:40:57'),
(15, 19, NULL, NULL, 'Negatif Diabetes', '2026-01-10 23:41:34', '2026-01-10 23:41:34', '2026-01-10 23:41:34'),
(16, 20, 12, NULL, 'Negatif Diabetes', '2026-01-11 00:01:20', '2026-01-11 00:01:20', '2026-01-11 00:01:20'),
(17, 21, 12, NULL, 'Positif Diabetes', '2026-01-11 00:02:28', '2026-01-11 00:02:28', '2026-01-11 00:02:28');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(32, '2014_10_12_000000_create_users_table', 1),
(33, '2014_10_12_100000_create_password_resets_table', 1),
(34, '2019_08_19_000000_create_failed_jobs_table', 1),
(35, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(36, '2025_11_24_052757_create_sarans_table', 1),
(37, '2025_11_24_164105_create_data_kesehatans_table', 1),
(38, '2026_01_09_155125_create_hasil_prediksi_table', 1),
(39, '2026_01_09_171037_add_role_to_users_table', 2),
(40, '2026_01_10_053008_add_hasil_dan_tanggal_to_hasil_prediksi_table', 3),
(41, '2026_01_10_065111_create_admins_table', 4);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token_hash` varchar(255) DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 2, 'user-token', '8cfc4c2286b1b30ce773f2336824f962ef5dd0175564f6d0f3fcf3ae60f82741', '[\"*\"]', NULL, NULL, '2026-01-09 10:22:51', '2026-01-09 10:22:51'),
(3, 'App\\Models\\User', 3, 'user-token', 'fbda2eca7543557637f76ededad9214c7b5f8aa6b5fed5011e12577379ad3ef5', '[\"*\"]', NULL, NULL, '2026-01-09 21:11:33', '2026-01-09 21:11:33'),
(4, 'App\\Models\\User', 4, 'user-token', 'b7207c2b5bf1428e7bbfde0ebfc2c3eb93e984f24b8dcb2836f046452b1da759', '[\"*\"]', '2026-01-09 23:39:33', NULL, '2026-01-09 21:25:42', '2026-01-09 23:39:33'),
(5, 'App\\Models\\User', 5, 'user-token', '0ac3cf606a7467b2b41957711070cd51951c61acc47c623e1e1a55ca50d45386', '[\"*\"]', '2026-01-09 22:37:23', NULL, '2026-01-09 21:50:07', '2026-01-09 22:37:23'),
(6, 'App\\Models\\User', 6, 'user-token', 'eecd158bc58f2fe53ab3a36554e5552587cefa54067dcb53d991bc1e2a0236f4', '[\"*\"]', '2026-01-09 23:38:20', NULL, '2026-01-09 22:39:38', '2026-01-09 23:38:20'),
(7, 'App\\Models\\User', 5, 'api-token', '2268c5e6b7348dbaa34a09e481997310dee7b253a97578c57e56a8b9161bf21d', '[\"*\"]', '2026-01-09 23:38:34', NULL, '2026-01-09 23:30:10', '2026-01-09 23:38:34'),
(8, 'App\\Models\\User', 7, 'api-token', '38c70251b0b6b1140eae7f0c9a00f627521a743948beea9432c47e7cb16fe67d', '[\"*\"]', '2026-01-09 23:42:15', NULL, '2026-01-09 23:40:31', '2026-01-09 23:42:15'),
(9, 'App\\Models\\Admin', 2, 'admin-token', '60ebcbd94a2265f9d88f56b4bba0f7cd164dde3ca619717bb8e82eadc06c4aad', '[\"*\"]', NULL, NULL, '2026-01-10 00:59:09', '2026-01-10 00:59:09'),
(10, 'App\\Models\\User', 8, 'api-token', 'f7a9b4a39c0c8a014cb5981a04a9ccc08ba8caf4af0f7d89ea8cc09c2f939e9a', '[\"*\"]', '2026-01-10 01:00:35', NULL, '2026-01-10 01:00:05', '2026-01-10 01:00:35'),
(11, 'App\\Models\\Admin', 2, 'admin-token', '2f28463aad713087de1e8a92b82aff9c514a04d1424a13dfe1d9093d23f38ac0', '[\"*\"]', '2026-01-10 01:01:07', NULL, '2026-01-10 01:00:59', '2026-01-10 01:01:07'),
(12, 'App\\Models\\Admin', 2, 'admin-token', '8dc0ad89b0ce2cbf8411a15e5eb171ea307fc40551a7b397e24a307c1f3a736a', '[\"*\"]', '2026-01-10 04:12:54', NULL, '2026-01-10 04:12:50', '2026-01-10 04:12:54'),
(13, 'App\\Models\\User', 4, 'api-token', 'ad871091c9abe8ad2a8417b5f8d53db2ab1663be86423a9cb4c9f189b93b38f9', '[\"*\"]', NULL, NULL, '2026-01-10 19:47:35', '2026-01-10 19:47:35'),
(14, 'App\\Models\\Admin', 2, 'admin-token', '6ca1181afc9c76dac121fc7ca3422257159f5b1d268e525b69c7788929fd0441', '[\"*\"]', '2026-01-10 19:49:58', NULL, '2026-01-10 19:49:54', '2026-01-10 19:49:58'),
(15, 'App\\Models\\User', 9, 'api-token', '3012287c6caa975d2f928ba7867cf98d0ec5d357e9c659d1d505ad57ead12477', '[\"*\"]', NULL, NULL, '2026-01-10 19:51:29', '2026-01-10 19:51:29'),
(16, 'App\\Models\\User', 9, 'api-token', '5b57cf8632da4b5a92e1900bac5307b463f2daf8f8abaaf271bd3083f852b7d8', '[\"*\"]', '2026-01-10 21:36:13', NULL, '2026-01-10 19:53:35', '2026-01-10 21:36:13'),
(17, 'App\\Models\\User', 10, 'api-token', '13e2eb8ae807bd317f59ecc628e6385e460213449f67b56acded816d88c16a73', '[\"*\"]', '2026-01-10 21:35:58', NULL, '2026-01-10 21:20:10', '2026-01-10 21:35:58'),
(18, 'App\\Models\\User', 9, 'api-token', '2ed7edea882bf7176b01ef957f6b6ef2cc51fe567acd87267f16c089071b0cac', '[\"*\"]', '2026-01-10 21:37:54', NULL, '2026-01-10 21:36:38', '2026-01-10 21:37:54'),
(20, 'App\\Models\\Admin', 2, 'admin-token', '228ee6a14702e27c029c46e55842b39ea8bff43d123195c701288525778b443d', '[\"*\"]', '2026-01-10 22:20:27', NULL, '2026-01-10 21:43:30', '2026-01-10 22:20:27'),
(21, 'App\\Models\\Admin', 2, 'admin-token', '8e2ab95c9ea7d4fef875a15e179f056488d53887dddce495238e3548ea243399', '[\"*\"]', '2026-01-11 00:05:51', NULL, '2026-01-10 22:24:16', '2026-01-11 00:05:51'),
(22, 'App\\Models\\User', 11, 'api-token', '779b2c3a77e82f5d3332ec3c8e39183575c79d3cb8ea899b5e4d8df760d65886', '[\"*\"]', '2026-01-10 23:41:35', NULL, '2026-01-10 23:40:18', '2026-01-10 23:41:35'),
(24, 'App\\Models\\User', 11, 'api-token', 'f5ba6984f685a5ede1d2f6464908c4a83c220262b731ba05aff62c15b7f976a4', '[\"*\"]', '2026-01-10 23:55:06', NULL, '2026-01-10 23:55:03', '2026-01-10 23:55:06'),
(25, 'App\\Models\\User', 12, 'api-token', '580829ffb39457cad6735dc314e36b3dcafced5d792347bbea4b5e06b65bd483', '[\"*\"]', '2026-01-11 00:02:29', NULL, '2026-01-10 23:59:50', '2026-01-11 00:02:29'),
(26, 'App\\Models\\User', 12, 'api-token', '1e4ae695be8b68bf9bb98910d2b14aca90fa32338eb6555de90f7af8fde5bd1f', '[\"*\"]', '2026-01-11 00:04:23', NULL, '2026-01-11 00:04:19', '2026-01-11 00:04:23'),
(28, 'App\\Models\\Admin', 2, 'admin-token', 'a405639834b863a5f9faa8a04c9e624750f2cf962584eb8078039a7c2e094154', '[\"*\"]', '2026-01-11 00:12:35', NULL, '2026-01-11 00:06:17', '2026-01-11 00:12:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sarans`
--

CREATE TABLE `sarans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pesan` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sarans`
--

INSERT INTO `sarans` (`id`, `nama`, `email`, `pesan`, `created_at`, `updated_at`) VALUES
(2, 'chandra dwiky', 'chandra@gmail.com', 'keren, semangat', '2026-01-10 23:37:35', '2026-01-10 23:37:35'),
(4, 'silvy', 'silvy@gmail.com', 'sudah bagus banget, semangatttt', '2026-01-10 23:58:19', '2026-01-10 23:58:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `role`) VALUES
(2, 'sofi anjarwati', 'sofianjarwati0@gmail.com', NULL, '$2y$10$dnsSrLO8FS.ZqehBMOCysOKAMeXys4ES.6/vStYBYj4tUjb2Z5z9e', NULL, '2026-01-09 10:22:43', '2026-01-09 10:22:43', 'user'),
(3, 'sofi anjarwati', 'sofianjarwatii0@gmail.com', NULL, '$2y$10$8alTFrVuZiNo9qynRVRHou2IIZLubtUdah/aFELwoVH69/gIY66Y6', NULL, '2026-01-09 20:54:36', '2026-01-09 20:54:36', 'user'),
(5, 'sofi anjarwati', 'sofianjarwa0@gmail.com', NULL, '$2y$10$K3dhfSlDlMo9Hb69niTJXu8xzb49/rr.UBfwsdq9ZI8.Vsa22S3o.', NULL, '2026-01-09 21:49:55', '2026-01-09 21:49:55', 'user'),
(7, 'chandra dwiky', 'chandra@gmail.com', NULL, '$2y$10$XAQb.0DIn1IH70q94q6DlOZOAfaJWgCDeCye0aax9/8nPOkhuZBzG', NULL, '2026-01-09 23:40:13', '2026-01-09 23:40:13', 'user'),
(8, 'sofia', 'sopik@gmail.com', NULL, '$2y$10$sgkFV6ULxML0we/BiWFc3uLlakXm70nTvcqIOqQOpTW.XRp/k3N6.', NULL, '2026-01-10 00:59:46', '2026-01-10 00:59:46', 'user'),
(9, 'ebrahim', 'ebra@gmail.com', NULL, '$2y$10$NPLPFZEYWK/BfikBJ4YixuHQs2w4XqVxjCQhEldsCloM9s9OFzLqq', NULL, '2026-01-10 19:50:48', '2026-01-10 19:50:48', 'user'),
(10, 'sofi anjarwati', 'sofia0@gmail.com', NULL, '$2y$10$MbUcLolXVaH3YF5ywK0RyejLRSNwv3hbLXehGTt4YklAWYf/2qiJa', NULL, '2026-01-10 21:20:03', '2026-01-10 21:20:03', 'user'),
(12, 'silvy', 'ajwsofi@gmail.com', NULL, '$2y$10$Zdq.UqqLnFRqd8SHWSngg.rbYQ8moIbmYcFS/QWpab0lxizvq.sQi', NULL, '2026-01-10 23:59:32', '2026-01-11 00:03:51', 'user');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indeks untuk tabel `data_kesehatans`
--
ALTER TABLE `data_kesehatans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `hasil_prediksi`
--
ALTER TABLE `hasil_prediksi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hasil_prediksi_id_admin_foreign` (`id_admin`),
  ADD KEY `fk_data_kesehatan` (`data_kesehatan_id`),
  ADD KEY `fk_user` (`user_id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `sarans`
--
ALTER TABLE `sarans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `data_kesehatans`
--
ALTER TABLE `data_kesehatans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `hasil_prediksi`
--
ALTER TABLE `hasil_prediksi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT untuk tabel `sarans`
--
ALTER TABLE `sarans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `hasil_prediksi`
--
ALTER TABLE `hasil_prediksi`
  ADD CONSTRAINT `fk_data_kesehatan` FOREIGN KEY (`data_kesehatan_id`) REFERENCES `data_kesehatans` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `hasil_prediksi_id_admin_foreign` FOREIGN KEY (`id_admin`) REFERENCES `users` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
