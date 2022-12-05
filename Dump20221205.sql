CREATE DATABASE  IF NOT EXISTS `sistemaloja` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sistemaloja`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: sistemaloja
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrinhos`
--

DROP TABLE IF EXISTS `carrinhos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrinhos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text,
  `codigo` text,
  `produto` text,
  `cor` text,
  `preco` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_ciente` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ciente` (`fk_ciente`),
  CONSTRAINT `carrinhos_ibfk_1` FOREIGN KEY (`fk_ciente`) REFERENCES `clientes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrinhos`
--

LOCK TABLES `carrinhos` WRITE;
/*!40000 ALTER TABLE `carrinhos` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrinhos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriaprodutos`
--

DROP TABLE IF EXISTS `categoriaprodutos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriaprodutos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_produtos` int DEFAULT NULL,
  `fk_categorias` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_produtos` (`fk_produtos`),
  KEY `fk_categorias` (`fk_categorias`),
  CONSTRAINT `categoriaprodutos_ibfk_1` FOREIGN KEY (`fk_produtos`) REFERENCES `produtos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `categoriaprodutos_ibfk_2` FOREIGN KEY (`fk_categorias`) REFERENCES `categorias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriaprodutos`
--

LOCK TABLES `categoriaprodutos` WRITE;
/*!40000 ALTER TABLE `categoriaprodutos` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoriaprodutos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text,
  `email` text,
  `senha` text,
  `estado` text,
  `cidade` text,
  `bairro` text,
  `rua` text,
  `numero` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'teste@gmail.com','teste@gmail.com','$2a$10$l7xZvlef3Q5F0AenzCGBc.K6hlfu.vBXIXASsX7JD078KiOfwTG9W','PR','Quedas do Iguacu','Alto Recreio','Rua das tulipas',544,'2022-12-05 02:03:36','2022-12-05 02:03:36');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cores`
--

DROP TABLE IF EXISTS `cores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text,
  `codigoRGB` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cores`
--

LOCK TABLES `cores` WRITE;
/*!40000 ALTER TABLE `cores` DISABLE KEYS */;
/*!40000 ALTER TABLE `cores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cors`
--

DROP TABLE IF EXISTS `cors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` text,
  `descricao` text,
  `qtd` int DEFAULT NULL,
  `preco` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_produtos` int DEFAULT NULL,
  `fk_cores` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_produtos` (`fk_produtos`),
  KEY `fk_cores` (`fk_cores`),
  CONSTRAINT `cors_ibfk_1` FOREIGN KEY (`fk_produtos`) REFERENCES `produtos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `cors_ibfk_2` FOREIGN KEY (`fk_cores`) REFERENCES `cores` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cors`
--

LOCK TABLES `cors` WRITE;
/*!40000 ALTER TABLE `cors` DISABLE KEYS */;
/*!40000 ALTER TABLE `cors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagens`
--

DROP TABLE IF EXISTS `imagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` text,
  `nome` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_produto` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_produto` (`fk_produto`),
  CONSTRAINT `imagens_ibfk_1` FOREIGN KEY (`fk_produto`) REFERENCES `produtos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagens`
--

LOCK TABLES `imagens` WRITE;
/*!40000 ALTER TABLE `imagens` DISABLE KEYS */;
INSERT INTO `imagens` VALUES (1,NULL,NULL,'2022-12-04 22:45:42','2022-12-04 22:45:42',NULL),(2,NULL,NULL,'2022-12-04 22:46:46','2022-12-04 22:46:46',NULL),(3,NULL,NULL,'2022-12-04 22:49:05','2022-12-04 22:49:05',NULL),(4,NULL,NULL,'2022-12-04 22:50:27','2022-12-04 22:50:27',NULL),(5,NULL,NULL,'2022-12-04 22:51:25','2022-12-04 22:51:25',NULL),(6,NULL,NULL,'2022-12-04 22:53:15','2022-12-04 22:53:15',NULL),(7,NULL,NULL,'2022-12-04 22:54:16','2022-12-04 22:54:16',NULL),(8,NULL,NULL,'2022-12-04 22:55:38','2022-12-04 22:55:38',NULL),(9,NULL,NULL,'2022-12-04 23:18:04','2022-12-04 23:18:04',NULL),(10,NULL,NULL,'2022-12-04 23:18:45','2022-12-04 23:18:45',NULL),(11,NULL,NULL,'2022-12-05 00:02:51','2022-12-05 00:02:51',NULL),(12,NULL,NULL,'2022-12-05 02:09:08','2022-12-05 02:09:08',NULL),(13,NULL,NULL,'2022-12-05 02:09:08','2022-12-05 02:09:08',NULL),(14,NULL,NULL,'2022-12-05 02:32:35','2022-12-05 02:32:35',NULL),(15,NULL,NULL,'2022-12-05 02:32:35','2022-12-05 02:32:35',NULL),(16,NULL,NULL,'2022-12-05 02:35:03','2022-12-05 02:35:03',NULL),(17,NULL,NULL,'2022-12-05 02:35:03','2022-12-05 02:35:03',NULL),(18,NULL,NULL,'2022-12-05 02:40:02','2022-12-05 02:40:02',NULL),(19,NULL,NULL,'2022-12-05 02:40:02','2022-12-05 02:40:02',NULL),(20,NULL,NULL,'2022-12-05 02:41:30','2022-12-05 02:41:30',NULL),(21,NULL,NULL,'2022-12-05 02:41:30','2022-12-05 02:41:30',NULL),(22,NULL,NULL,'2022-12-05 02:52:57','2022-12-05 02:52:57',NULL),(23,NULL,NULL,'2022-12-05 02:54:32','2022-12-05 02:54:32',NULL),(24,NULL,NULL,'2022-12-05 02:54:34','2022-12-05 02:54:34',NULL),(25,NULL,NULL,'2022-12-05 02:59:37','2022-12-05 02:59:37',NULL),(26,NULL,NULL,'2022-12-05 03:09:22','2022-12-05 03:09:22',NULL),(27,NULL,NULL,'2022-12-05 03:09:22','2022-12-05 03:09:22',NULL),(28,NULL,NULL,'2022-12-05 04:00:04','2022-12-05 04:00:04',NULL),(29,NULL,NULL,'2022-12-05 04:00:04','2022-12-05 04:00:04',NULL),(30,NULL,NULL,'2022-12-05 04:08:13','2022-12-05 04:08:13',NULL),(31,NULL,NULL,'2022-12-05 04:09:49','2022-12-05 04:09:49',NULL),(32,NULL,NULL,'2022-12-05 04:11:01','2022-12-05 04:11:01',NULL);
/*!40000 ALTER TABLE `imagens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` text,
  `nome` text,
  `preco` double DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'1','1',1,1,'2022-12-04 22:45:37','2022-12-04 22:45:37'),(2,'3','3',3,3,'2022-12-04 22:49:01','2022-12-04 22:49:01'),(3,'4t','4t',4,4,'2022-12-04 22:50:24','2022-12-04 22:50:24'),(4,'5','5',5,5,'2022-12-04 22:51:20','2022-12-04 22:51:20'),(5,'6677','6',6,6,'2022-12-04 22:53:11','2022-12-04 22:53:11'),(6,'15','15',15,15,'2022-12-04 23:13:45','2022-12-04 23:13:45'),(7,'151','15',15,15,'2022-12-04 23:14:21','2022-12-04 23:14:21'),(8,'8','8',8,8,'2022-12-04 23:17:12','2022-12-04 23:17:12'),(9,'9','9',9,9,'2022-12-04 23:17:54','2022-12-04 23:17:54'),(10,'91','9',9,9,'2022-12-04 23:18:31','2022-12-04 23:18:31'),(11,'85460000','Pedro Alexandre Potulski',32,32,'2022-12-05 00:02:42','2022-12-05 00:02:42'),(12,'85460000','Pedro Alexandre Potulski',32,123,'2022-12-05 02:07:56','2022-12-05 02:07:56'),(13,'kkkkk','kkkkk',89,2,'2022-12-05 02:14:42','2022-12-05 02:14:42'),(14,'2290','Calca',23.9,55,'2022-12-05 02:20:38','2022-12-05 02:20:38'),(15,'32','32',32,32,'2022-12-05 02:32:07','2022-12-05 02:32:07'),(16,'fdfd','fdfd',357,123,'2022-12-05 02:34:37','2022-12-05 02:34:37'),(17,'20','20',20,20,'2022-12-05 02:39:38','2022-12-05 02:39:38'),(18,'32f','32',32,32,'2022-12-05 02:46:36','2022-12-05 02:46:36'),(19,'42','42',42,42,'2022-12-05 02:48:27','2022-12-05 02:48:27'),(20,'dd','dd',5,6,'2022-12-05 02:49:04','2022-12-05 02:49:04'),(21,'fd','fd',23,5,'2022-12-05 02:49:58','2022-12-05 02:49:58'),(22,'52','52',52,52,'2022-12-05 02:50:39','2022-12-05 02:50:39'),(23,'52','526',6,78,'2022-12-05 02:51:43','2022-12-05 02:51:43'),(24,'42','78',0,3,'2022-12-05 02:52:35','2022-12-05 02:52:35'),(25,'42','42',12,45,'2022-12-05 02:54:23','2022-12-05 02:54:23'),(26,'hhhh','hhhhhhh',7,7,'2022-12-05 02:59:31','2022-12-05 02:59:31'),(27,'32','5670',1267,51,'2022-12-05 03:04:39','2022-12-05 03:04:39'),(28,'52','12',5,6,'2022-12-05 03:09:10','2022-12-05 03:09:10'),(29,'52','12',3,1,'2022-12-05 03:20:13','2022-12-05 03:20:13'),(30,'ds','4',1,1,'2022-12-05 03:23:32','2022-12-05 03:23:32'),(31,'f','f',5167890,2,'2022-12-05 03:25:28','2022-12-05 03:25:28'),(32,'f','f',5167890,2,'2022-12-05 03:25:28','2022-12-05 03:25:28'),(33,'32','51',2,3,'2022-12-05 03:34:51','2022-12-05 03:34:51'),(34,'52','12',52,61,'2022-12-05 03:36:54','2022-12-05 03:36:54'),(35,'2f','f12fgh',2,5,'2022-12-05 03:40:35','2022-12-05 03:40:35'),(36,'f2','6789',125,74,'2022-12-05 03:41:22','2022-12-05 03:41:22'),(37,'52','1',89,8,'2022-12-05 03:43:29','2022-12-05 03:43:29'),(38,'2','168',9,2,'2022-12-05 03:47:36','2022-12-05 03:47:36'),(39,'42','1567',42,1,'2022-12-05 03:52:05','2022-12-05 03:52:05'),(40,'52','1',56,7,'2022-12-05 03:53:14','2022-12-05 03:53:14'),(41,'52','12',567,123,'2022-12-05 03:54:28','2022-12-05 03:54:28'),(42,'222','11',333,521,'2022-12-05 03:55:55','2022-12-05 03:55:55'),(43,'52','61',32,55,'2022-12-05 03:59:46','2022-12-05 03:59:46'),(44,'32','42',1,5,'2022-12-05 04:08:06','2022-12-05 04:08:06'),(45,'15','51',2,3,'2022-12-05 04:09:40','2022-12-05 04:09:40'),(46,'42','42',42,422,'2022-12-05 04:10:52','2022-12-05 04:10:52');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tamanhoprodutos`
--

DROP TABLE IF EXISTS `tamanhoprodutos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tamanhoprodutos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` text,
  `descricao` text,
  `qtd` int DEFAULT NULL,
  `preco` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_produtos` int DEFAULT NULL,
  `fk_tamanhos` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_produtos` (`fk_produtos`),
  KEY `fk_tamanhos` (`fk_tamanhos`),
  CONSTRAINT `tamanhoprodutos_ibfk_1` FOREIGN KEY (`fk_produtos`) REFERENCES `produtos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `tamanhoprodutos_ibfk_2` FOREIGN KEY (`fk_tamanhos`) REFERENCES `tamanhos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tamanhoprodutos`
--

LOCK TABLES `tamanhoprodutos` WRITE;
/*!40000 ALTER TABLE `tamanhoprodutos` DISABLE KEYS */;
/*!40000 ALTER TABLE `tamanhoprodutos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tamanhos`
--

DROP TABLE IF EXISTS `tamanhos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tamanhos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tamanhos`
--

LOCK TABLES `tamanhos` WRITE;
/*!40000 ALTER TABLE `tamanhos` DISABLE KEYS */;
/*!40000 ALTER TABLE `tamanhos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tecidoprodutos`
--

DROP TABLE IF EXISTS `tecidoprodutos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tecidoprodutos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` text,
  `qtd` int DEFAULT NULL,
  `preco` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_produtos` int DEFAULT NULL,
  `fk_tecidos` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_produtos` (`fk_produtos`),
  KEY `fk_tecidos` (`fk_tecidos`),
  CONSTRAINT `tecidoprodutos_ibfk_1` FOREIGN KEY (`fk_produtos`) REFERENCES `produtos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `tecidoprodutos_ibfk_2` FOREIGN KEY (`fk_tecidos`) REFERENCES `tecidos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tecidoprodutos`
--

LOCK TABLES `tecidoprodutos` WRITE;
/*!40000 ALTER TABLE `tecidoprodutos` DISABLE KEYS */;
/*!40000 ALTER TABLE `tecidoprodutos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tecidos`
--

DROP TABLE IF EXISTS `tecidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tecidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text,
  `descricao` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tecidos`
--

LOCK TABLES `tecidos` WRITE;
/*!40000 ALTER TABLE `tecidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `tecidos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-05  2:50:49
