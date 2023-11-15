CREATE DATABASE IF NOT EXISTS crud;

USE crud;

DROP TABLE IF EXISTS `tbl_table`;

CREATE TABLE `tbl_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `capacity` int(11) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `tbl_table` WRITE;
INSERT INTO `tbl_table` VALUES (1,12,12,'free'),(2,23,2,'free'),(3,44,12,'occ');
UNLOCK TABLES;