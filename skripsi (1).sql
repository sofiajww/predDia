-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 16, 2026 at 11:35 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

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
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'Super Admin', 'admin@gmail.com', '$2y$10$7sc.6PxjpVts5qRJt.c79eDJod3Au.auqNYrYUMoO7xCk1XnxrEEe', NULL, '2026-01-10 00:03:40', '2026-01-10 00:03:40');

-- --------------------------------------------------------

--
-- Table structure for table `data_kesehatans`
--

CREATE TABLE `data_kesehatans` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `Pregnancies` int DEFAULT NULL,
  `Glucose` int NOT NULL,
  `BloodPressure` int DEFAULT NULL,
  `SkinThickness` int DEFAULT NULL,
  `Insulin` double(8,2) DEFAULT NULL,
  `BMI` double(8,2) NOT NULL,
  `DiabetesPedigreeFunction` double(8,2) DEFAULT NULL,
  `Age` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `data_kesehatans`
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
(21, 12, 0, 137, 40, 35, 168.00, 43.10, 2.23, 33, '2026-01-11 00:02:28', '2026-01-11 00:02:28'),
(22, 13, 2, 123, 278, 39, 180.00, 33.00, 2.00, 22, '2026-01-11 04:33:08', '2026-01-11 04:33:08'),
(23, 14, 4, 90, 120, 26, 100.00, 23.30, 0.35, 24, '2026-01-11 20:34:09', '2026-01-11 20:34:09'),
(24, 2, 34, 334, 224, 22, 189.00, 22.00, 2.00, 34, '2026-01-11 22:15:25', '2026-01-11 22:15:25'),
(25, 15, 3, 120, 120, 33, 100.00, 24.00, 0.10, 25, '2026-01-12 21:10:51', '2026-01-12 21:10:51'),
(26, 15, 20, 200, 200, 55, 230.00, 30.00, 5.00, 22, '2026-01-13 05:00:12', '2026-01-13 05:00:12'),
(27, 2, 4, 200, 180, 33, 200.00, 26.60, 4.00, 26, '2026-01-14 04:24:21', '2026-01-14 04:24:21'),
(28, 15, 0, 100, 120, 20, 100.00, 24.00, 0.00, 24, '2026-01-14 09:30:43', '2026-01-14 09:30:43'),
(29, 16, 8, 250, 230, 33, 190.00, 29.60, 1.30, 30, '2026-01-14 20:31:07', '2026-01-14 20:31:07'),
(30, 2, 0, 80, 100, 20, 100.00, 22.00, 0.00, 20, '2026-01-15 05:44:59', '2026-01-15 05:44:59'),
(31, 17, 8, 230, 190, 33, 197.00, 27.30, 0.67, 20, '2026-01-15 19:54:26', '2026-01-15 19:54:26');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hasil_prediksi`
--

CREATE TABLE `hasil_prediksi` (
  `id` bigint UNSIGNED NOT NULL,
  `data_kesehatan_id` bigint UNSIGNED DEFAULT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `id_admin` bigint UNSIGNED DEFAULT NULL,
  `hasil` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggal_prediksi` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hasil_prediksi`
--

INSERT INTO `hasil_prediksi` (`id`, `data_kesehatan_id`, `user_id`, `id_admin`, `hasil`, `tanggal_prediksi`, `created_at`, `updated_at`) VALUES
(2, 6, 5, NULL, 'Negatif Diabetes', '2026-01-09 22:37:23', '2026-01-09 22:37:23', '2026-01-09 22:37:23'),
(3, 7, NULL, NULL, 'Negatif Diabetes', '2026-01-09 22:40:06', '2026-01-09 22:40:06', '2026-01-09 22:40:06'),
(4, 8, 5, NULL, 'Negatif Diabetes', '2026-01-09 23:30:43', '2026-01-09 23:30:43', '2026-01-09 23:30:43'),
(5, 9, NULL, 2, 'Positif Diabetes', '2026-01-11 12:04:09', '2026-01-09 23:39:32', '2026-01-11 05:04:09'),
(6, 10, NULL, 2, 'Positif Diabetes', '2026-01-11 06:11:48', '2026-01-09 23:41:35', '2026-01-10 23:11:48'),
(7, 11, NULL, 2, 'Negatif Diabetes', '2026-01-14 11:29:00', '2026-01-09 23:42:14', '2026-01-14 04:29:00'),
(8, 12, 8, NULL, 'Negatif Diabetes', '2026-01-10 01:00:34', '2026-01-10 01:00:34', '2026-01-10 01:00:34'),
(9, 13, 9, NULL, 'Negatif Diabetes', '2026-01-10 20:11:10', '2026-01-10 20:11:10', '2026-01-10 20:11:10'),
(10, 14, 9, NULL, 'Negatif Diabetes', '2026-01-10 21:10:19', '2026-01-10 21:10:19', '2026-01-10 21:10:19'),
(11, 15, 10, NULL, 'Negatif Diabetes', '2026-01-10 21:20:37', '2026-01-10 21:20:37', '2026-01-10 21:20:37'),
(12, 16, 9, NULL, 'Negatif Diabetes', '2026-01-10 21:22:17', '2026-01-10 21:22:17', '2026-01-10 21:22:17'),
(13, 17, 9, NULL, 'Positif Diabetes', '2026-01-10 21:37:54', '2026-01-10 21:37:54', '2026-01-10 21:37:54'),
(14, 18, NULL, NULL, 'Positif Diabetes', '2026-01-10 23:40:57', '2026-01-10 23:40:57', '2026-01-10 23:40:57'),
(15, 19, NULL, NULL, 'Negatif Diabetes', '2026-01-10 23:41:34', '2026-01-10 23:41:34', '2026-01-10 23:41:34'),
(16, 20, 12, NULL, 'Negatif Diabetes', '2026-01-11 00:01:20', '2026-01-11 00:01:20', '2026-01-11 00:01:20'),
(17, 21, 12, NULL, 'Positif Diabetes', '2026-01-11 00:02:28', '2026-01-11 00:02:28', '2026-01-11 00:02:28'),
(18, 22, 13, NULL, 'Negatif Diabetes', '2026-01-11 04:33:08', '2026-01-11 04:33:08', '2026-01-11 04:33:08'),
(19, 23, 14, 2, 'Negatif Diabetes', '2026-01-12 03:37:09', '2026-01-11 20:34:12', '2026-01-11 20:37:09'),
(20, 24, 2, NULL, 'Positif Diabetes', '2026-01-11 22:15:25', '2026-01-11 22:15:25', '2026-01-11 22:15:25'),
(21, 25, 15, NULL, 'Negatif Diabetes', '2026-01-12 21:10:54', '2026-01-12 21:10:54', '2026-01-12 21:10:54'),
(22, 26, 15, NULL, 'Positif Diabetes', '2026-01-13 05:00:13', '2026-01-13 05:00:13', '2026-01-13 05:00:13'),
(23, 27, 2, NULL, 'Positif Diabetes', '2026-01-14 04:24:23', '2026-01-14 04:24:23', '2026-01-14 04:24:23'),
(24, 28, 15, NULL, 'Negatif Diabetes', '2026-01-14 09:30:45', '2026-01-14 09:30:45', '2026-01-14 09:30:45'),
(25, 29, 16, 2, 'Positif Diabetes', '2026-01-15 03:33:20', '2026-01-14 20:31:07', '2026-01-14 20:33:20'),
(26, 30, 2, NULL, 'Negatif Diabetes', '2026-01-15 05:45:01', '2026-01-15 05:45:01', '2026-01-15 05:45:01'),
(27, 31, 17, 2, 'Positif Diabetes', '2026-01-16 02:55:46', '2026-01-15 19:54:28', '2026-01-15 19:55:46');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
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
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token_hash` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token_hash`, `expires_at`, `created_at`) VALUES
('sofianjarwati0@gmail.com', '622fcb14d372ec1af76915226b75d0da649dd0264431875e6bd71ff8a0a282a4', '2026-01-16 03:09:53', '2026-01-15 19:54:53');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
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
(28, 'App\\Models\\Admin', 2, 'admin-token', 'a405639834b863a5f9faa8a04c9e624750f2cf962584eb8078039a7c2e094154', '[\"*\"]', '2026-01-11 00:12:35', NULL, '2026-01-11 00:06:17', '2026-01-11 00:12:35'),
(29, 'App\\Models\\User', 13, 'api-token', 'f877d022be47f88463d4ba1455054517022d4fcb9dad82b15526afdfe54b244e', '[\"*\"]', '2026-01-11 04:33:09', NULL, '2026-01-11 04:32:12', '2026-01-11 04:33:09'),
(30, 'App\\Models\\Admin', 2, 'admin-token', '54b188b2ad1d1cc4e84ebb8ef374dfc27c08a67be96f32941ad69a4c2e59dffe', '[\"*\"]', '2026-01-11 06:23:38', NULL, '2026-01-11 04:38:21', '2026-01-11 06:23:38'),
(31, 'App\\Models\\User', 14, 'api-token', '9f830d6c5ba9c63163f22f2d5c28a5049efc062152e986d29b7d80eb761b7b1f', '[\"*\"]', '2026-01-11 20:34:13', NULL, '2026-01-11 20:33:23', '2026-01-11 20:34:13'),
(32, 'App\\Models\\User', 14, 'api-token', 'aedb589057c46b86301e8609295959153ff6c0b5f3d13f0bc35f3b604c1d44d0', '[\"*\"]', '2026-01-11 20:35:56', NULL, '2026-01-11 20:35:52', '2026-01-11 20:35:56'),
(33, 'App\\Models\\Admin', 2, 'admin-token', '286257ca26263e8452112d0a4363f7735fea6895df588a0e72cfd67ecf118318', '[\"*\"]', '2026-01-11 20:44:29', NULL, '2026-01-11 20:36:22', '2026-01-11 20:44:29'),
(34, 'App\\Models\\Admin', 2, 'admin-token', 'c5ae2380fde001f9a7cae7774f01c87d399e486a6f8275c97b9cc94c747e0faa', '[\"*\"]', '2026-01-11 22:14:34', NULL, '2026-01-11 22:14:30', '2026-01-11 22:14:34'),
(35, 'App\\Models\\User', 2, 'api-token', '125809f528a0c8575b3a59ae0c9db35bd596e0f15bc32e444669f00f9537f5c8', '[\"*\"]', '2026-01-11 22:15:26', NULL, '2026-01-11 22:14:56', '2026-01-11 22:15:26'),
(36, 'App\\Models\\User', 2, 'api-token', '09be0163b2ea00e65f590084054856ac1e5386d4b15870767788f008e43cb5fa', '[\"*\"]', '2026-01-12 07:44:34', NULL, '2026-01-12 07:44:30', '2026-01-12 07:44:34'),
(37, 'App\\Models\\User', 2, 'api-token', 'c48935066771fa3f816f084e33c2782d1cfaec97087a36c11ad16982659568ce', '[\"*\"]', '2026-01-12 21:08:06', NULL, '2026-01-12 21:08:02', '2026-01-12 21:08:06'),
(38, 'App\\Models\\User', 2, 'api-token', '7bf2b6ee0676ec300dfd8920c9010d59a29c4f99bc7554be15fc0872ef3d8264', '[\"*\"]', NULL, NULL, '2026-01-12 21:08:03', '2026-01-12 21:08:03'),
(39, 'App\\Models\\User', 15, 'api-token', 'bb6d5925b50ce566fab4479c28a962eb9b5b50d9ee94a1d0b6998ba07cee9a49', '[\"*\"]', '2026-01-12 21:10:55', NULL, '2026-01-12 21:10:23', '2026-01-12 21:10:55'),
(41, 'App\\Models\\User', 15, 'api-token', '6eaea5ab6aa5df1a4ad268e37b43ce49920f0b034d6fb9e9b1e1223556cb718b', '[\"*\"]', '2026-01-13 05:00:13', NULL, '2026-01-13 04:59:26', '2026-01-13 05:00:13'),
(42, 'App\\Models\\User', 15, 'api-token', '82d353ec2ab012341b378628a9413072095fe4a8821c9c393bbed6607a5ebbe7', '[\"*\"]', '2026-01-13 05:03:29', NULL, '2026-01-13 05:03:26', '2026-01-13 05:03:29'),
(44, 'App\\Models\\User', 15, 'api-token', '4ab01d1af36a7cc93a201f8e122cc34ac1607e419f1c27a61b1608d35e050a15', '[\"*\"]', '2026-01-13 20:42:47', NULL, '2026-01-13 20:42:42', '2026-01-13 20:42:47'),
(45, 'App\\Models\\User', 2, 'api-token', '10def56cd76e3008b80625e801baf18df19d0aaf9ab75a200dfb7f34c6785e5d', '[\"*\"]', '2026-01-14 04:24:24', NULL, '2026-01-14 04:23:42', '2026-01-14 04:24:24'),
(46, 'App\\Models\\User', 2, 'api-token', '077d6b8f50dbc1774229a7116b7949cee598fa59dc877f4563e6fdd9a3269e0d', '[\"*\"]', '2026-01-14 04:26:04', NULL, '2026-01-14 04:26:01', '2026-01-14 04:26:04'),
(48, 'App\\Models\\User', 15, 'api-token', 'dacfa03b6df5472c18947a75e7271f6d11a49d496eb445f920642b5048f2002b', '[\"*\"]', '2026-01-14 09:30:45', NULL, '2026-01-14 09:30:10', '2026-01-14 09:30:45'),
(49, 'App\\Models\\User', 15, 'api-token', '30e348ed8ca882ff19d1265e435d49b5f1da80eef99b2caeb74b81e0b22e8a35', '[\"*\"]', NULL, NULL, '2026-01-14 09:30:11', '2026-01-14 09:30:11'),
(50, 'App\\Models\\Admin', 2, 'admin-token', 'd4ca82530a7745572ca1a719183a4afc2972f66bc4182f331b9ab5957b6b2d1f', '[\"*\"]', '2026-01-14 09:31:22', NULL, '2026-01-14 09:31:20', '2026-01-14 09:31:22'),
(51, 'App\\Models\\User', 16, 'api-token', '2cb20cc24c23f7d25e41976f08d4e932f3138d2a4d037cd859344dd9c2fa8dc2', '[\"*\"]', '2026-01-14 20:31:08', NULL, '2026-01-14 20:30:21', '2026-01-14 20:31:08'),
(52, 'App\\Models\\User', 2, 'api-token', '2b838585a8881ce501a0b0316de7ebceebd8f375c2fd6477946ddd483f3f7ee0', '[\"*\"]', '2026-01-14 20:32:34', NULL, '2026-01-14 20:32:30', '2026-01-14 20:32:34'),
(55, 'App\\Models\\User', 2, 'api-token', 'aa889ba5710f81cd4e10bd0becb75bbb4d6e311ba12432065084f9672987c907', '[\"*\"]', '2026-01-14 23:31:10', NULL, '2026-01-14 23:31:07', '2026-01-14 23:31:10'),
(56, 'App\\Models\\User', 2, 'api-token', 'ae60f0ff79f673352474e16aeac28d01b69a713f42fa79e8175d30a140a4893e', '[\"*\"]', '2026-01-15 05:45:02', NULL, '2026-01-15 05:38:35', '2026-01-15 05:45:02'),
(57, 'App\\Models\\User', 2, 'api-token', 'e1e072a50924ba7165cb6b882e1f0c6bf6a4a61bf4a390100da4d6faae9c20f8', '[\"*\"]', '2026-01-15 05:47:39', NULL, '2026-01-15 05:47:37', '2026-01-15 05:47:39'),
(59, 'App\\Models\\Admin', 2, 'admin-token', '1d17a9f4cdcca88b253f5e497dc0359dc8577359a4265807856ae7e98e1567b6', '[\"*\"]', '2026-01-15 05:50:48', NULL, '2026-01-15 05:50:43', '2026-01-15 05:50:48'),
(60, 'App\\Models\\User', 15, 'api-token', '49e8b7841df1dff6041ba75787287982af196213aabdca290824c8498373e596', '[\"*\"]', '2026-01-15 07:32:10', NULL, '2026-01-15 07:32:07', '2026-01-15 07:32:10'),
(61, 'App\\Models\\User', 15, 'api-token', 'b932254883f0831d951d67e29b0c9f3ea2eb6d02c082f0e4cdc6799a46473b81', '[\"*\"]', NULL, NULL, '2026-01-15 07:32:08', '2026-01-15 07:32:08'),
(62, 'App\\Models\\User', 17, 'api-token', 'd2522db4538472353760183fcf22e6da0ceca17b42e12ec40d80491fd19d9982', '[\"*\"]', '2026-01-15 19:54:29', NULL, '2026-01-15 19:53:47', '2026-01-15 19:54:29');

-- --------------------------------------------------------

--
-- Table structure for table `sarans`
--

CREATE TABLE `sarans` (
  `id` bigint UNSIGNED NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pesan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sarans`
