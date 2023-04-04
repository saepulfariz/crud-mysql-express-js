/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 10.4.24-MariaDB : Database - ci4_restapi
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ci4_restapi` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `ci4_restapi`;

/*Table structure for table `mahasiswa` */

DROP TABLE IF EXISTS `mahasiswa`;

CREATE TABLE `mahasiswa` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `npm` varchar(9) NOT NULL,
  `nama` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `jurusan` varchar(256) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

/*Data for the table `mahasiswa` */

insert  into `mahasiswa`(`id`,`npm`,`nama`,`email`,`jurusan`,`created_at`,`updated_at`) values 
(1,'D1A200027','saepul hidayat','saepulhidayat302@gmail.com','sistem informasi','2023-03-08 10:04:17','2023-03-08 10:04:17'),
(4,'D1A190007','hamdanasdd','hamdan@gmail.com','SISTEM INFORMASI','2023-03-08 09:42:04','2023-03-08 09:42:04'),
(6,'D1A190007','hamdan ajah kali','hamdan@gmail.com','SISTEM INFORMASI','2023-03-09 01:34:45','2023-03-09 01:54:44'),
(7,'D1A190007','hamdanasdd','hamdan123@gmail.com','SISTEM INFORMASI','2023-03-09 02:21:47','2023-03-09 02:21:47'),
(12,'D1A190007','hamdanasdd','hamdan1234@gmail.com','SISTEM INFORMASI','2023-03-09 09:08:50','2023-03-09 09:08:50'),
(15,'D1A21424','Kamal ajah','Kamal@gmail.com','Sistem Informasi','0000-00-00 00:00:00','0000-00-00 00:00:00');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
