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
-- Despejando dados para a tabela `lista`
--

INSERT INTO `lista` (`id_lista`, `id_donatario`, `tipo`) VALUES
(1, 1, 'material'),
(2, 2, 'material'),
(3, 3, 'uniforme'),
(4, 4, 'material'),
(5, 5, 'eletronico'),
(6, 6, 'uniforme');

-- --------------------------------------------------------

--
-- Despejando dados para a tabela `kitsPedido`
--

INSERT INTO `kitsPedido` (`id`, `id_kit`, `id_lista`, `id_doador`, `status_item`) VALUES
(1, 1, 1, NULL, 'Pendente'),
(2, 2, 1, NULL, 'Pendente'),
(3, 3, 1, NULL, 'Pendente'),
(4, 4, 1, NULL, 'Pendente'),
(5, 5, 1, NULL, 'Pendente');

-- --------------------------------------------------------


