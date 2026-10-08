// ==========================================
// A MEGA CAMPANHA OMNISEC - 50 NÍVEIS (FOCO EM AÇÃO DML/DDL)
// ==========================================
const levels = [
    // --- FASE 1: ACESSO AO TERMINAL E HACK RÁPIDO (1 a 10) ---
    {
        title: "NÍVEL 1: O Alvo",
        story: "Conseguimos abrir o terminal. O servidor possui vários bancos de dados. Precisamos nos conectar ao banco principal.",
        schema: "Bancos disponíveis: sys, mysql, omnisec, temp",
        question: "Qual o comando (com apenas duas palavras) para selecionar/usar o banco de dados 'omnisec'?",
        type: "query", answer: "use omnisec",
        placeholder: "Comando...",
        hint: "Comando básico do MySQL: USE nome_do_banco."
    },
    {
        title: "NÍVEL 2: Mapeamento Visual",
        story: "Estamos dentro. Agora precisamos ver os nomes de todas as tabelas que existem aqui para saber o que atacar.",
        schema: "Banco de dados atual: omnisec",
        question: "Qual comando do MySQL mostra a lista de todas as tabelas?",
        type: "query", answer: "show tables",
        placeholder: "Comando...",
        hint: "Comando de duas palavras: SHOW TABLES."
    },
    {
        title: "NÍVEL 3: Visão de Raio-X",
        story: "Encontramos a tabela 'firewall', mas precisamos saber os tipos de dados das colunas dela antes de tentar algo.",
        schema: "Tabela alvo: firewall",
        question: "Qual comando (usando a abreviação de 4 letras) descreve a estrutura da tabela 'firewall'?",
        type: "query", answer: "desc firewall",
        placeholder: "Comando...",
        hint: "Use a abreviação do comando describe: DESC nome_da_tabela."
    },
    {
        title: "NÍVEL 4: Invasão Furtiva (INSERT)",
        story: "A tabela de intrusos não tem chaves de segurança. Coloque nosso nome lá dentro para ganharmos acesso.",
        schema: "Tabela: intrusos\nColunas: nome, nivel",
        question: "INSERIR (INSERT INTO) na tabela 'intrusos' os valores ('neo', 99).",
        type: "query", answer: "insert into intrusos (nome, nivel) values ('neo', 99)",
        placeholder: "INSERT INTO ...",
        hint: "Forma curta: INSERT INTO tabela VALUES ('texto', numero)."
    },
    {
        title: "NÍVEL 5: Sabotagem Simples (UPDATE)",
        story: "Os alarmes do saguão vão disparar. Desligue todos eles de uma vez só.",
        schema: "Tabela: alarmes\nColunas: id, status",
        question: "Atualize (UPDATE) a tabela 'alarmes' definindo 'status' = 'off' (sem usar WHERE, altere todos).",
        type: "query", answer: "update alarmes set status = 'off'",
        placeholder: "UPDATE ...",
        hint: "Sintaxe curta: UPDATE tabela SET coluna = 'valor'.",
        isBoss: true
    },
    {
        title: "NÍVEL 6: Queima de Arquivo Específico (DELETE)",
        story: "A tabela de logs de entrada registrou o nosso IP '192.168.0.1'. Apague apenas o nosso rastro.",
        schema: "Tabela: logs_entrada\nColunas: id, ip",
        question: "Delete (DELETE FROM) da tabela 'logs_entrada' ONDE o 'ip' seja igual a '192.168.0.1'.",
        type: "query", answer: "delete from logs_entrada where ip = '192.168.0.1'",
        placeholder: "DELETE FROM ...",
        hint: "Use a cláusula WHERE para apagar apenas o registro certo: DELETE FROM tabela WHERE condicao."
    },
    {
        title: "NÍVEL 7: Verificação de Rota (SELECT)",
        story: "Limpeza feita. Agora precisamos de todos os dados da rede interna para pularmos de servidor.",
        schema: "Tabela: rede\nColunas: id, ip, ping",
        question: "Selecione TODAS (*) as colunas da tabela 'rede'.",
        type: "query", answer: "select * from rede",
        placeholder: "SELECT ...",
        hint: "O SELECT mais famoso de todos: SELECT * FROM tabela."
    },
    {
        title: "NÍVEL 8: O Mínimo Necessário",
        story: "A tabela é muito grande para baixar. Traga apenas os nomes dos servidores.",
        schema: "Tabela: servidores\nColunas: id, nome, ip",
        question: "Selecione APENAS a coluna 'nome' da tabela 'servidores'.",
        type: "query", answer: "select nome from servidores",
        placeholder: "SELECT ...",
        hint: "Substitua o asterisco (*) apenas pelo nome da coluna que você quer trazer."
    },
    {
        title: "NÍVEL 9: Foco no Alvo Principal",
        story: "O alvo que guarda o item lendário tem o ID igual a 7. Traga todos os dados apenas dele.",
        schema: "Tabela: alvos\nColunas: id, nome, perigo",
        question: "Selecione TODAS (*) as colunas da tabela 'alvos' ONDE o 'id' seja igual a 7.",
        type: "query", answer: "select * from alvos where id = 7",
        placeholder: "SELECT ...",
        hint: "Junte o seu SELECT * com a cláusula WHERE para filtrar."
    },
    {
        title: "NÍVEL 10: Apagão de Dados [BOSS BATTLE]",
        story: "O ANTIVÍRUS COMEÇOU A LER A TABELA TEMPORÁRIA! NÃO TEMOS TEMPO PARA APAGAR UM POR UM!",
        schema: "Tabela: logs_temp",
        question: "Escreva a query para DELETAR todos os registros da tabela 'logs_temp' (Dica: apague tudo de uma vez sem usar o WHERE).",
        type: "query", answer: "delete from logs_temp",
        placeholder: "DELETE FROM ...",
        hint: "O comando DELETE sem o WHERE varre todas as linhas da tabela em um único golpe, esvaziando-a.",
        isBoss: true
    },

    // --- FASE 2: MANIPULAÇÃO DE ATRIBUTOS DML (11 a 20) ---
    {
        title: "NÍVEL 11: Injeção Específica",
        story: "O jogo tem muitas colunas escondidas. Vamos criar um perfil definindo apenas o que importa.",
        schema: "Tabela: players\nColunas a preencher: nome, classe",
        question: "INSERIR na tabela 'players', apenas nas colunas (nome, classe), os valores ('ghost', 'sniper').",
        type: "query", answer: "insert into players (nome, classe) values ('ghost', 'sniper')",
        placeholder: "INSERT INTO ...",
        hint: "Especifique as colunas antes da palavra VALUES."
    },
    {
        title: "NÍVEL 12: Hackeando a Economia",
        story: "Nossa conta está zerada. Vamos burlar o saldo da loja.",
        schema: "Tabela: carteira\nColunas: id_player, moedas",
        question: "Atualize a tabela 'carteira' definindo 'moedas' = 9999 onde o 'id_player' for igual a 1.",
        type: "query", answer: "update carteira set moedas = 9999 where id_player = 1",
        placeholder: "UPDATE ...",
        hint: "O comando é UPDATE tabela SET coluna = valor WHERE condicao."
    },
    {
        title: "NÍVEL 13: Upgrades Simultâneos",
        story: "Mude de classe e aumente seu escudo ao mesmo tempo para o combate.",
        schema: "Tabela: status_player\nColunas: id, classe, escudo",
        question: "Atualize a tabela 'status_player' definindo 'classe' = 'tank' e (vírgula) 'escudo' = 1000 onde o 'id' = 1.",
        type: "query", answer: "update status_player set classe = 'tank', escudo = 1000 where id = 1",
        placeholder: "UPDATE ...",
        hint: "Separe as colunas a atualizar com vírgula: SET col1 = val1, col2 = val2."
    },
    {
        title: "NÍVEL 14: Matemática no Banco",
        story: "A loja está muito cara. Cortaremos o preço do item pela metade direto no banco de dados.",
        schema: "Tabela: loja\nColunas: item, preco",
        question: "Atualize a 'loja', definindo 'preco' = preco / 2 ONDE o 'item' for 'pocao'.",
        type: "query", answer: "update loja set preco = preco / 2 where item = 'pocao'",
        placeholder: "UPDATE ...",
        hint: "Você pode referenciar a própria coluna no cálculo: SET preco = preco / 2."
    },
    {
        title: "NÍVEL 15: Anistia Hacker",
        story: "Um dos nossos aliados foi banido do servidor. Remova a punição dele.",
        schema: "Tabela: banimentos\nColunas: nick, motivo",
        question: "Delete os registros da tabela 'banimentos' onde o 'nick' seja igual a 'ghost'.",
        type: "query", answer: "delete from banimentos where nick = 'ghost'",
        placeholder: "DELETE FROM ...",
        hint: "Comando DELETE FROM tabela WHERE condicao.",
        isBoss: true
    },
    {
        title: "NÍVEL 16: Limpando Inventário",
        story: "Seu inventário está cheio de lixo de nível baixo. Vamos apagá-los.",
        schema: "Tabela: inventario\nColunas: item, level",
        question: "Delete da tabela 'inventario' onde o 'item' seja 'lixo' E (AND) o 'level' seja MENOR (<) que 5.",
        type: "query", answer: "delete from inventario where item = 'lixo' and level < 5",
        placeholder: "DELETE FROM ...",
        hint: "Use o operador lógico AND para juntar as duas condições no seu DELETE."
    },
    {
        title: "NÍVEL 17: O Único Leitura",
        story: "Precisamos verificar se o administrador está online antes de darmos o próximo passo.",
        schema: "Tabela: servidores\nColunas: ip, status",
        question: "Selecione TODAS (*) as colunas de 'servidores' onde o 'status' seja 'online'.",
        type: "query", answer: "select * from servidores where status = 'online'",
        placeholder: "SELECT ...",
        hint: "A sintaxe básica do filtro de leitura."
    },
    {
        title: "NÍVEL 18: Caçando os Fortes",
        story: "Não perca tempo com novatos. Queremos apenas as guildas de elite.",
        schema: "Tabela: guildas\nColunas: nome, rank",
        question: "Selecione o 'nome' da tabela 'guildas' onde o 'rank' seja MAIOR (>) que 10.",
        type: "query", answer: "select nome from guildas where rank > 10",
        placeholder: "SELECT ...",
        hint: "Use o sinal matemático > no WHERE."
    },
    {
        title: "NÍVEL 19: O Último da Fila",
        story: "Queremos descobrir qual foi a última pessoa que se conectou.",
        schema: "Tabela: conexoes\nColunas: id, ip",
        question: "Selecione o 'ip' de 'conexoes', ordenando pelo 'id' de forma DECRESCENTE (DESC) e limitando (LIMIT) a 1 linha.",
        type: "query", answer: "select ip from conexoes order by id desc limit 1",
        placeholder: "SELECT ...",
        hint: "Combine o ORDER BY DESC com o LIMIT 1 no final da query."
    },
    {
        title: "NÍVEL 20: Terraplanagem [BOSS BATTLE]",
        story: "O ARQUIVO DE RASTREAMENTO DETECTOU NOSSO PING! DESTRUA A TABELA INTEIRA DA EXISTÊNCIA!",
        schema: "Tabela: rastreador",
        question: "Qual comando estrutural (DDL) apaga/destrói completamente a tabela 'rastreador'?",
        type: "query", answer: "drop table rastreador",
        placeholder: "DROP ...",
        hint: "Comando estrutural de destruição: DROP TABLE nome_tabela.",
        isBoss: true
    },

    // --- FASE 3: CRIAÇÃO E FILTROS LÓGICOS (21 a 30) ---
    {
        title: "NÍVEL 21: O Novo Mundo",
        story: "O servidor deles está sob nosso controle. Vamos criar nossa própria base de dados secreta para guardar o que roubarmos.",
        schema: "Ambiente Global",
        question: "Qual o comando (DDL) para CRIAR um banco de dados chamado 'shadow_net'?",
        type: "query", answer: "create database shadow_net",
        placeholder: "CREATE DATABASE ...",
        hint: "Sintaxe DDL: CREATE DATABASE nome."
    },
    {
        title: "NÍVEL 22: O Espelho",
        story: "Crie uma tabela para espelhar os dados roubados.",
        schema: "Tabela: espelho\nColunas: id (int), nome (varchar)",
        question: "Escreva o comando para CRIAR a tabela 'espelho' com as colunas (id int, nome varchar).",
        type: "query", answer: "create table espelho (id int, nome varchar)",
        placeholder: "CREATE TABLE ...",
        hint: "Sintaxe: CREATE TABLE nome (col1 tipo, col2 tipo)."
    },
    {
        title: "NÍVEL 23: Fortalecendo as Defesas",
        story: "Nossa tabela de defesas precisa de um botão de pânico.",
        schema: "Tabela: defesas\nNova coluna: falha (boolean)",
        question: "Altere a tabela (ALTER TABLE) 'defesas' para adicionar a coluna (ADD COLUMN) 'falha' do tipo 'boolean'.",
        type: "query", answer: "alter table defesas add column falha boolean",
        placeholder: "ALTER TABLE ...",
        hint: "Sintaxe: ALTER TABLE tabela ADD COLUMN coluna tipo."
    },
    {
        title: "NÍVEL 24: Armas Pesadas",
        story: "Precisamos de equipamentos potentes. Sabemos que o nome começa com 'sniper'.",
        schema: "Tabela: armas\nColunas: nome",
        question: "Selecione o 'nome' de 'armas' onde o nome comece com 'sniper' (Use LIKE).",
        type: "query", answer: "select nome from armas where nome like 'sniper%'",
        placeholder: "SELECT ...",
        hint: "No LIKE, use o sinal de % no final da palavra."
    },
    {
        title: "NÍVEL 25: O Fim da Pista",
        story: "Encontre os e-mails dos administradores que terminam com '@admin.com'.",
        schema: "Tabela: contatos\nColunas: email",
        question: "Selecione o 'email' da tabela 'contatos' onde o email termine com '@admin.com'.",
        type: "query", answer: "select email from contatos where email like '%@admin.com'",
        placeholder: "SELECT ...",
        hint: "No LIKE, coloque o % antes da palavra.",
        isBoss: true
    },
    {
        title: "NÍVEL 26: Lacunas no Sistema",
        story: "Muitos bots de segurança foram registrados sem número de série (nulo). Esses são fáceis de desligar.",
        schema: "Tabela: bots\nColunas: id, num_serie",
        question: "Selecione o 'id' da tabela 'bots' onde o 'num_serie' seja nulo/vazio.",
        type: "query", answer: "select id from bots where num_serie is null",
        placeholder: "SELECT ...",
        hint: "Não testamos nulos com '='. Usamos IS NULL."
    },
    {
        title: "NÍVEL 27: Dados Confiáveis",
        story: "Para transferir, o destino precisa ter um certificado validado (não nulo).",
        schema: "Tabela: validos\nColunas: ip, certificado",
        question: "Selecione o 'ip' de 'validos' onde o 'certificado' NÃO seja nulo.",
        type: "query", answer: "select ip from validos where certificado is not null",
        placeholder: "SELECT ...",
        hint: "O inverso da regra anterior é IS NOT NULL."
    },
    {
        title: "NÍVEL 28: Redundância",
        story: "A lista de logs tem setores repetidos. Queremos saber os setores reais de forma limpa.",
        schema: "Tabela: logs\nColunas: setor",
        question: "Selecione APENAS os valores ÚNICOS e sem repetição da coluna 'setor' da tabela 'logs'.",
        type: "query", answer: "select distinct setor from logs",
        placeholder: "SELECT ...",
        hint: "Use a palavra DISTINCT logo após o SELECT."
    },
    {
        title: "NÍVEL 29: Máscara de Anonimato",
        story: "Vamos esconder a coluna 'saldo' mudando o nome de exibição dela.",
        schema: "Tabela: banco\nColunas: saldo",
        question: "Selecione a coluna 'saldo' da tabela 'banco', mas a renomeie na saída para 'moedas' (usando AS).",
        type: "query", answer: "select saldo as moedas from banco",
        placeholder: "SELECT ...",
        hint: "Coloque 'AS novo_nome' depois da coluna."
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

    // --- FASE 4: MATEMÁTICA E AGREGAÇÕES (31 a 40) ---
    {
        title: "NÍVEL 31: O Tamanho do Exército",
        story: "Quantos drones de segurança existem na malha do servidor?",
        schema: "Tabela: drones",
        question: "Use a função agregadora para CONTAR o número total de registros da tabela 'drones'.",
        type: "query", answer: "select count(*) from drones",
        placeholder: "SELECT ...",
        hint: "A função é COUNT(*)."
    },
    {
        title: "NÍVEL 32: O Jogador Supremo",
        story: "Qual é o maior level registrado no servidor do jogo?",
        schema: "Tabela: players\nColunas: level",
        question: "Use a função agregadora para trazer o MÁXIMO da coluna 'level' da tabela 'players'.",
        type: "query", answer: "select max(level) from players",
        placeholder: "SELECT ...",
        hint: "A função é MAX(coluna)."
    },
    {
        title: "NÍVEL 33: A Rota Mais Curta",
        story: "Precisamos do menor tempo de resposta (ping) para enviar os pacotes.",
        schema: "Tabela: rotas\nColunas: ping",
        question: "Use a função agregadora para trazer o MÍNIMO da coluna 'ping' da tabela 'rotas'.",
        type: "query", answer: "select min(ping) from rotas",
        placeholder: "SELECT ...",
        hint: "A função é MIN(coluna)."
    },
    {
        title: "NÍVEL 34: Jackpot",
        story: "Vamos limpar o cofre. Qual o valor total de ouro se somarmos tudo?",
        schema: "Tabela: cofres\nColunas: gold",
        question: "Use a função agregadora para SOMAR toda a coluna 'gold' da tabela 'cofres'.",
        type: "query", answer: "select sum(gold) from cofres",
        placeholder: "SELECT ...",
        hint: "A função é SUM(coluna)."
    },
    {
        title: "NÍVEL 35: O Padrão Inimigo",
        story: "Nossos personagens precisam ter o mesmo dano médio para se camuflar.",
        schema: "Tabela: armas\nColunas: dano",
        question: "Use a função agregadora para calcular a MÉDIA da coluna 'dano' da tabela 'armas'.",
        type: "query", answer: "select avg(dano) from armas",
        placeholder: "SELECT ...",
        hint: "A função é AVG(coluna).",
        isBoss: true
    },
    {
        title: "NÍVEL 36: Contagem de Falhas",
        story: "Quantos relatórios o sistema gerou marcados como alta severidade?",
        schema: "Tabela: falhas\nColunas: severidade",
        question: "Traga a contagem total (COUNT(*)) da tabela 'falhas' onde a 'severidade' for 'alta'.",
        type: "query", answer: "select count(*) from falhas where severidade = 'alta'",
        placeholder: "SELECT ...",
        hint: "Você pode filtrar funções matemáticas usando o WHERE normalmente no final."
    },
    {
        title: "NÍVEL 37: Fragmentação de Tropas",
        story: "Quantos guardas existem distribuídos por cada setor de segurança?",
        schema: "Tabela: guardas\nColunas: setor",
        question: "Traga o 'setor' e a contagem (COUNT(*)) da tabela 'guardas', agrupando a resposta pelo 'setor'.",
        type: "query", answer: "select setor, count(*) from guardas group by setor",
        placeholder: "SELECT ...",
        hint: "Use GROUP BY na coluna de texto no final da query."
    },
    {
        title: "NÍVEL 38: Analisando as Classes",
        story: "Qual o level máximo atingido por cada classe diferente de personagem?",
        schema: "Tabela: players\nColunas: classe, level",
        question: "Traga a 'classe' e o MÁXIMO do 'level' da tabela 'players', agrupando pela 'classe'.",
        type: "query", answer: "select classe, max(level) from players group by classe",
        placeholder: "SELECT ...",
        hint: "Mesma lógica do agrupamento anterior, mas com a função MAX()."
    },
    {
        title: "NÍVEL 39: Ranking de Riqueza",
        story: "Quanto de ouro cada guilda possui somada?",
        schema: "Tabela: cofres\nColunas: guilda, gold",
        question: "Traga a 'guilda' e a SOMA (SUM) do 'gold' da tabela 'cofres', agrupando pela 'guilda'.",
        type: "query", answer: "select guilda, sum(gold) from cofres group by guilda",
        placeholder: "SELECT ...",
        hint: "Aplica-se o SUM e o GROUP BY."
    },
    {
        title: "NÍVEL 40: Zero Absoluto [BOSS BATTLE]",
        story: "OS RASTREADORES ESTÃO LENDO A COLUNA DE IP DOS LOGS! ZERE TODOS OS IPs IMEDIATAMENTE!",
        schema: "Tabela: logs\nColunas: ip",
        question: "Atualize a tabela 'logs' mudando o 'ip' para '0.0.0.0' em TODOS os registros (sem WHERE).",
        type: "query", answer: "update logs set ip = '0.0.0.0'",
        placeholder: "UPDATE ...",
        hint: "Um UPDATE sem WHERE zera a tabela inteira instantaneamente.",
        isBoss: true
    },

    // --- FASE 5: ARQUITETURA E CRUZAMENTOS (41 a 50) ---
    {
        title: "NÍVEL 41: O Elo Perdido (INNER JOIN)",
        story: "Para saber o nome da guilda do jogador, cruze as duas tabelas pela chave de ID.",
        schema: "Tabelas: herois (id_guilda) | guildas (id)",
        question: "Faça um INNER JOIN de tudo (*), cruzando 'herois' com 'guildas' (ON herois.id_guilda = guildas.id).",
        type: "query", answer: "select * from herois inner join guildas on herois.id_guilda = guildas.id",
        placeholder: "SELECT ... INNER JOIN ... ON ...",
        hint: "Sintaxe padrão do cruzamento: SELECT * FROM t1 INNER JOIN t2 ON t1.fk = t2.pk."
    },
    {
        title: "NÍVEL 42: O Elo Filtrado",
        story: "Cruze logs e erros, mas mostre apenas os logs de nível 'critico'.",
        schema: "Tabelas: logs (id_erro, nivel) | erros (id)",
        question: "INNER JOIN de 'logs' com 'erros' (ON logs.id_erro = erros.id) e filtre com WHERE logs.nivel = 'critico'. Selecione tudo (*).",
        type: "query", answer: "select * from logs inner join erros on logs.id_erro = erros.id where logs.nivel = 'critico'",
        placeholder: "SELECT ...",
        hint: "A cláusula WHERE vai sempre no final do comando JOIN."
    },
    {
        title: "NÍVEL 43: Preservando Dados (LEFT JOIN)",
        story: "Traga TODOS os players, mesmo aqueles que ainda não possuem banimento associado.",
        schema: "Tabelas: players (id) | banimentos (id_player)",
        question: "Traga tudo (*) de 'players' fazendo um LEFT JOIN com 'banimentos' (ON players.id = banimentos.id_player).",
        type: "query", answer: "select * from players left join banimentos on players.id = banimentos.id_player",
        placeholder: "SELECT ... LEFT JOIN ...",
        hint: "O LEFT JOIN garante que a primeira tabela não perca linhas se a ligação não existir."
    },
    {
        title: "NÍVEL 44: A Visão Oposta (RIGHT JOIN)",
        story: "Traga TODOS os itens comprados, mesmo aqueles que bugaram e não têm player.",
        schema: "Tabelas: compras (id_item) | itens (id)",
        question: "Traga tudo (*) fazendo um RIGHT JOIN de 'compras' com 'itens' (ON compras.id_item = itens.id).",
        type: "query", answer: "select * from compras right join itens on compras.id_item = itens.id",
        placeholder: "SELECT ... RIGHT JOIN ...",
        hint: "Exatamente a mesma sintaxe, apenas trocando a palavra para RIGHT."
    },
    {
        title: "NÍVEL 45: JOIN com Ordem",
        story: "Liste os players e suas guildas, mas mostre em ordem alfabética do nome do player.",
        schema: "Tabelas: players (id_guilda, nome) | guildas (id, nome)",
        question: "INNER JOIN (ON players.id_guilda = guildas.id) selecionando players.nome e guildas.nome. Finalize com ORDER BY players.nome ASC.",
        type: "query", answer: "select players.nome, guildas.nome from players inner join guildas on players.id_guilda = guildas.id order by players.nome asc",
        placeholder: "SELECT ...",
        hint: "Use o padrão tabela.coluna no SELECT para não gerar erro de ambiguidade.",
        isBoss: true
    },
    {
        title: "NÍVEL 46: Cruzamento Analítico",
        story: "Quantos jogadores existem em cada guilda? Mostre o nome da guilda e a contagem.",
        schema: "Tabelas: players (id_guilda) | guildas (id, nome)",
        question: "INNER JOIN (ON players.id_guilda = guildas.id). Selecione guildas.nome e COUNT(*), agrupando (GROUP BY) por guildas.nome.",
        type: "query", answer: "select guildas.nome, count(*) from players inner join guildas on players.id_guilda = guildas.id group by guildas.nome",
        placeholder: "SELECT ...",
        hint: "Uma combinação de JOIN com GROUP BY."
    },
    {
        title: "NÍVEL 47: A Mega Estrutura",
        story: "Cruze 3 relatórios de rede através dos IPs para descobrir a origem.",
        schema: "Tabelas: log_a (ip), log_b (ip), log_c (ip)",
        question: "Traga tudo (*) com INNER JOIN de log_a com log_b (ON log_a.ip = log_b.ip) e outro INNER JOIN de log_b com log_c (ON log_b.ip = log_c.ip).",
        type: "query", answer: "select * from log_a inner join log_b on log_a.ip = log_b.ip inner join log_c on log_b.ip = log_c.ip",
        placeholder: "SELECT ... INNER JOIN ... INNER JOIN ...",
        hint: "Basta encadear os JOINs um após o outro na mesma linha."
    },
    {
        title: "NÍVEL 48: Limpeza Lógica",
        story: "A polícia chegou no servidor. Apague os players que são level baixo ou já foram banidos.",
        schema: "Tabela: players\nColunas: level, status",
        question: "Delete de 'players' onde o 'level' for MENOR (<) que 5 OU (OR) o 'status' for 'banido'.",
        type: "query", answer: "delete from players where level < 5 or status = 'banido'",
        placeholder: "DELETE ...",
        hint: "Use a cláusula DELETE com um WHERE e um OR."
    },
    {
        title: "NÍVEL 49: Queda da Defesa",
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
        schema: "Banco de Dados Central: omnisec_mainframe",
        question: "Qual é o comando destrutivo final (DDL) para apagar e excluir completamente o banco de dados 'omnisec_mainframe' do mapa?",
        type: "query", answer: "drop database omnisec_mainframe",
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
    document.getElementById('display-team-name').innerText = `${team} (Tempo Final: ${timeString})`;
    
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