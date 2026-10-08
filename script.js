// ==========================================
// A MEGA CAMPANHA OMNISEC - 50 NÍVEIS (EQUILÍBRIO PERFEITO)
// Mistura ideal entre SELECTs, DML, DDL e Respostas Rápidas
// ==========================================
const levels = [
    // --- FASE 1: O INÍCIO DO HACK (1 a 10) ---
    {
        title: "NÍVEL 1: A Porta de Entrada",
        story: "O terminal está aberto. O servidor possui os bancos: sys, mysql e omnisec.",
        schema: "Terminal de Comando Global",
        question: "Qual o comando (com apenas duas palavras) para selecionar/usar o banco de dados 'omnisec'?",
        type: "query", answer: "use omnisec",
        placeholder: "Comando...",
        hint: "Comando básico do MySQL: USE nome_do_banco."
    },
    {
        title: "NÍVEL 2: Mapeamento Visual",
        story: "Estamos dentro. Precisamos ver os nomes de todas as tabelas daqui.",
        schema: "Banco de dados: omnisec",
        question: "Qual comando do MySQL mostra a lista de todas as tabelas?",
        type: "query", answer: "show tables",
        placeholder: "Comando...",
        hint: "Comando de duas palavras: SHOW TABLES."
    },
    {
        title: "NÍVEL 3: Visão Ampla (SELECT)",
        story: "Achamos a tabela de servidores. Queremos ver absolutamente tudo o que tem nela.",
        schema: "Tabela: servidores\nColunas: id, nome, ip, status",
        question: "Selecione TODAS (*) as colunas da tabela 'servidores'.",
        type: "query", answer: "select * from servidores",
        placeholder: "SELECT ...",
        hint: "O SELECT mais famoso de todos: SELECT * FROM tabela."
    },
    {
        title: "NÍVEL 4: Foco no Alvo (SELECT)",
        story: "A tabela é muito grande. Traga apenas a coluna com os endereços de IP.",
        schema: "Tabela: servidores\nColunas: id, nome, ip, status",
        question: "Selecione APENAS a coluna 'ip' da tabela 'servidores'.",
        type: "query", answer: "select ip from servidores",
        placeholder: "SELECT ...",
        hint: "Substitua o asterisco pelo nome da coluna."
    },
    {
        title: "NÍVEL 5: A Chave Mestra (Pergunta Rápida)",
        story: "Para alterar o firewall, precisamos identificar a Chave Primária.",
        schema: "Colunas do Firewall: id_reg (PK), ip_origem, porta",
        question: "Analisando as colunas acima, qual é o nome exato da coluna que é a Chave Primária (PK)?",
        type: "output", answer: "id_reg",
        placeholder: "Digite o nome da coluna",
        hint: "Digite apenas o nome da coluna que tem a marcação (PK).",
        isBoss: true
    },
    {
        title: "NÍVEL 6: O Primeiro Filtro (SELECT)",
        story: "Descobrimos que a máquina do administrador tem o ID 1.",
        schema: "Tabela: servidores\nColunas: id, ip",
        question: "Selecione o 'ip' da tabela 'servidores' ONDE o 'id' seja igual a 1.",
        type: "query", answer: "select ip from servidores where id = 1",
        placeholder: "SELECT ...",
        hint: "Adicione a cláusula WHERE no seu SELECT."
    },
    {
        title: "NÍVEL 7: Injeção Furtiva (INSERT)",
        story: "A tabela de intrusos não tem chaves de segurança. Vamos colocar nosso nome lá.",
        schema: "Tabela: intrusos\nColunas: nome, nivel",
        question: "Insira (INSERT INTO) na tabela 'intrusos' os valores ('neo', 99).",
        type: "query", answer: "insert into intrusos (nome, nivel) values ('neo', 99)",
        placeholder: "INSERT INTO ...",
        hint: "Forma curta: INSERT INTO tabela VALUES ('texto', numero)."
    },
    {
        title: "NÍVEL 8: Sabotagem Simples (UPDATE)",
        story: "Os alarmes vão disparar! Desligue todos eles de uma vez só.",
        schema: "Tabela: alarmes\nColunas: id, status",
        question: "Atualize (UPDATE) a tabela 'alarmes' definindo 'status' = 'off' (sem usar WHERE, altere todos).",
        type: "query", answer: "update alarmes set status = 'off'",
        placeholder: "UPDATE ...",
        hint: "Sintaxe curta: UPDATE tabela SET coluna = 'valor'."
    },
    {
        title: "NÍVEL 9: Queima de Arquivo (DELETE)",
        story: "Nós deixamos um rastro claro. Apague apenas a nossa conexão.",
        schema: "Tabela: logs_entrada\nColunas: id, ip",
        question: "Delete (DELETE FROM) da tabela 'logs_entrada' ONDE o 'ip' seja igual a '1.1.1.1'.",
        type: "query", answer: "delete from logs_entrada where ip = '1.1.1.1'",
        placeholder: "DELETE FROM ...",
        hint: "DELETE FROM tabela WHERE coluna = 'valor'.",
        isBoss: true
    },
    {
        title: "NÍVEL 10: Apagão de Dados [BOSS BATTLE]",
        story: "O ANTIVÍRUS COMEÇOU A LER A TABELA TEMPORÁRIA! NÃO TEMOS TEMPO PARA APAGAR UM POR UM!",
        schema: "Tabela: logs_temp",
        question: "Escreva a query para DELETAR todos os registros da tabela 'logs_temp' em um único golpe (sem WHERE).",
        type: "query", answer: "delete from logs_temp",
        placeholder: "DELETE FROM ...",
        hint: "O comando DELETE sem o WHERE apaga todas as linhas de uma vez."
    },

    // --- FASE 2: MANIPULAÇÃO AVANÇADA E DML (11 a 20) ---
    {
        title: "NÍVEL 11: Criação Expressa (INSERT)",
        story: "Crie um perfil provisório. A tabela tem muitas colunas, preencha apenas o nome.",
        schema: "Tabela: players\nColunas a preencher: nome",
        question: "Insira (INSERT INTO) na tabela 'players' focando apenas na coluna (nome), o valor ('ghost').",
        type: "query", answer: "insert into players (nome) values ('ghost')",
        placeholder: "INSERT INTO ...",
        hint: "Sintaxe: INSERT INTO tabela (coluna) VALUES ('valor')."
    },
    {
        title: "NÍVEL 12: Hackeando a Economia (UPDATE)",
        story: "Nossa conta está zerada. Vamos alterar nosso próprio saldo.",
        schema: "Tabela: carteira\nColunas: id_player, moedas",
        question: "Atualize a tabela 'carteira' definindo 'moedas' = 9999 ONDE o 'id_player' for 1.",
        type: "query", answer: "update carteira set moedas = 9999 where id_player = 1",
        placeholder: "UPDATE ...",
        hint: "UPDATE tabela SET coluna = valor WHERE condicao.",
        isBoss: true
    },
    {
        title: "NÍVEL 13: Upgrades Simultâneos (UPDATE)",
        story: "Aumente as defesas e mude a classe do nosso personagem ao mesmo tempo.",
        schema: "Tabela: status\nColunas: id, classe, escudo",
        question: "Atualize a tabela 'status' definindo 'classe' = 'tank' E 'escudo' = 1000 onde o 'id' = 1.",
        type: "query", answer: "update status set classe = 'tank', escudo = 1000 where id = 1",
        placeholder: "UPDATE ...",
        hint: "Separe as colunas a atualizar com vírgula no SET."
    },
    {
        title: "NÍVEL 14: Matemática no Banco (UPDATE)",
        story: "A loja do jogo está cara demais. Vamos cortar os preços pela metade.",
        schema: "Tabela: loja\nColunas: item, preco",
        question: "Atualize a 'loja', definindo 'preco' = preco / 2 ONDE o 'item' for 'pocao'.",
        type: "query", answer: "update loja set preco = preco / 2 where item = 'pocao'",
        placeholder: "UPDATE ...",
        hint: "O SQL permite referenciar a própria coluna no SET."
    },
    {
        title: "NÍVEL 15: Anistia Global (DELETE)",
        story: "Vamos libertar todos os aliados. Remova todas as punições do servidor.",
        schema: "Tabela: banimentos",
        question: "Delete TODOS os registros da tabela 'banimentos' (sem usar WHERE).",
        type: "query", answer: "delete from banimentos",
        placeholder: "DELETE FROM ...",
        hint: "DELETE FROM tabela.",
        isBoss: true
    },
    {
        title: "NÍVEL 16: Limpando o Lixo (DELETE)",
        story: "O inventário tem itens inúteis. Vamos apagá-los baseados no nível.",
        schema: "Tabela: inventario\nColunas: level",
        question: "Delete da tabela 'inventario' onde o 'level' seja MENOR (<) que 5.",
        type: "query", answer: "delete from inventario where level < 5",
        placeholder: "DELETE FROM ...",
        hint: "Adicione a condição matemática no WHERE."
    },
    {
        title: "NÍVEL 17: Diferente do Padrão (SELECT)",
        story: "Precisamos de uma lista das contas que não pertencem a empresas.",
        schema: "Tabela: contas\nColunas: titular, tipo",
        question: "Selecione o 'titular' da tabela 'contas' ONDE o 'tipo' seja DIFERENTE (!=) de 'corporativa'.",
        type: "query", answer: "select titular from contas where tipo != 'corporativa'",
        placeholder: "SELECT ...",
        hint: "Use o operador != ou <> para 'diferente'."
    },
    {
        title: "NÍVEL 18: Caçada aos Fortes (SELECT)",
        story: "Queremos investigar apenas as guildas mais fortes do servidor.",
        schema: "Tabela: guildas\nColunas: nome, rank",
        question: "Selecione o 'nome' da tabela 'guildas' onde o 'rank' seja MAIOR (>) que 10.",
        type: "query", answer: "select nome from guildas where rank > 10",
        placeholder: "SELECT ...",
        hint: "Use o sinal matemático > no WHERE."
    },
    {
        title: "NÍVEL 19: O Último da Fila (SELECT)",
        story: "Descubra qual foi o último IP a se conectar no servidor.",
        schema: "Tabela: conexoes\nColunas: id, ip",
        question: "Selecione o 'ip' de 'conexoes', ordenando pelo 'id' de forma DECRESCENTE (DESC) e limitando (LIMIT) a 1 linha.",
        type: "query", answer: "select ip from conexoes order by id desc limit 1",
        placeholder: "SELECT ...",
        hint: "Adicione ORDER BY DESC e LIMIT 1 no final da sua query."
    },
    {
        title: "NÍVEL 20: Terraplanagem [BOSS BATTLE]",
        story: "O ARQUIVO DE RASTREAMENTO DETECTOU NOSSO PING! ELES VÃO LER A TABELA! DESTRUA A TABELA INTEIRA DA EXISTÊNCIA!",
        schema: "Tabela: rastreador",
        question: "Qual comando estrutural (DDL) apaga/destrói completamente a tabela 'rastreador'?",
        type: "query", answer: "drop table rastreador",
        placeholder: "DROP ...",
        hint: "Comando estrutural de destruição: DROP TABLE nome_tabela.",
        isBoss: true
    },

    // --- FASE 3: LÓGICA, DDL E FILTROS (21 a 30) ---
    {
        title: "NÍVEL 21: O Novo Mundo (DDL)",
        story: "O servidor deles está sob nosso controle. Crie nossa própria base de dados secreta.",
        schema: "Ambiente Global",
        question: "Qual o comando DDL para CRIAR um banco de dados chamado 'shadow_net'?",
        type: "query", answer: "create database shadow_net",
        placeholder: "CREATE DATABASE ...",
        hint: "Sintaxe DDL: CREATE DATABASE nome."
    },
    {
        title: "NÍVEL 22: O Espelho (DDL)",
        story: "Crie uma tabela simples para espelhar e guardar os dados roubados.",
        schema: "Tabela: espelho\nColunas: id (int), nome (varchar)",
        question: "Escreva o comando para CRIAR a tabela 'espelho' com as colunas (id int, nome varchar).",
        type: "query", answer: "create table espelho (id int, nome varchar)",
        placeholder: "CREATE TABLE ...",
        hint: "Sintaxe: CREATE TABLE nome (coluna tipo, coluna tipo)."
    },
    {
        title: "NÍVEL 23: Fortalecendo Defesas (DDL)",
        story: "Nossa tabela de defesas precisa de uma nova coluna de alerta.",
        schema: "Tabela: defesas\nNova coluna: falha (boolean)",
        question: "Altere a tabela (ALTER TABLE) 'defesas' para adicionar a coluna (ADD COLUMN) 'falha' do tipo 'boolean'.",
        type: "query", answer: "alter table defesas add column falha boolean",
        placeholder: "ALTER TABLE ...",
        hint: "Sintaxe: ALTER TABLE tabela ADD COLUMN coluna tipo."
    },
    {
        title: "NÍVEL 24: Armas Pesadas (SELECT com LIKE)",
        story: "Precisamos de armas que comecem com a palavra 'sniper'.",
        schema: "Tabela: armas\nColunas: nome",
        question: "Selecione o 'nome' de 'armas' onde o nome comece com 'sniper' (Use LIKE).",
        type: "query", answer: "select nome from armas where nome like 'sniper%'",
        placeholder: "SELECT ...",
        hint: "No LIKE, use o sinal de % no final da palavra."
    },
    {
        title: "NÍVEL 25: O Fim da Pista (SELECT com LIKE)",
        story: "Encontre os e-mails dos administradores.",
        schema: "Tabela: contatos\nColunas: email",
        question: "Selecione o 'email' da tabela 'contatos' onde o email termine com '@admin.com'.",
        type: "query", answer: "select email from contatos where email like '%@admin.com'",
        placeholder: "SELECT ...",
        hint: "No LIKE, coloque o % antes do texto."
   
    },
    {
        title: "NÍVEL 26: Lacunas no Sistema (SELECT com Nulos)",
        story: "Os bots sem número de série são fáceis de desligar.",
        schema: "Tabela: bots\nColunas: id, num_serie",
        question: "Selecione o 'id' da tabela 'bots' onde o 'num_serie' seja nulo.",
        type: "query", answer: "select id from bots where num_serie is null",
        placeholder: "SELECT ...",
        hint: "Use IS NULL no WHERE.",
        isBoss: true
    },
    {
        title: "NÍVEL 27: Acesso Negado (DELETE com LIKE)",
        story: "A rede interna usa IPs começando com '10.'. Elimine todos os IPs internos do log.",
        schema: "Tabela: logs\nColunas: ip",
        question: "Delete de 'logs' onde o 'ip' comece com '10.' (Use LIKE '10.%').",
        type: "query", answer: "delete from logs where ip like '10.%'",
        placeholder: "DELETE ...",
        hint: "Você pode usar o LIKE dentro do DELETE perfeitamente."
    },
    {
        title: "NÍVEL 28: Promoção (UPDATE com Filtro)",
        story: "Dê status de vip para os jogadores mais avançados.",
        schema: "Tabela: players\nColunas: status, level",
        question: "Atualize 'players' setando o 'status' = 'vip' onde o 'level' for MAIOR (>) que 90.",
        type: "query", answer: "update players set status = 'vip' where level > 90",
        placeholder: "UPDATE ...",
        hint: "Um UPDATE com condição matemática de maior que."
    },
    {
        title: "NÍVEL 29: Redundância (SELECT)",
        story: "A lista de logs tem setores repetidos. Queremos apenas os nomes dos setores de forma única.",
        schema: "Tabela: logs\nColunas: setor",
        question: "Selecione APENAS os valores ÚNICOS e sem repetição da coluna 'setor' da tabela 'logs'.",
        type: "query", answer: "select distinct setor from logs",
        placeholder: "SELECT ...",
        hint: "Use a palavra DISTINCT logo após o SELECT."
    },
    {
        title: "NÍVEL 30: Múltiplos Alvos [BOSS BATTLE]",
        story: "A IA ESTÁ BLOQUEANDO O FIREWALL 1 E O FIREWALL 2. DESLIGUE OS DOIS AO MESMO TEMPO ANTES DE SERMOS PEGOS!",
        schema: "Tabela: defesas\nColunas: id, status",
        question: "Atualize 'defesas' definindo 'status' = 'off' ONDE o 'id' = 1 OU (OR) 'id' = 2.",
        type: "query", answer: "update defesas set status = 'off' where id = 1 or id = 2",
        placeholder: "UPDATE ...",
        hint: "Use o operador lógico OR no WHERE do seu UPDATE.",
        isBoss: true
    },

    // --- FASE 4: INTELIGÊNCIA MATEMÁTICA E AGREGAÇÃO (31 a 40) ---
    {
        title: "NÍVEL 31: O Tamanho do Exército (SELECT)",
        story: "Precisamos saber quantos drones de segurança existem na malha do servidor.",
        schema: "Tabela: drones",
        question: "Use a função agregadora para CONTAR o número total de registros da tabela 'drones'.",
        type: "query", answer: "select count(*) from drones",
        placeholder: "SELECT ...",
        hint: "A função é COUNT(*)."
    },
    {
        title: "NÍVEL 32: O Jogador Supremo (SELECT)",
        story: "Qual é o maior level registrado no servidor do jogo?",
        schema: "Tabela: players\nColunas: level",
        question: "Use a função agregadora para trazer o MÁXIMO da coluna 'level' da tabela 'players'.",
        type: "query", answer: "select max(level) from players",
        placeholder: "SELECT ...",
        hint: "A função é MAX(coluna)."
    },
    {
        title: "NÍVEL 33: A Rota Mais Curta (SELECT)",
        story: "Precisamos do menor tempo de resposta (ping) para enviar os pacotes.",
        schema: "Tabela: rotas\nColunas: ping",
        question: "Use a função agregadora para trazer o MÍNIMO da coluna 'ping' da tabela 'rotas'.",
        type: "query", answer: "select min(ping) from rotas",
        placeholder: "SELECT ...",
        hint: "A função é MIN(coluna)."
    },
    {
        title: "NÍVEL 34: Jackpot (SELECT)",
        story: "Vamos limpar o cofre. Qual o valor total se somarmos todo o ouro (gold)?",
        schema: "Tabela: cofres\nColunas: gold",
        question: "Use a função agregadora para SOMAR toda a coluna 'gold' da tabela 'cofres'.",
        type: "query", answer: "select sum(gold) from cofres",
        placeholder: "SELECT ...",
        hint: "A função é SUM(coluna)."
    },
    {
        title: "NÍVEL 35: O Padrão Inimigo (SELECT)",
        story: "Nossos personagens precisam ter o mesmo dano médio dos jogadores normais para não chamar atenção.",
        schema: "Tabela: armas\nColunas: dano",
        question: "Use a função agregadora para calcular a MÉDIA da coluna 'dano' da tabela 'armas'.",
        type: "query", answer: "select avg(dano) from armas",
        placeholder: "SELECT ...",
        hint: "A função é AVG(coluna)."
    },
    {
        title: "NÍVEL 36: Contagem de Falhas (SELECT)",
        story: "Quantas falhas de severidade 'alta' ocorreram?",
        schema: "Tabela: falhas\nColunas: severidade",
        question: "Traga a contagem total (COUNT(*)) da tabela 'falhas' onde a 'severidade' for 'alta'.",
        type: "query", answer: "select count(*) from falhas where severidade = 'alta'",
        placeholder: "SELECT ...",
        hint: "Você pode filtrar funções matemáticas usando o WHERE.",
        isBoss: true
    },
    {
        title: "NÍVEL 37: Fragmentação de Tropas (SELECT com GROUP BY)",
        story: "Quantos guardas existem distribuídos por cada setor de segurança?",
        schema: "Tabela: guardas\nColunas: setor",
        question: "Traga o 'setor' e a contagem (COUNT(*)) da tabela 'guardas', agrupando a resposta pelo 'setor' (GROUP BY).",
        type: "query", answer: "select setor, count(*) from guardas group by setor",
        placeholder: "SELECT ...",
        hint: "Use GROUP BY na coluna de texto no final da query."
    },
    {
        title: "NÍVEL 38: Analisando as Classes (SELECT com GROUP BY)",
        story: "Qual é o level máximo atingido por cada classe diferente de personagem?",
        schema: "Tabela: players\nColunas: classe, level",
        question: "Traga a 'classe' e o MÁXIMO do 'level' da tabela 'players', agrupando pela 'classe'.",
        type: "query", answer: "select classe, max(level) from players group by classe",
        placeholder: "SELECT ...",
        hint: "Mesma lógica do agrupamento anterior, mas com a função MAX()."
    },
    {
        title: "NÍVEL 39: Ranking de Riqueza (SELECT com GROUP BY)",
        story: "Quanto de ouro cada guilda possui somada?",
        schema: "Tabela: cofres\nColunas: guilda, gold",
        question: "Traga a 'guilda' e a SOMA (SUM) do 'gold' da tabela 'cofres', agrupando pela 'guilda'.",
        type: "query", answer: "select guilda, sum(gold) from cofres group by guilda",
        placeholder: "SELECT ...",
        hint: "Aplica-se o SUM e o GROUP BY na coluna guilda."
    },
    {
        title: "NÍVEL 40: Zero Absoluto [BOSS BATTLE]",
        story: "OS RASTREADORES ESTÃO LENDO A COLUNA DE IP DOS LOGS! ZERE TODOS OS IPs IMEDIATAMENTE ANTES DO BLOQUEIO!",
        schema: "Tabela: logs\nColunas: ip",
        question: "Atualize a tabela 'logs' mudando o 'ip' para '0.0.0.0' em TODOS os registros (sem usar WHERE).",
        type: "query", answer: "update logs set ip = '0.0.0.0'",
        placeholder: "UPDATE ...",
        hint: "Um UPDATE sem WHERE altera a tabela inteira instantaneamente.",
        isBoss: true
    },

    // --- FASE 5: CRUZAMENTOS DE TABELAS (JOINS) E O FIM (41 a 50) ---
    {
        title: "NÍVEL 41: O Elo Perdido (INNER JOIN)",
        story: "Para saber o nome da arma do jogador, cruze as duas tabelas pela chave de ID.",
        schema: "Tabelas: player (id_arma) | armas (id)",
        question: "Faça um INNER JOIN de tudo (*), cruzando 'player' com 'armas' (ON player.id_arma = armas.id).",
        type: "query", answer: "select * from player inner join armas on player.id_arma = armas.id",
        placeholder: "SELECT ... INNER JOIN ... ON ...",
        hint: "Sintaxe padrão do JOIN: SELECT * FROM t1 INNER JOIN t2 ON t1.fk = t2.pk."
    },
    {
        title: "NÍVEL 42: O Elo Filtrado (INNER JOIN com WHERE)",
        story: "Cruze logs e erros, mas mostre apenas os logs de severidade 'critico'.",
        schema: "Tabelas: logs (id_erro, nivel) | erros (id)",
        question: "INNER JOIN de 'logs' com 'erros' (ON logs.id_erro = erros.id) e filtre com WHERE logs.nivel = 'critico'. Selecione tudo (*).",
        type: "query", answer: "select * from logs inner join erros on logs.id_erro = erros.id where logs.nivel = 'critico'",
        placeholder: "SELECT ...",
        hint: "A cláusula WHERE vai sempre no final do comando JOIN."
    },
    {
        title: "NÍVEL 43: Preservando Dados (LEFT JOIN)",
        story: "Traga TODOS os heróis, mesmo aqueles que ainda não possuem uma guilda associada.",
        schema: "Tabelas: herois (id_guilda) | guildas (id)",
        question: "Traga tudo (*) de 'herois' fazendo um LEFT JOIN com 'guildas' (ON herois.id_guilda = guildas.id).",
        type: "query", answer: "select * from herois left join guildas on herois.id_guilda = guildas.id",
        placeholder: "SELECT ... LEFT JOIN ...",
        hint: "O LEFT JOIN garante que a primeira tabela não perca linhas se a ligação não existir.",
        isBoss: true
    },
    {
        title: "NÍVEL 44: A Visão Oposta (RIGHT JOIN)",
        story: "Traga TODAS as guildas, mesmo aquelas que não têm nenhum herói.",
        schema: "Tabelas: herois (id_guilda) | guildas (id)",
        question: "Traga tudo (*) fazendo um RIGHT JOIN de 'herois' com 'guildas' (ON herois.id_guilda = guildas.id).",
        type: "query", answer: "select * from herois right join guildas on herois.id_guilda = guildas.id",
        placeholder: "SELECT ... RIGHT JOIN ...",
        hint: "Exatamente a mesma sintaxe do LEFT, apenas trocando a palavra para RIGHT."
    },
    {
        title: "NÍVEL 45: JOIN com Ordem (ORDER BY)",
        story: "Liste os players e suas guildas, mas mostre em ordem alfabética do nome do player.",
        schema: "Tabelas: players (id_guilda, nome) | guildas (id, nome)",
        question: "INNER JOIN (ON players.id_guilda = guildas.id) selecionando players.nome e guildas.nome. Finalize com ORDER BY players.nome ASC.",
        type: "query", answer: "select players.nome, guildas.nome from players inner join guildas on players.id_guilda = guildas.id order by players.nome asc",
        placeholder: "SELECT ...",
        hint: "Use o padrão tabela.coluna no SELECT para não gerar erro de ambiguidade."
    },
    {
        title: "NÍVEL 46: Cruzamento Analítico (JOIN com GROUP BY)",
        story: "Quantos jogadores existem em cada guilda? Mostre o nome da guilda e a contagem.",
        schema: "Tabelas: players (id_guilda) | guildas (id, nome)",
        question: "INNER JOIN (ON players.id_guilda = guildas.id). Selecione guildas.nome e COUNT(*), agrupando (GROUP BY) por guildas.nome.",
        type: "query", answer: "select guildas.nome, count(*) from players inner join guildas on players.id_guilda = guildas.id group by guildas.nome",
        placeholder: "SELECT ...",
        hint: "Uma combinação de JOIN com GROUP BY na mesma query."
    },
    {
        title: "NÍVEL 47: A Mega Estrutura (Múltiplos JOINs)",
        story: "Cruze 3 relatórios de rede através dos IPs para descobrir a origem.",
        schema: "Tabelas: log_a (ip), log_b (ip), log_c (ip)",
        question: "Traga tudo (*) com INNER JOIN de log_a com log_b (ON log_a.ip = log_b.ip) e outro INNER JOIN de log_b com log_c (ON log_b.ip = log_c.ip).",
        type: "query", answer: "select * from log_a inner join log_b on log_a.ip = log_b.ip inner join log_c on log_b.ip = log_c.ip",
        placeholder: "SELECT ... INNER JOIN ... INNER JOIN ...",
        hint: "Basta encadear os JOINs um após o outro na mesma linha.",
        isBoss: true
    },
    {
        title: "NÍVEL 48: Limpeza Lógica (DELETE com OR)",
        story: "A polícia chegou no servidor. Apague os players que são level baixo ou que já foram banidos.",
        schema: "Tabela: players\nColunas: level, status",
        question: "Delete de 'players' onde o 'level' for MENOR (<) que 5 OU (OR) o 'status' for 'banido'.",
        type: "query", answer: "delete from players where level < 5 or status = 'banido'",
        placeholder: "DELETE ...",
        hint: "Use a cláusula DELETE com um WHERE e um operador OR."
    },
    {
        title: "NÍVEL 49: Queda da Defesa (DDL)",
        story: "Os logs nos entregaram. Destrua a tabela de logs da rede.",
        schema: "Tabela: omnisec_logs",
        question: "Qual comando estrutural destrói completamente a tabela 'omnisec_logs'?",
        type: "query", answer: "drop table omnisec_logs",
        placeholder: "DROP ...",
        hint: "Apagar tabela definitivamente: DROP TABLE nome."
    },
    {
        title: "NÍVEL 50: GAME OVER [FINAL BOSS]",
        story: "A IA ESTÁ PRESTES A EXECUTAR O FIREWALL E APAGAR NOSSOS PCS DA REDE MUNDIAL! DESTRUA O CORAÇÃO DO SISTEMA AGORA!",
        schema: "Banco de Dados Central: cyber_arena",
        question: "Qual é o comando destrutivo final (DDL) para apagar e excluir completamente o banco de dados 'cyber_arena' do mapa?",
        type: "query", answer: "drop database cyber_arena",
        placeholder: "DROP DATABASE ...",
        hint: "A arma nuclear do SQL: DROP DATABASE nome_do_banco.",
        isBoss: true
    }
];


