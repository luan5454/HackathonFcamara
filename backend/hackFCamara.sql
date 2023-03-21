-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 04/04/2021 às 19:02
-- Versão do servidor: 8.0.23-0ubuntu0.20.04.1
-- Versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `hackFCamara`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `doador`
--

CREATE TABLE `doador` (
  `id_doador` int NOT NULL,
  `nome` char(60) DEFAULT NULL,
  `cpf` varchar(20) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `cep` varchar(15) DEFAULT NULL,
  `endereco` varchar(50) DEFAULT NULL,
  `numero` varchar(5) DEFAULT NULL,
  `complemento` varchar(30) DEFAULT NULL,
  `bairro` varchar(20) DEFAULT NULL,
  `cidade` varchar(30) DEFAULT NULL,
  `uf` varchar(2) DEFAULT NULL,
  `donatario` int DEFAULT NULL,
  `data_agendada` date DEFAULT NULL,
  `horario_agendado` time DEFAULT NULL,
  `data_doacao` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `doador`
--

INSERT INTO `doador` (`id_doador`, `nome`, `cpf`, `telefone`, `email`, `cep`, `endereco`, `numero`, `complemento`, `bairro`, `cidade`, `uf`, `donatario`, `data_agendada`, `horario_agendado`, `data_doacao`) VALUES
(1, 'Nathalia Dantas Viana', '14777232778', '2137108075', 'nathalia@nathalia.com', '24451-240', 'Rua Otávio Fonseca ', '152', 'Casa 1', 'Colubandê', 'São Gonçalo', 'RJ', 1, '2021-04-19', '08:00:00', '2021-04-04 19:02:21');

-- --------------------------------------------------------

--
-- Estrutura para tabela `donatario`
--

CREATE TABLE `donatario` (
  `id_donatario` int NOT NULL,
  `ra_donatario` varchar(8) DEFAULT NULL,
  `nome_donatario` varchar(60) DEFAULT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  `email_responsavel` varchar(40) DEFAULT NULL,
  `telefone_responsavel` varchar(11) DEFAULT NULL,
  `cep` varchar(8) DEFAULT NULL,
  `logradouro` varchar(50) DEFAULT NULL,
  `complemento` varchar(30) DEFAULT NULL,
  `bairro` varchar(20) DEFAULT NULL,
  `cidade` varchar(30) DEFAULT NULL,
  `uf` varchar(2) DEFAULT NULL,
  `escola_donatario` int DEFAULT NULL,
  `segmento_ensino` varchar(30) DEFAULT NULL,
  `serie_ensino` varchar(10) DEFAULT NULL,
  `sonho_profissao` text,
  `data_cadastro` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `donatario`
--

INSERT INTO `donatario` (`id_donatario`, `ra_donatario`, `nome_donatario`, `avatar`, `email_responsavel`, `telefone_responsavel`, `cep`, `logradouro`, `complemento`, `bairro`, `cidade`, `uf`, `escola_donatario`, `segmento_ensino`, `serie_ensino`, `sonho_profissao`, `data_cadastro`) VALUES
(1, NULL, NULL, 'avatar1.png', NULL, NULL, NULL, NULL, NULL, NULL, 'Paty do Alferes', 'RJ', 1, 'Ensino Fundamental I', '4°', '“Moro com meus pais e meu irmão de 3 anos. Adoro jogar bola, mas sonho em ser um astronauta da Nasa.”', '2021-03-31 14:24:03'),
(2, NULL, NULL, 'avatar2.png', NULL, NULL, NULL, NULL, NULL, NULL, 'Paty do Alferes', 'RJ', 1, 'Ensino Fundamental I', '5°', '“Moro com meus pais e meus dois irmãos. Meu sonho é ser um cientista e encontrar a cura para muitas doenças.”', '2021-03-31 14:24:03'),
(3, NULL, NULL, 'avatar3.png', NULL, NULL, NULL, NULL, NULL, NULL, 'Paty do Alferes', 'RJ', 1, 'Ensino Fundamental I', '3°', '“Sou filha única e moro com a minha mãe. Ela trabalha muito para me criar sozinha. Meu sonho é ser médica.”', '2021-03-31 14:24:03'),
(4, NULL, NULL, 'avatar3.png', NULL, NULL, NULL, NULL, NULL, NULL, 'Paty do Alferes', 'RJ', 1, 'Ensino Fundamental II', '6°', '“Moro com meus avós e sou muito curiosa, Quando eu crescer quero ser professora de ciências.”', '2021-03-31 14:24:03'),
(5, NULL, NULL, 'avatar1.png', NULL, NULL, NULL, NULL, NULL, NULL, 'Paty do Alferes', 'RJ', 1, 'Ensino Fundamental I', '2°', '“Moro com meus pais e meu irmão. Meu sonho é ser chefe de cozinha igual ao Fogaça do Masterchef.”', '2021-03-31 14:24:03'),
(6, NULL, NULL, 'avatar2.png', NULL, NULL, NULL, NULL, NULL, NULL, 'Paty do Alferes', 'RJ', 1, 'Ensino Fundamental II', '9°', '“Moro com a minha mãe e a minha avó. Quando eu crescer quero ser piloto de avião para poder viajar o mundo todo.”', '2021-03-31 14:24:03');

-- --------------------------------------------------------

--
-- Estrutura para tabela `escola`
--

CREATE TABLE `escola` (
  `id_escola` int NOT NULL,
  `nome_escola` varchar(60) DEFAULT NULL,
  `rede` varchar(60) DEFAULT NULL,
  `cep` varchar(8) DEFAULT NULL,
  `logradouro` varchar(50) DEFAULT NULL,
  `complemento` varchar(30) DEFAULT NULL,
  `bairro` varchar(20) DEFAULT NULL,
  `cidade` varchar(30) DEFAULT NULL,
  `uf` varchar(2) DEFAULT NULL,
  `data_cadastro` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `escola`
--

INSERT INTO `escola` (`id_escola`, `nome_escola`, `rede`, `cep`, `logradouro`, `complemento`, `bairro`, `cidade`, `uf`, `data_cadastro`) VALUES
(1, 'E.M. Pedro Nogueira', 'Municipal', '', 'Av. Santos Dumont', '152', 'Pedra Ruivas', 'Paty do Alferes', 'RJ', '2021-03-31 14:17:47'),
(2, 'E.M. Gioconda Bernardes', 'Municipal', '', 'Estrada da Maravilha', 'S/N', 'Maravilha', 'Paty do Alferes', 'RJ', '2021-03-31 14:17:47'),
(3, 'E.M. Manoel Rodrigues', 'Municipal', NULL, 'Pç. Antônio Lopes de Mello', 'S/N', 'Coqueiros', 'Paty do Alferes', 'RJ', '2021-03-31 14:17:47'),
(4, 'E.M. José Eulálio de Andrade', 'Municipal', NULL, 'Alameda Antônio da Luz Fernandes', '10', 'Centro', 'Paty do Alferes', 'RJ', '2021-03-31 14:17:47');

-- --------------------------------------------------------

--
-- Estrutura para tabela `fale_conosco`
--

CREATE TABLE `fale_conosco` (
  `id` int NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `assunto` varchar(30) DEFAULT NULL,
  `mensagem` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `kit`
--

CREATE TABLE `kit` (
  `id_kit` int NOT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `itens` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `kit`
--

INSERT INTO `kit` (`id_kit`, `nome`, `itens`) VALUES
(1, 'Kit estojo', '1 estojo, 5 lápis pretos, 2 borrachas, 2 apontadores, 1 cola bastão, 2 canetas vermelhas e 2 azuis'),
(2, 'Kit artes', '1 conjunto de canetinhas , 1 cx. de lápis de cor, 1cx. de giz de cera, 1 tesoura sem ponta'),
(3, 'Kit cadernos', '1 caderno de desenho grande, 4 cadernos espiral capa dura de 100 folhas, 1 caderno quadriculado grande'),
(4, 'Kit acessórios', '1 mochila, 1 lancheira, 1 garrafinha, 1 pote pequeno de plástico, 1 toalhinha de mão'),
(5, 'Kit geométrico', '1 par de esquadros, 2 réguas de 30 cm, 1 compasso, 500 folhas de papel sulfite A4');

-- --------------------------------------------------------

--
-- Estrutura para tabela `kitsPedido`
--

CREATE TABLE `kitsPedido` (
  `id` int NOT NULL,
  `id_kit` int DEFAULT NULL,
  `id_lista` int DEFAULT NULL,
  `id_doador` int DEFAULT NULL,
  `status_item` varchar(20) DEFAULT 'Pendente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `kitsPedido`
--

INSERT INTO `kitsPedido` (`id`, `id_kit`, `id_lista`, `id_doador`, `status_item`) VALUES
(1, 1, 1, NULL, 'Pendente'),
(2, 2, 1, NULL, 'Pendente'),
(3, 3, 1, NULL, 'Pendente'),
(4, 4, 1, NULL, 'Pendente'),
(5, 5, 1, 1, 'Agendado');

-- --------------------------------------------------------

--
-- Estrutura para tabela `lista`
--

CREATE TABLE `lista` (
  `id_lista` int NOT NULL,
  `id_donatario` int DEFAULT NULL,
  `tipo` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `lista`
--

INSERT INTO `lista` (`id_lista`, `id_donatario`, `tipo`) VALUES
(1, 1, 'material'),
(2, 2, 'material'),
(3, 3, 'uniforme'),
(4, 4, 'material'),
(5, 5, 'eletronico'),
(6, 6, 'uniforme');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `doador`
--
ALTER TABLE `doador`
  ADD PRIMARY KEY (`id_doador`),
  ADD KEY `donatario` (`donatario`);

--
-- Índices de tabela `donatario`
--
ALTER TABLE `donatario`
  ADD PRIMARY KEY (`id_donatario`),
  ADD KEY `escola_donatario` (`escola_donatario`);

--
-- Índices de tabela `escola`
--
ALTER TABLE `escola`
  ADD PRIMARY KEY (`id_escola`);

--
-- Índices de tabela `fale_conosco`
--
ALTER TABLE `fale_conosco`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `kit`
--
ALTER TABLE `kit`
  ADD PRIMARY KEY (`id_kit`);

--
-- Índices de tabela `kitsPedido`
--
ALTER TABLE `kitsPedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_lista` (`id_lista`),
  ADD KEY `id_kit` (`id_kit`),
  ADD KEY `id_doador` (`id_doador`);

--
-- Índices de tabela `lista`
--
ALTER TABLE `lista`
  ADD PRIMARY KEY (`id_lista`),
  ADD KEY `id_donatario` (`id_donatario`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `doador`
--
ALTER TABLE `doador`
  MODIFY `id_doador` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `donatario`
--
ALTER TABLE `donatario`
  MODIFY `id_donatario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `escola`
--
ALTER TABLE `escola`
  MODIFY `id_escola` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `fale_conosco`
--
ALTER TABLE `fale_conosco`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `kit`
--
ALTER TABLE `kit`
  MODIFY `id_kit` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `kitsPedido`
--
ALTER TABLE `kitsPedido`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `lista`
--
ALTER TABLE `lista`
  MODIFY `id_lista` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `doador`
--
ALTER TABLE `doador`
  ADD CONSTRAINT `doador_ibfk_1` FOREIGN KEY (`donatario`) REFERENCES `donatario` (`id_donatario`);

--
-- Restrições para tabelas `donatario`
--
ALTER TABLE `donatario`
  ADD CONSTRAINT `donatario_ibfk_1` FOREIGN KEY (`escola_donatario`) REFERENCES `escola` (`id_escola`);

--
-- Restrições para tabelas `kitsPedido`
--
ALTER TABLE `kitsPedido`
  ADD CONSTRAINT `kitsPedido_ibfk_1` FOREIGN KEY (`id_lista`) REFERENCES `lista` (`id_lista`),
  ADD CONSTRAINT `kitsPedido_ibfk_2` FOREIGN KEY (`id_kit`) REFERENCES `kit` (`id_kit`),
  ADD CONSTRAINT `kitsPedido_ibfk_3` FOREIGN KEY (`id_doador`) REFERENCES `doador` (`id_doador`);

--
-- Restrições para tabelas `lista`
--
ALTER TABLE `lista`
  ADD CONSTRAINT `lista_ibfk_1` FOREIGN KEY (`id_donatario`) REFERENCES `donatario` (`id_donatario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