--

INSERT INTO `sarans` (`id`, `nama`, `email`, `pesan`, `created_at`, `updated_at`) VALUES
(4, 'silvy', 'silvy@gmail.com', 'sudah bagus banget, semangatttt', '2026-01-10 23:58:19', '2026-01-10 23:58:19'),
(6, 'tyass', 'tyas@gmail.com', 'josjiss', '2026-01-11 20:44:21', '2026-01-11 20:44:21'),
(7, 'salsa', 'salsa@gmail.com', 'bagusss', '2026-01-14 04:27:49', '2026-01-14 04:27:49'),
(8, 'raja', 'raja@gmail.com', 'baguss', '2026-01-14 20:29:16', '2026-01-14 20:29:16'),
(9, 'riska', 'riska@gmail.com', 'sudah keren', '2026-01-15 05:50:19', '2026-01-15 05:50:19'),
(10, 'zilaya', 'zila@gmail.com', 'sudah oke ini', '2026-01-15 19:51:55', '2026-01-15 19:51:55');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `role`) VALUES
(2, 'sofi anjarwati', 'sofianjarwati0@gmail.com', NULL, '$2y$10$h5FzL4pUn2hlBVFp4FmLtOSnfIXBt7rpmJVs9.hJFtqIP2Eih/T3m', NULL, '2026-01-09 10:22:43', '2026-01-15 05:47:19', 'user'),
(3, 'sofi anjarwati', 'sofianjarwatii0@gmail.com', NULL, '$2y$10$8alTFrVuZiNo9qynRVRHou2IIZLubtUdah/aFELwoVH69/gIY66Y6', NULL, '2026-01-09 20:54:36', '2026-01-09 20:54:36', 'user'),
(5, 'sofi anjarwati', 'sofianjarwa0@gmail.com', NULL, '$2y$10$K3dhfSlDlMo9Hb69niTJXu8xzb49/rr.UBfwsdq9ZI8.Vsa22S3o.', NULL, '2026-01-09 21:49:55', '2026-01-09 21:49:55', 'user'),
(8, 'sofia', 'sopik@gmail.com', NULL, '$2y$10$sgkFV6ULxML0we/BiWFc3uLlakXm70nTvcqIOqQOpTW.XRp/k3N6.', NULL, '2026-01-10 00:59:46', '2026-01-10 00:59:46', 'user'),
(9, 'ebrahim', 'ebra@gmail.com', NULL, '$2y$10$NPLPFZEYWK/BfikBJ4YixuHQs2w4XqVxjCQhEldsCloM9s9OFzLqq', NULL, '2026-01-10 19:50:48', '2026-01-10 19:50:48', 'user'),
(10, 'sofi anjarwati', 'sofia0@gmail.com', NULL, '$2y$10$MbUcLolXVaH3YF5ywK0RyejLRSNwv3hbLXehGTt4YklAWYf/2qiJa', NULL, '2026-01-10 21:20:03', '2026-01-10 21:20:03', 'user'),
(12, 'silvy', 'ajwsofi@gmail.com', NULL, '$2y$10$Zdq.UqqLnFRqd8SHWSngg.rbYQ8moIbmYcFS/QWpab0lxizvq.sQi', NULL, '2026-01-10 23:59:32', '2026-01-11 00:03:51', 'user'),
(13, 'copi', 'copicaurush@gmail.com', NULL, '$2y$10$OoJuDKYkUfXTr1Pf5YJYfOXGRvmjHwsdGDdd3gNbrykIYbvA5kpwa', NULL, '2026-01-11 04:31:41', '2026-01-11 04:37:44', 'user'),
(14, 'tyasarah', 'L200220235@student.ums.ac.id', NULL, '$2y$10$MNioH7C66zpu6b8DnbFDTu3tyVGuDVN7kd5/17JEhrgn4bv8f4Jh6', NULL, '2026-01-11 20:32:56', '2026-01-11 20:35:31', 'user'),
(15, 'sovia', 'sofiajw75@gmail.com', NULL, '$2y$10$4Jo7aAIXPZS1r/b0na5uOOn2rZFLdGknsyObpYgZtQ1ESvbSNnMGO', NULL, '2026-01-12 21:10:06', '2026-01-13 05:02:59', 'user'),
(16, 'keysia', 'keysia@gmail.com', NULL, '$2y$10$RIYyiRsi6AvoVIZguFNDIuIv4YIBcFR0fFDclP.59B7mVC3PjSI.a', NULL, '2026-01-14 20:30:06', '2026-01-14 20:30:06', 'user'),
(17, 'sopia', 'sopiq@gmail.com', NULL, '$2y$10$/oWt58TuwY89SjKwjuhT9e4I9Xxjd.YZK4GTjP7eJ2X3r0e6o3KcO', NULL, '2026-01-15 19:53:26', '2026-01-15 19:53:26', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `data_kesehatans`
--
ALTER TABLE `data_kesehatans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `hasil_prediksi`
--
ALTER TABLE `hasil_prediksi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hasil_prediksi_id_admin_foreign` (`id_admin`),
  ADD KEY `fk_data_kesehatan` (`data_kesehatan_id`),
  ADD KEY `fk_user` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sarans`
--
ALTER TABLE `sarans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `data_kesehatans`
--
ALTER TABLE `data_kesehatans`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hasil_prediksi`
--
ALTER TABLE `hasil_prediksi`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `sarans`
--
ALTER TABLE `sarans`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hasil_prediksi`
--
ALTER TABLE `hasil_prediksi`
  ADD CONSTRAINT `fk_data_kesehatan` FOREIGN KEY (`data_kesehatan_id`) REFERENCES `data_kesehatans` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `hasil_prediksi_id_admin_foreign` FOREIGN KEY (`id_admin`) REFERENCES `users` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
