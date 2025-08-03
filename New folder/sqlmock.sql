-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table u421708751_miftahulamanah.siswa_ras: ~1 rows (approximately)
INSERT INTO `siswa_ras` (`id`, `nama`, `nik`, `jenis_kelamin`, `tanggal_lahir`, `tempat_lahir`, `agama`, `anak_ke`, `jumlah_saudara`, `alamat`, `nama_ayah`, `pekerjaan_ayah`, `pendidikan_ayah`, `nama_ibu`, `pekerjaan_ibu`, `pendidikan_ibu`, `no_hp_wali`, `foto`, `created_at`, `updated_at`) VALUES
	(1, 'Niini', '0898989789798', 'Laki-laki', '2025-07-31', 'Bandung', 'Islam', '1', '2', 'Bandung', 'jeje', 'wiraswasta', 'SD', 'Ani', 'IRT', 'SMK', '08908098098098', 'siswa-ra-foto/01K1F7DCBWSTJT4CSPSC8TTBK0.png', '2025-07-30 20:11:33', '2025-07-30 20:11:33');

-- Dumping data for table u421708751_miftahulamanah.testimonials: ~4 rows (approximately)
INSERT INTO `testimonials` (`id`, `nama`, `peran`, `angkatan`, `testimoni`, `foto`, `created_at`, `updated_at`) VALUES
	(1, 'Ahmad', 'Alumni', 'Alumni 2019', 'Perubahan akhlak anak saya sangat terlihat sejak mondok di Miftahul Amanah. Para ustadz sangat perhatian dan sabar dalam mendidik. Saya sangat merekomendasikan pesantren ini.', 'testimoni/01K1A60PTJTM7JR9Y2M17RH7ZS.png', '2025-07-28 21:10:57', '2025-07-28 21:46:56'),
	(2, 'Annisa', 'Alumni', 'Alumni 2019', 'Perubahan akhlak anak saya sangat terlihat sejak mondok di Miftahul Amanah. Para ustadz sangat perhatian dan sabar dalam mendidik. Saya sangat merekomendasikan pesantren ini.', 'testimoni/01K1A6BJX173T3HCF35FTPHRHR.png', '2025-07-28 21:16:54', '2025-07-28 21:46:31'),
	(3, 'Ahmed', 'Alumni', 'Alumni 2019', 'Perubahan akhlak anak saya sangat terlihat sejak mondok di Miftahul Amanah. Para ustadz sangat perhatian dan sabar dalam mendidik. Saya sangat merekomendasikan pesantren ini.', 'testimoni/01K1A6CJZ47489M932WWQ0BAPK.png', '2025-07-28 21:17:27', '2025-07-28 21:46:20'),
	(4, 'Ahmad', 'Alumni', 'Alumni 2019', 'Perubahan akhlak anak saya sangat terlihat sejak mondok di Miftahul Amanah. Para ustadz sangat perhatian dan sabar dalam mendidik. Saya sangat merekomendasikan pesantren ini.', 'testimoni/01K1A6DTAS3KB7RXGTE6FS0ZJB.png', '2025-07-28 21:18:07', '2025-07-28 21:46:07');

-- Dumping data for table u421708751_miftahulamanah.users: ~1 rows (approximately)
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'admin', 'admin@gmail.com', NULL, '$2y$12$BHrn6gBZakF/CT0Yu7G6cOjiiVJdImOQChTt8g9A5nm6yIof4ZefG', NULL, '2025-07-24 19:33:38', '2025-07-24 19:33:38');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