let currentLevelIndex = 0;
let errorCount = 0;
let startTime;
let penaltyTime = 0; // Segundos adicionados por dicas
let bossInterval;
let isBgmMuted = false;
let isSfxMuted = false;

const FORMSPREE_URL = "https://formspree.io/f/mkjgaeoz"; 

// --- SISTEMA DE ÁUDIO ---

// --- SISTEMA DE ÁUDIO SEPARADO ---
function toggleBgm() {
    isBgmMuted = !isBgmMuted;
    const btn = document.getElementById('btn-bgm');
    const bgm = document.getElementById('bgm');
    
    if (isBgmMuted) { 
        btn.innerText = "🔇 MÚSICA: DESLIGADA";
        bgm.pause(); 
    } else { 
        btn.innerText = "🎵 MÚSICA: LIGADA";
        bgm.play().catch(e => console.log("Aguardando interação")); 
    }
}

function toggleSfx() {
    isSfxMuted = !isSfxMuted;
    const btn = document.getElementById('btn-sfx');
    
    if (isSfxMuted) {
        btn.innerText = "🔇 EFEITOS: DESLIGADOS";
        stopSound('sfx-type'); // Para o teclado se estiver tocando
    } else {
        btn.innerText = "🔊 EFEITOS: LIGADOS";
    }
}

