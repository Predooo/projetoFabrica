-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: pfc
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
-- Table structure for table `classe`
--

DROP TABLE IF EXISTS `classe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classe` (
  `idclasse` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `resumo` text,
  `pesquisa` longtext,
  `autor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idclasse`),
  CONSTRAINT `fk_classe_filo` FOREIGN KEY (`idclasse`) REFERENCES `filo` (`idFilo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classe`
--

LOCK TABLES `classe` WRITE;
/*!40000 ALTER TABLE `classe` DISABLE KEYS */;
/*!40000 ALTER TABLE `classe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especie`
--

DROP TABLE IF EXISTS `especie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `especie` (
  `idespecie` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `resumo` text,
  `pesquisa` longtext,
  `autor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idespecie`),
  CONSTRAINT `fk_genero_especie` FOREIGN KEY (`idespecie`) REFERENCES `genero` (`idgenero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especie`
--

LOCK TABLES `especie` WRITE;
/*!40000 ALTER TABLE `especie` DISABLE KEYS */;
/*!40000 ALTER TABLE `especie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `familia`
--

DROP TABLE IF EXISTS `familia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `familia` (
  `idfamilia` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `resumo` text,
  `pesquisa` longtext,
  `autor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idfamilia`),
  CONSTRAINT `fk_familia_ordem` FOREIGN KEY (`idfamilia`) REFERENCES `ordem` (`idordem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `familia`
--

LOCK TABLES `familia` WRITE;
/*!40000 ALTER TABLE `familia` DISABLE KEYS */;
/*!40000 ALTER TABLE `familia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filo`
--

DROP TABLE IF EXISTS `filo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filo` (
  `idFilo` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `resumo` text,
  `pesquisa` longtext,
  `autor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idFilo`),
  CONSTRAINT `fk_filo_ordem` FOREIGN KEY (`idFilo`) REFERENCES `reino` (`idreino`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filo`
--

LOCK TABLES `filo` WRITE;
/*!40000 ALTER TABLE `filo` DISABLE KEYS */;
/*!40000 ALTER TABLE `filo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genero`
--

DROP TABLE IF EXISTS `genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genero` (
  `idgenero` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `resumo` text,
  `pesquisa` longtext,
  `autor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idgenero`),
  CONSTRAINT `fk_genero_familia` FOREIGN KEY (`idgenero`) REFERENCES `familia` (`idfamilia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero`
--

LOCK TABLES `genero` WRITE;
/*!40000 ALTER TABLE `genero` DISABLE KEYS */;
/*!40000 ALTER TABLE `genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordem`
--

DROP TABLE IF EXISTS `ordem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordem` (
  `idordem` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `resumo` text,
  `pesquisa` longtext,
  `autor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idordem`),
  KEY `idx_ordem_idordem` (`idordem`),
  CONSTRAINT `fk_ordem_classe` FOREIGN KEY (`idordem`) REFERENCES `classe` (`idclasse`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordem`
--

LOCK TABLES `ordem` WRITE;
/*!40000 ALTER TABLE `ordem` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reino`
--

DROP TABLE IF EXISTS `reino`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reino` (
  `idreino` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `resumo` text,
  `pesquisa` longtext,
  `autor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idreino`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reino`
--

LOCK TABLES `reino` WRITE;
/*!40000 ALTER TABLE `reino` DISABLE KEYS */;
/*!40000 ALTER TABLE `reino` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taxonomista`
--

DROP TABLE IF EXISTS `taxonomista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taxonomista` (
  `idtaxonomista` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `formacao` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idtaxonomista`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taxonomista`
--

LOCK TABLES `taxonomista` WRITE;
/*!40000 ALTER TABLE `taxonomista` DISABLE KEYS */;
INSERT INTO `taxonomista` VALUES (1,'user5','biologo-marinho','eusougato@223','pudim'),(2,'User2','biologo-ambiental','eusougato@223','pudim');
/*!40000 ALTER TABLE `taxonomista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taxonomista_taxon`
--

DROP TABLE IF EXISTS `taxonomista_taxon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taxonomista_taxon` (
  `idpesquisador` int NOT NULL,
  `idtaxon` int NOT NULL,
  PRIMARY KEY (`idpesquisador`,`idtaxon`),
  KEY `fk_reino_idx` (`idtaxon`) /*!80000 INVISIBLE */,
  CONSTRAINT `fk_classe` FOREIGN KEY (`idtaxon`) REFERENCES `classe` (`idclasse`),
  CONSTRAINT `fk_especie` FOREIGN KEY (`idtaxon`) REFERENCES `especie` (`idespecie`),
  CONSTRAINT `fk_familia` FOREIGN KEY (`idtaxon`) REFERENCES `familia` (`idfamilia`),
  CONSTRAINT `fk_filo` FOREIGN KEY (`idtaxon`) REFERENCES `filo` (`idFilo`),
  CONSTRAINT `fk_genero` FOREIGN KEY (`idtaxon`) REFERENCES `genero` (`idgenero`),
  CONSTRAINT `fk_ordem` FOREIGN KEY (`idtaxon`) REFERENCES `ordem` (`idordem`),
  CONSTRAINT `fk_reino` FOREIGN KEY (`idtaxon`) REFERENCES `reino` (`idreino`),
  CONSTRAINT `fk_taxonomista` FOREIGN KEY (`idpesquisador`) REFERENCES `taxonomista` (`idtaxonomista`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taxonomista_taxon`
--

LOCK TABLES `taxonomista_taxon` WRITE;
/*!40000 ALTER TABLE `taxonomista_taxon` DISABLE KEYS */;
/*!40000 ALTER TABLE `taxonomista_taxon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `sobrenome` varchar(255) DEFAULT NULL,
  `formacao` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-05  2:36:30