function playSound(id) {
    if (isSfxMuted) return; // Só bloqueia se os EFEITOS estiverem mutados
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play().catch(e => console.log("Áudio pendente de interação"));
}

function stopSound(id) {
    document.getElementById(id).pause();
}

// --- FLUXO DO JOGO ---
function startGame() {
    const teamName = document.getElementById('team-name').value.trim();
    if (teamName === '') { alert("Digite o nome da equipe."); return; }
    
    localStorage.setItem('sqlEscapeTeam', teamName);
    startTime = new Date(); 
    penaltyTime = 0;
    
    if(!isBgmMuted) document.getElementById('bgm').play(); // Inicia música
    
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    loadLevel();
}

// Efeito máquina de escrever com áudio
let typeTimeout;
function typeWriter(text, elementId, speed) {
    const element = document.getElementById(elementId);
    element.innerHTML = "";
    let i = 0;
    clearTimeout(typeTimeout);
    playSound('sfx-type'); // Toca som do teclado
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            typeTimeout = setTimeout(type, speed);
        } else {
            stopSound('sfx-type'); // Para o som quando terminar
        }
    }
    type();
}

function loadLevel() {
    const levelData = levels[currentLevelIndex];
    document.getElementById('error-msg').innerText = "";
    
    // Reseta Sistema de Dicas
    document.getElementById('btn-hint').style.display = 'block';
    document.getElementById('hint-text').style.display = 'none';

    document.getElementById('level-title').innerText = levelData.title;
    document.getElementById('level-schema').innerText = levelData.schema;
    document.getElementById('level-question').innerText = levelData.question;

    typeWriter(levelData.story, 'level-story', 60);

    const inputArea = document.getElementById('input-area');
    inputArea.innerHTML = levelData.type === "query" 
        ? `<textarea id="user-answer" placeholder="${levelData.placeholder}"></textarea>` 
        : `<input type="text" id="user-answer" placeholder="${levelData.placeholder}" autocomplete="off">`;

    document.getElementById('user-answer').addEventListener('keydown', event => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            checkAnswer();
        }
    });

    setTimeout(() => { document.getElementById('user-answer').focus(); }, 100);
    document.getElementById('progress-fill').style.width = `${(currentLevelIndex / levels.length) * 100}%`;

    // --- LÓGICA DO BOSS ---
    clearInterval(bossInterval);
    if (levelData.isBoss) {
        document.body.classList.add('boss-mode');
        document.getElementById('boss-timer-container').style.display = 'block';
        startBossTimer(100); // 100 segundos
    } else {
        document.body.classList.remove('boss-mode');
        document.getElementById('boss-timer-container').style.display = 'none';
    }
}

// --- SISTEMA DE DICAS (PENALIDADE) ---
function hackearDica() {
    const confirmacao = confirm("ATENÇÃO: Hackear esta dica adicionará +1 MINUTO de penalidade ao tempo final da equipe. Deseja assumir o risco?");
    if (confirmacao) {
        penaltyTime += 60; // Adiciona 1 minuto em segundos
        document.getElementById('hint-text').innerText = ">_ DICA OMNISEC: " + levels[currentLevelIndex].hint;
        document.getElementById('hint-text').style.display = 'block';
        document.getElementById('btn-hint').style.display = 'none';
    }
}

// --- MECÂNICA DO BOSS ---
function startBossTimer(seconds) {
    let timeLeft = seconds;
    updateBossDisplay(timeLeft);
    
    bossInterval = setInterval(() => {
        timeLeft--;
        updateBossDisplay(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(bossInterval);
            failBoss();
        }
    }, 1000);
}

function updateBossDisplay(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    document.getElementById('boss-time').innerText = `${m}:${s}`;
}

function failBoss() {
    playSound('sfx-error');
    document.body.classList.remove('boss-mode');
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('boss-fail-screen').classList.add('active');
    
    setTimeout(() => {
        currentLevelIndex--; // Punição: Volta um nível
        document.getElementById('boss-fail-screen').classList.remove('active');
        document.getElementById('game-screen').classList.add('active');
        loadLevel();
    }, 4000);
}

function normalizeSQL(sqlString) {
    const tokens = sqlString.toLowerCase().match(/'(?:''|[^'])*'|"(?:""|[^"])*"|[a-z0-9_]+|<=|>=|<>|!=|[^\s]/g) || [];
    return tokens
        .map(token => token.startsWith('"') ? `'${token.slice(1, -1)}'` : token)
        .filter(token => token !== ';')
        .join(' ');
}

function checkAnswer() {
    const levelData = levels[currentLevelIndex];
    const rawAnswer = document.getElementById('user-answer').value;
    const processedUserAnswer = normalizeSQL(rawAnswer);
    const expectedAnswer = normalizeSQL(levelData.answer);

    let isCorrect = (processedUserAnswer === expectedAnswer);

    // Validação Inteligente: Se a resposta esperada for um ALTER TABLE,
    // ele aceita tanto com a palavra "COLUMN" quanto sem ela.
    if (levelData.type === "query" && expectedAnswer.includes("alter table")) {
        if (processedUserAnswer === expectedAnswer || 
            processedUserAnswer === expectedAnswer.replace("add column", "add")) {
            isCorrect = true;
        }
    }

    if (isCorrect) {
        playSound('sfx-success');
        clearInterval(bossInterval); // Para o timer se for boss
        errorCount = 0;
        document.getElementById('error-msg').innerText = ""; 
        currentLevelIndex++;
        
        if (currentLevelIndex >= levels.length) { 
            finalizarJogo(); 
        } else { 
            mostrarTransicao(); 
        }
    } else {
        playSound('sfx-error');
        errorCount++;
        document.getElementById('error-msg').innerText = `[!] ERRO DE SINTAXE OU LÓGICA. Tentativa falha ${errorCount}/3`;
        
        const btn = document.getElementById('btn-execute');
        btn.style.transform = "translate(5px, 0)";
        setTimeout(() => btn.style.transform = "translate(-5px, 0)", 100);
        setTimeout(() => btn.style.transform = "translate(0, 0)", 200);
        
        if (errorCount >= 3) { triggerTimeout(); }
    }
}


function mostrarTransicao() {
    document.body.classList.remove('boss-mode');
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('transition-screen').classList.add('active');
    
    setTimeout(() => {
        document.getElementById('transition-screen').classList.remove('active');
        document.getElementById('game-screen').classList.add('active');
        loadLevel();
    }, 2500);
}

function finalizarJogo() {
    document.body.classList.remove('boss-mode');
    const endTime = new Date();
    // Tempo total real + Penalidades das Dicas
    const timeDiff = Math.floor((endTime - startTime) / 1000) + penaltyTime; 
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;
    const timeString = `${minutes}m ${seconds}s`;

    const team = localStorage.getItem('sqlEscapeTeam');
    sendEmailReport(team, timeString);

    document.getElementById('progress-fill').style.width = `100%`;
    document.getElementById('display-team-name').innerText = `${team}`;
    document.getElementById('display-time').innerText = `Parabéns, seu tempo final foi enviado para o professor Jociel`;

    
    if (penaltyTime > 0) {
        document.getElementById('display-penalty').innerText = `*Inclui ${Math.floor(penaltyTime/60)} minutos de penalidade por uso de exploits (dicas).`;
    }

    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('success-screen').classList.add('active');
}

function triggerTimeout() {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('timeout-screen').classList.add('active');
    
    let timeLeft = 30;
    const timerDisplay = document.getElementById('timer');
    timerDisplay.innerText = timeLeft;

    const countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            errorCount = 0;
            document.getElementById('error-msg').innerText = ""; 
            document.getElementById('timeout-screen').classList.remove('active');
            document.getElementById('game-screen').classList.add('active');
        }
    }, 1000);
}

// ==========================================
// ENVIO DE E-MAIL (FORMSPREE)
// ==========================================
function sendEmailReport(teamName, timeString) {
    if (FORMSPREE_URL === "https://formspree.io/f/SEU_CODIGO_AQUI" || FORMSPREE_URL === "") {
        console.warn("Link do Formspree não configurado.");
        return;
    }

    fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
        },
        body: JSON.stringify({
            Assunto: "🚨 Escape Room SQL - Resultado!",
            Aluno: teamName,
            Tempo_Gasto: timeString,
            Penalidade: penaltyTime > 0 ? `${Math.floor(penaltyTime/60)} minutos` : "Nenhuma",
            Nível_Final: currentLevelIndex >= levels.length ? "50 (FINAL BOSS)" : currentLevelIndex
        })
    })
    .then(response => {
        if (response.ok) {
            console.log("Relatório enviado para o seu e-mail com sucesso!");
        } else {
            console.error("Erro retornado pelo Formspree:", response.status);
        }
    })
    .catch(error => {
        console.error('Erro de conexão ao tentar enviar o e-mail:', error);
    });
}