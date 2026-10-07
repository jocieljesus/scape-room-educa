// ==========================================
// A MEGA CAMPANHA OMNISEC - 50 NÍVEIS
// ==========================================
const levels = [
    // ==========================================
    // FASE 1: INFILTRAÇÃO BÁSICA (FÁCIL)
    // ==========================================
    {
        title: "NÍVEL 1: Disfarce de Nomes (ALIAS)",
        story: "Conseguimos entrar, mas os dados estão visíveis. Vamos mascarar a coluna de nomes para 'agente' para confundir a segurança.",
        schema: "Tabela: operativos\nColunas: nome, setor",
        question: "Selecione a coluna 'nome' da tabela 'operativos', mas renomeie-a temporariamente (usando AS) para 'agente'.",
        type: "query", answer: "select nome as agente from operativos",
        placeholder: "SELECT ...",
        hint: "Use a palavra AS logo após o nome da coluna para dar um apelido a ela."
    },
    {
        title: "NÍVEL 2: Evitando Duplicações",
        story: "O log de conexões está poluído. Queremos ver quais setores se conectaram, mas sem repetir nomes na lista.",
        schema: "Tabela: conexoes\nColunas: id, setor",
        question: "Escreva a query para selecionar apenas os valores ÚNICOS (sem repetição) da coluna 'setor' da tabela 'conexoes'.",
        type: "query", answer: "select distinct setor from conexoes",
        placeholder: "SELECT ...",
        hint: "A cláusula DISTINCT, colocada logo após o SELECT, remove valores duplicados do resultado."
    },
    {
        title: "NÍVEL 3: Múltiplas Portas (OR)",
        story: "A porta blindada abre se o cargo for da chefia ou se for do esquadrão tático.",
        schema: "Tabela: pessoal\nColunas: nome, cargo",
        question: "Selecione o 'nome' da tabela 'pessoal' onde o 'cargo' seja igual a 'chefe' OU (OR) o 'cargo' seja 'tatico'.",
        type: "query", answer: "select nome from pessoal where cargo = 'chefe' or cargo = 'tatico'",
        placeholder: "SELECT ...",
        hint: "Use a palavra OR no WHERE para que a query aceite a primeira OU a segunda condição."
    },
    {
        title: "NÍVEL 4: A Lista VIP (IN)",
        story: "Existem 3 IDs com passe livre no servidor: 1, 5 e 9. Precisamos interceptar o tráfego deles.",
        schema: "Tabela: trafego\nColunas: ip, id_usuario",
        question: "Selecione o 'ip' da tabela 'trafego' onde o 'id_usuario' esteja DENTRO DA LISTA (IN) 1, 5 e 9.",
        type: "query", answer: "select ip from trafego where id_usuario in (1, 5, 9)",
        placeholder: "SELECT ...",
        hint: "Em vez de usar vários OR, use: WHERE coluna IN (valor1, valor2, valor3)."
    },
    {
        title: "NÍVEL 5: Intervalo Fechado (BETWEEN)",
        story: "Uma transferência suspeita ocorreu de madrugada. Precisamos buscar as transações ocorridas em um intervalo específico.",
        schema: "Tabela: financas\nColunas: valor, hora",
        question: "Selecione o 'valor' da tabela 'financas' onde a 'hora' esteja ENTRE (BETWEEN) 2 e 4.",
        type: "query", answer: "select valor from financas where hora between 2 and 4",
        placeholder: "SELECT ...",
        hint: "Sintaxe: WHERE coluna BETWEEN valor1 AND valor2."
    },
    {
        title: "NÍVEL 6: Minúsculas (LOWER)",
        story: "O sistema de validação da OmniSec é sensível a maiúsculas (Case Sensitive). Precisamos converter a chave interceptada.",
        schema: "Tabela: senhas_brutas\nColunas: chave_original (Texto: 'OmNiSec_RoOt')",
        question: "Use a função LOWER() para selecionar a coluna 'chave_original' convertida inteiramente para letras minúsculas da tabela 'senhas_brutas'.",
        type: "query", answer: "select lower(chave_original) from senhas_brutas",
        placeholder: "SELECT ...",
        hint: "Basta envolver o nome da coluna na função: LOWER(nome_da_coluna)."
    },
    {
        title: "NÍVEL 7: Maiúsculas (UPPER)",
        story: "O painel de LED do cofre só aceita caracteres em caixa alta.",
        schema: "Tabela: painel\nColunas: mensagem",
        question: "Use a função UPPER() para selecionar a coluna 'mensagem' totalmente em maiúsculas da tabela 'painel'.",
        type: "query", answer: "select upper(mensagem) from painel",
        placeholder: "SELECT ...",
        hint: "Assim como o LOWER, envolva a coluna na função: UPPER(nome_da_coluna)."
    },
    {
        title: "NÍVEL 8: Tamanho da Criptografia (LENGTH)",
        story: "Precisamos descobrir quantos caracteres tem a chave mestre para preparar o ataque de força bruta.",
        schema: "Tabela: cofre\nColunas: hash_mestre",
        question: "Use a função LENGTH() para descobrir o tamanho (quantidade de caracteres) da coluna 'hash_mestre' na tabela 'cofre'.",
        type: "query", answer: "select length(hash_mestre) from cofre",
        placeholder: "SELECT ...",
        hint: "Sintaxe: SELECT LENGTH(nome_da_coluna) FROM tabela."
    },
    {
        title: "NÍVEL 9: Os Excluídos (NOT IN)",
        story: "Precisamos de uma lista de todos os setores para atacar, exceto 'limpeza' e 'copa'.",
        schema: "Tabela: mapa\nColunas: setor, andar",
        question: "Selecione a coluna 'setor' da tabela 'mapa' onde o 'setor' NÃO ESTEJA NA LISTA (NOT IN) 'limpeza' e 'copa'.",
        type: "query", answer: "select setor from mapa where setor not in ('limpeza', 'copa')",
        placeholder: "SELECT ...",
        hint: "Funciona igual ao IN, mas inverte a lógica: WHERE coluna NOT IN ('valor1', 'valor2')."
    },
    {
        title: "NÍVEL 10: Esvaziamento Rápido [BOSS BATTLE]",
        story: "ALERTA! A segurança está extraindo os logs um a um (DELETE)! Precisamos esvaziar a tabela inteira instantaneamente, resetando até as chaves primárias!",
        schema: "Tabela: rastreio_log",
        question: "Qual o comando DDL ultrarrápido para esvaziar completamente (truncar) todos os dados da tabela 'rastreio_log' (sem apagá-la)?",
        type: "query", answer: "truncate table rastreio_log",
        placeholder: "TRUNCATE ...",
        hint: "Não é DROP nem DELETE. Use TRUNCATE TABLE nome_da_tabela.",
        isBoss: true
    },
    {
        title: "NÍVEL 11: A Regra do Não-Nulo",
        story: "Existem portas falsas no sistema sem endereço IP. Precisamos ignorá-las.",
        schema: "Tabela: roteadores\nColunas: nome, ip",
        question: "Selecione o 'nome' da tabela 'roteadores' onde a coluna 'ip' NÃO SEJA NULA (IS NOT NULL).",
        type: "query", answer: "select nome from roteadores where ip is not null",
        placeholder: "SELECT ...",
        hint: "Para checar se algo tem dados (não é nulo), use: WHERE coluna IS NOT NULL."
    },
    {
        title: "NÍVEL 12: Paginação de Dados (OFFSET)",
        story: "A lista de suspeitos tem 1000 nomes. Já vimos os 5 primeiros, precisamos pular (offset) eles e pegar apenas os próximos 5.",
        schema: "Tabela: suspeitos\nColunas: nome",
        question: "Selecione o 'nome' da tabela 'suspeitos', limitando a 5 linhas (LIMIT 5), mas pulando as 5 primeiras (OFFSET 5).",
        type: "query", answer: "select nome from suspeitos limit 5 offset 5",
        placeholder: "SELECT ...",
        hint: "Coloque LIMIT X OFFSET Y no final da query."
    },
    {
        title: "NÍVEL 13: Matemática Direta",
        story: "O MySQL não serve apenas para tabelas. Podemos usá-lo como calculadora. Qual a senha gerada pelo algoritmo matemático abaixo?",
        schema: "Sistema local de processamento.",
        question: "Se você executar a query direta: SELECT (50 * 2) + 10; qual será o resultado exato na tela?",
        type: "output", answer: "110",
        placeholder: "Digite o resultado",
        hint: "Resolva a matemática básica: multiplique primeiro, some depois."
    },
    {
        title: "NÍVEL 14: Sincronização de Relógio (NOW)",
        story: "Nosso script de invasão precisa saber a data e a hora exata do servidor da OmniSec para burlar os tokens temporais.",
        schema: "Função de Data e Hora.",
        question: "Qual função simples do MySQL você executa no SELECT (sem FROM) para retornar a data e hora atual do sistema?",
        type: "query", answer: "select now()",
        placeholder: "SELECT ...",
        hint: "A função NOW() retorna a data e hora atual."
    },
    {
        title: "NÍVEL 15: O Resto da Divisão (MOD)",
        story: "A criptografia usa o resto da divisão. O servidor tem ID 10 e será dividido pela chave 3.",
        schema: "Calculadora SQL.",
        question: "Se você executar SELECT 10 MOD 3; (ou SELECT 10 % 3;), qual número será retornado?",
        type: "output", answer: "1",
        placeholder: "Digite o resultado",
        hint: "O MOD (ou %) pega o resto de uma divisão. 10 dividido por 3 dá 9. Quanto sobra para chegar a 10?"
    },
    // ==========================================
    // FASE 2: MANIPULAÇÃO AVANÇADA (MÉDIO)
    // ==========================================
    {
        title: "NÍVEL 16: O Custo da Invasão (SUM)",
        story: "Descobrimos a tabela de orçamento da OmniGuard. Vamos ver quanto dinheiro eles gastaram para tentar nos parar.",
        schema: "Tabela: defesas\nColunas: nome_defesa, custo_milhoes",
        question: "Use a função agregadora SUM() para somar a coluna 'custo_milhoes' da tabela 'defesas'.",
        type: "query", answer: "select sum(custo_milhoes) from defesas",
        placeholder: "SELECT ...",
        hint: "Sintaxe: SELECT SUM(coluna) FROM tabela."
    },
    {
        title: "NÍVEL 17: A Média de Idade (AVG)",
        story: "Precisamos criar perfis falsos convincentes. Qual é a média de idade dos funcionários de lá?",
        schema: "Tabela: empregados\nColunas: nome, idade",
        question: "Use a função agregadora AVG() para calcular a média da coluna 'idade' na tabela 'empregados'.",
        type: "query", answer: "select avg(idade) from empregados",
        placeholder: "SELECT ...",
        hint: "AVG vem de Average (Média). Sintaxe igual ao SUM e COUNT."
    },
    {
        title: "NÍVEL 18: O Curinga Exato (LIKE _)",
        story: "Sabemos que a chave de acesso tem exatamente 4 letras, começa com 'A' e termina com 'Z'.",
        schema: "Tabela: senhas\nColunas: id, codigo",
        question: "Selecione o 'codigo' da tabela 'senhas' usando LIKE onde o código comece com 'a', termine com 'z' e tenha exatamente 2 caracteres desconhecidos no meio (use o underline _).",
        type: "query", answer: "select codigo from senhas where codigo like 'a__z'",
        placeholder: "SELECT ...",
        hint: "O % significa 'qualquer quantidade', mas o _ (underline) significa 'exatamente UM caractere'."
    },
    {
        title: "NÍVEL 19: Ordem Dupla",
        story: "A extração de dados exige precisão. Precisamos da lista ordenada pelo andar, e depois pelo nome.",
        schema: "Tabela: salas\nColunas: andar, nome_sala",
        question: "Selecione TODAS as colunas da tabela 'salas', ordenando primeiro por 'andar' (Crescente - ASC) e DEPOIS por 'nome_sala' (Decrescente - DESC).",
        type: "query", answer: "select * from salas order by andar asc, nome_sala desc",
        placeholder: "SELECT ...",
        hint: "Você pode colocar mais de uma coluna no ORDER BY separando com vírgulas."
    },
    {
        title: "NÍVEL 20: Falsificação de Dados [BOSS BATTLE]",
        story: "O ADMIN ESTÁ OLHANDO OS LOGS! Rápido! Altere todos os IPs que começam com '192' para '000' diretamente na saída da query para enganá-lo!",
        schema: "Tabela: acessos\nColunas: ip_real",
        question: "Use a função REPLACE() para selecionar a coluna 'ip_real' da tabela 'acessos', substituindo o texto '192' pelo texto '000'.",
        type: "query", answer: "select replace(ip_real, '192', '000') from acessos",
        placeholder: "SELECT ...",
        hint: "Sintaxe: REPLACE(coluna, 'texto_antigo', 'texto_novo').",
        isBoss: true
    },
    {
        title: "NÍVEL 21: Atualização Matemática",
        story: "Nós entramos no sistema financeiro. Vamos aumentar nosso bônus de intrusão.",
        schema: "Tabela: pagamentos\nColunas: hacker_id, saldo",
        question: "Atualize (UPDATE) a tabela 'pagamentos' definindo o 'saldo' como ele mesmo MAIS (+) 1000, onde 'hacker_id' for igual a 1.",
        type: "query", answer: "update pagamentos set saldo = saldo + 1000 where hacker_id = 1",
        placeholder: "UPDATE ...",
        hint: "No SQL, você pode usar a própria coluna no cálculo: SET coluna = coluna + valor."
    },
    {
        title: "NÍVEL 22: O Valor Padrão (COALESCE)",
        story: "Se não tivermos um IP secundário gravado, o sistema quebra. Precisamos forçar um valor padrão caso seja NULO.",
        schema: "Tabela: rotas\nColunas: id, ip_secundario",
        question: "Use a função COALESCE() para selecionar o 'ip_secundario' da tabela 'rotas', mas se ele for NULO, retorne '0.0.0.0'.",
        type: "query", answer: "select coalesce(ip_secundario, '0.0.0.0') from rotas",
        placeholder: "SELECT ...",
        hint: "COALESCE(coluna, 'valor_padrao') retorna o primeiro valor não-nulo que encontrar."
    },
    {
        title: "NÍVEL 23: Agrupamento Duplo",
        story: "A matriz de guardas é complexa. Precisamos contar quantos existem por departamento E por turno.",
        schema: "Tabela: escala\nColunas: departamento, turno, nome",
        question: "Selecione 'departamento', 'turno' e COUNT(*), agrupando (GROUP BY) por 'departamento' E por 'turno' (nesta ordem).",
        type: "query", answer: "select departamento, turno, count(*) from escala group by departamento, turno",
        placeholder: "SELECT ...",
        hint: "Coloque os dois campos separados por vírgula no SELECT e repita os dois no GROUP BY."
    },
    {
        title: "NÍVEL 24: Limpeza Temporal",
        story: "O banco está cheio. Apague apenas os logs do ano passado.",
        schema: "Tabela: temp_logs\nColunas: data_log",
        question: "Dele a tabela 'temp_logs' onde a coluna 'data_log' seja MENOR (<) que a string de data '2026-01-01'.",
        type: "query", answer: "delete from temp_logs where data_log < '2026-01-01'",
        placeholder: "DELETE FROM ...",
        hint: "O SQL entende datas como strings formato 'YYYY-MM-DD'. Pode usar < direto."
    },
    {
        title: "NÍVEL 25: Inserção Múltipla",
        story: "Podemos economizar tempo injetando dois vírus (registros) na mesma query.",
        schema: "Tabela: malwares\nColunas: nome_virus",
        question: "Escreva UM ÚNICO INSERT INTO na tabela 'malwares' na coluna (nome_virus) inserindo dois valores de uma vez: ('trojan') e ('worm').",
        type: "query", answer: "insert into malwares (nome_virus) values ('trojan'), ('worm')",
        placeholder: "INSERT INTO ...",
        hint: "VALUES (registro1), (registro2)."
    },
    {
        title: "NÍVEL 26: Contagem de Únicos",
        story: "Temos mil acessos no log, mas sabemos que muitos são do mesmo IP. Quantos IPs diferentes nos atacaram?",
        schema: "Tabela: acessos\nColunas: ip",
        question: "Use a função COUNT() em conjunto com DISTINCT para contar apenas os 'ip' únicos da tabela 'acessos'.",
        type: "query", answer: "select count(distinct ip) from acessos",
        placeholder: "SELECT ...",
        hint: "Coloque o DISTINCT dentro dos parênteses do COUNT: COUNT(DISTINCT coluna)."
    },
    {
        title: "NÍVEL 27: Fatiando a Esquerda (LEFT)",
        story: "A senha do cofre principal é apenas as 4 primeiras letras do hash mestre.",
        schema: "Tabela: cofre\nColunas: hash_mestre",
        question: "Use a função LEFT() para selecionar apenas os 4 primeiros caracteres (à esquerda) da coluna 'hash_mestre' da tabela 'cofre'.",
        type: "query", answer: "select left(hash_mestre, 4) from cofre",
        placeholder: "SELECT ...",
        hint: "Sintaxe: SELECT LEFT(coluna, quantidade_de_letras)."
    },
    {
        title: "NÍVEL 28: Fatiando a Direita (RIGHT)",
        story: "A segunda parte da senha são os últimos 3 números do ID de lote.",
        schema: "Tabela: lotes\nColunas: id_lote",
        question: "Use a função RIGHT() para selecionar apenas os 3 últimos caracteres (à direita) da coluna 'id_lote' da tabela 'lotes'.",
        type: "query", answer: "select right(id_lote, 3) from lotes",
        placeholder: "SELECT ...",
        hint: "Mesma lógica do LEFT, mas pegando do final da string."
    },
    {
        title: "NÍVEL 29: O Inverso do Filtro",
        story: "Precisamos de todos os dados da tabela, MENOS os da equipe Alpha.",
        schema: "Tabela: equipes\nColunas: id, nome_equipe",
        question: "Usando a cláusula NOT (antes do operador de igualdade não funciona, inverta a lógica), selecione TODOS (*) da tabela 'equipes' onde o nome_equipe seja diferente de 'Alpha' usando a palavra NOT.",
        type: "query", answer: "select * from equipes where not nome_equipe = 'alpha'",
        placeholder: "SELECT ...",
        hint: "Você pode escrever: WHERE NOT nome_equipe = 'alpha'."
    },
    {
        title: "NÍVEL 30: Reforma DDL [BOSS BATTLE]",
        story: "O ADMIN TENTOU NOS BLOQUEAR PROCURANDO A COLUNA 'ip_hacker'! Renomeie a coluna agora para ele não encontrar nada!",
        schema: "Tabela: rastreio\nColuna atual: ip_hacker",
        question: "Qual o comando (ALTER TABLE) para renomear (RENAME COLUMN) a coluna 'ip_hacker' para 'ip_comum' na tabela 'rastreio'?",
        type: "query", answer: "alter table rastreio rename column ip_hacker to ip_comum",
        placeholder: "ALTER TABLE ...",
        hint: "Sintaxe DDL do MySQL 8.0+: ALTER TABLE tabela RENAME COLUMN nome_velho TO nome_novo.",
        isBoss: true
    },
    // ==========================================
    // FASE 3: ENGENHARIA DE DADOS (DIFÍCIL)
    // ==========================================
    {
        title: "NÍVEL 31: Dados Fantasmas (LEFT JOIN)",
        story: "Precisamos listar TODOS os funcionários, mesmo os que não têm nenhum acesso cadastrado.",
        schema: "Tabelas: funcionarios (id, nome) | acessos (id_func, nivel)",
        question: "Escreva um LEFT JOIN trazendo TODAS (*) as colunas de 'funcionarios' (à esquerda) e cruzando com 'acessos' na chave funcionarios.id = acessos.id_func.",
        type: "query", answer: "select * from funcionarios left join acessos on funcionarios.id = acessos.id_func",
        placeholder: "SELECT ...",
        hint: "O LEFT JOIN garante que a tabela da esquerda (funcionarios) sempre exiba todos os registros."
    },
    {
        title: "NÍVEL 32: Encontrando as Falhas",
        story: "Houve uma falha. Alguns funcionários foram cadastrados SEM cartão de acesso físico. Vamos encontrá-los.",
        schema: "Tabelas: funcionarios (id, nome) | cartoes (id_func, codigo)",
        question: "Faça o mesmo LEFT JOIN anterior entre funcionarios e cartoes, mas adicione um filtro: WHERE cartoes.id_func IS NULL.",
        type: "query", answer: "select * from funcionarios left join cartoes on funcionarios.id = cartoes.id_func where cartoes.id_func is null",
        placeholder: "SELECT ...",
        hint: "Este é o clássico 'LEFT JOIN EXCLUSIVO' para achar registros órfãos."
    },
    {
        title: "NÍVEL 33: A Inversão (RIGHT JOIN)",
        story: "Agora queremos ver TODOS os cartões criados, mesmo que não estejam associados a nenhum funcionário (Cartões avulsos).",
        schema: "Tabelas: funcionarios (id, nome) | cartoes (id_func, codigo)",
        question: "Escreva um RIGHT JOIN trazendo TODAS (*) as colunas, com 'funcionarios' à esquerda e 'cartoes' à direita (funcionarios.id = cartoes.id_func).",
        type: "query", answer: "select * from funcionarios right join cartoes on funcionarios.id = cartoes.id_func",
        placeholder: "SELECT ...",
        hint: "Mesma estrutura do LEFT JOIN, mas use RIGHT JOIN para priorizar a tabela 2."
    },
    {
        title: "NÍVEL 34: Unindo Forças (UNION)",
        story: "Temos duas tabelas de logs diferentes (servidor A e B). Precisamos de uma lista única de IPs.",
        schema: "Tabelas: log_a (ip), log_b (ip)",
        question: "Use o operador UNION para juntar o resultado de (SELECT ip FROM log_a) com o de (SELECT ip FROM log_b).",
        type: "query", answer: "select ip from log_a union select ip from log_b",
        placeholder: "SELECT ... UNION ...",
        hint: "O UNION junta os resultados verticalmente e remove os IPs duplicados automaticamente."
    },
    {
        title: "NÍVEL 35: União Completa (UNION ALL)",
        story: "A polícia cibernética está contando os IPs. Precisamos da união das tabelas, mas AGORA mantendo as duplicatas para o número parecer maior.",
        schema: "Tabelas: log_a (ip), log_b (ip)",
        question: "Faça a mesma query do nível anterior, mas use UNION ALL para manter as repetições.",
        type: "query", answer: "select ip from log_a union all select ip from log_b",
        placeholder: "SELECT ... UNION ALL ...",
        hint: "O UNION ALL é muito mais rápido que o UNION pois não gasta tempo removendo duplicatas."
    },
    {
        title: "NÍVEL 36: Subquery no SELECT",
        story: "Precisamos listar os nomes dos recrutas e comparar a nota deles com a nota máxima de toda a academia na mesma linha.",
        schema: "Tabela: notas\nColunas: nome, nota",
        question: "Selecione o 'nome', e como segunda coluna crie uma subquery: (SELECT MAX(nota) FROM notas). Tudo isso FROM notas.",
        type: "query", answer: "select nome, (select max(nota) from notas) from notas",
        placeholder: "SELECT nome, (...) FROM ...",
        hint: "Você pode executar um SELECT independente dentro dos parênteses como se fosse uma coluna."
    },
    {
        title: "NÍVEL 37: Lógica Condicional (CASE WHEN)",
        story: "O banco de dados não diz se é bom ou ruim, apenas tem o nível. Vamos classificar na força bruta.",
        schema: "Tabela: ameacas\nColunas: nivel",
        question: "Escreva a query: SELECT CASE WHEN nivel > 5 THEN 'alto' ELSE 'baixo' END FROM ameacas.",
        type: "query", answer: "select case when nivel > 5 then 'alto' else 'baixo' end from ameacas",
        placeholder: "SELECT CASE WHEN ...",
        hint: "O CASE WHEN é o 'IF/ELSE' do banco de dados."
    },
    {
        title: "NÍVEL 38: Update Condicional",
        story: "Se a porta for a principal (id=1), tranque (status=0). Senão, destranque (status=1). Tudo num comando só.",
        schema: "Tabela: portas\nColunas: id, status",
        question: "UPDATE portas SET status = CASE WHEN id = 1 THEN 0 ELSE 1 END.",
        type: "query", answer: "update portas set status = case when id = 1 then 0 else 1 end",
        placeholder: "UPDATE ...",
        hint: "Copie exatamente o comando da pergunta para entender como o MySQL processa IFs num Update."
    },
    {
        title: "NÍVEL 39: O Triplo Cruzamento (3 Tabelas)",
        story: "O desafio arquitetural. Para saber quem abriu o cofre, precisamos ligar o Usuário ao Cartão, e o Cartão à Fechadura.",
        schema: "Tabelas (FKs): usuarios (id_u), cartoes (id_c, id_u), fechaduras (id_f, id_c)",
        question: "SELECT * FROM usuarios INNER JOIN cartoes ON usuarios.id_u = cartoes.id_u INNER JOIN fechaduras ON cartoes.id_c = fechaduras.id_c.",
        type: "query", answer: "select * from usuarios inner join cartoes on usuarios.id_u = cartoes.id_u inner join fechaduras on cartoes.id_c = fechaduras.id_c",
        placeholder: "SELECT ... INNER JOIN ... INNER JOIN ...",
        hint: "Basta encadear os JOINs sucessivamente."
    },
    {
        title: "NÍVEL 40: Criação Rápida [BOSS BATTLE]",
        story: "ELES APAGARAM A TABELA DO NOSSO HACK! RECONSTRUA A TABELA IMEDIATAMENTE ANTES QUE O SISTEMA DÊ CRASH!",
        schema: "Estrutura exigida: tabela 'clones' com coluna 'id' do tipo INT.",
        question: "Escreva a instrução DDL exata: CREATE TABLE clones (id INT).",
        type: "query", answer: "create table clones (id int)",
        placeholder: "CREATE TABLE ...",
        hint: "Sintaxe: CREATE TABLE nome (coluna TIPO).",
        isBoss: true
    },
    {
        title: "NÍVEL 41: O Operador de Existência (EXISTS)",
        story: "A query fica lenta se verificarmos dados. Vamos apenas checar se a linha EXISTE para confirmar o roubo.",
        schema: "Tabela: log_roubo\nColunas: ip",
        question: "Selecione o 'ip' da tabela 'log_roubo' ONDE EXISTIR (WHERE EXISTS) o registro na subquery (SELECT 1 FROM log_roubo WHERE ip='1.1.1.1').",
        type: "query", answer: "select ip from log_roubo where exists (select 1 from log_roubo where ip='1.1.1.1')",
        placeholder: "SELECT ... WHERE EXISTS (...)",
        hint: "O EXISTS retorna True e interrompe a busca na primeira vez que achar algo, poupando processamento."
    },
    {
        title: "NÍVEL 42: Restrição de Integridade (UNIQUE)",
        story: "Para evitar que criem outro usuário com nosso nome, vamos travar a coluna de login no banco de dados.",
        schema: "Tabela: contas",
        question: "Escreva o comando ALTER TABLE contas ADD UNIQUE (login). Isso impedirá logins duplicados.",
        type: "query", answer: "alter table contas add unique (login)",
        placeholder: "ALTER TABLE ...",
        hint: "Adicionar restrições (Constraints) garante a saúde do banco."
    },
    {
        title: "NÍVEL 43: Acelerador (CREATE INDEX)",
        story: "O banco de dados tem 50 milhões de linhas. Nosso script está dando Timeout (Timeout_Error). Crie um índice para acelerar a busca!",
        schema: "Tabela: big_data\nColuna para indexar: cpf",
        question: "Crie um índice chamado 'idx_cpf' na tabela 'big_data' para a coluna 'cpf'. (CREATE INDEX idx_cpf ON big_data(cpf)).",
        type: "query", answer: "create index idx_cpf on big_data(cpf)",
        placeholder: "CREATE INDEX ...",
        hint: "Os Índices (Indexes) funcionam como o sumário de um livro: a busca fica instantânea."
    },
    {
        title: "NÍVEL 44: Destruindo o Acelerador",
        story: "A OmniSec usou nosso próprio índice contra nós para rastrear nossas queries. Destrua o índice!",
        schema: "Tabela: big_data\nÍndice criado: idx_cpf",
        question: "Derrube (DROP INDEX) o índice 'idx_cpf' da tabela 'big_data'.",
        type: "query", answer: "drop index idx_cpf on big_data",
        placeholder: "DROP INDEX ...",
        hint: "Sintaxe DDL: DROP INDEX nome_do_indice ON tabela."
    },
    {
        title: "NÍVEL 45: A Janela Falsa (CREATE VIEW)",
        story: "Para o sistema não perceber o roubo, vamos criar uma Visão (View) falsa que oculta as colunas sensíveis.",
        schema: "Query da visão: SELECT id FROM usuarios",
        question: "Crie uma VIEW chamada 'tela_falsa' AS SELECT id FROM usuarios.",
        type: "query", answer: "create view tela_falsa as select id from usuarios",
        placeholder: "CREATE VIEW ...",
        hint: "Uma View é uma tabela virtual baseada em uma Query."
    },
    {
        title: "NÍVEL 46: Limpando a Visão",
        story: "A investigação começou. Derrube a View que criamos para apagar os vestígios.",
        schema: "View: tela_falsa",
        question: "Qual o comando DDL para deletar a view 'tela_falsa'?",
        type: "query", answer: "drop view tela_falsa",
        placeholder: "DROP VIEW ...",
        hint: "Assim como Drop Table e Drop Index, use DROP VIEW nome."
    },
    {
        title: "NÍVEL 47: Remoção de Privilégios (REVOKE)",
        story: "Estamos no controle do servidor. O usuário do administrador original da OmniSec se chama 'admin'. Remova o poder dele de dar UPDATE.",
        schema: "Usuário: 'admin'@'localhost'",
        question: "REVOKE UPDATE ON *.* FROM 'admin'@'localhost'.",
        type: "query", answer: "revoke update on *.* from 'admin'@'localhost'",
        placeholder: "REVOKE ...",
        hint: "O comando REVOKE retira permissões. O *.* significa todos os bancos e tabelas."
    },
    {
        title: "NÍVEL 48: Subquery Complexa (Maior que a Média)",
        story: "A OmniSec transferiu o dinheiro das contas que têm mais saldo que a média do banco.",
        schema: "Tabela: contas\nColunas: id, saldo",
        question: "Selecione o 'id' da tabela 'contas' WHERE 'saldo' seja MAIOR (>) que (SELECT AVG(saldo) FROM contas).",
        type: "query", answer: "select id from contas where saldo > (select avg(saldo) from contas)",
        placeholder: "SELECT ... WHERE ... > (SELECT ...)",
        hint: "Subqueries matemáticas são extremamente usadas para relatórios de Business Intelligence."
    },
    {
        title: "NÍVEL 49: O Fim do Root",
        story: "A Inteligência Artificial central está quase nos rastreando fisicamente. Apague a existência do nosso usuário infiltrado.",
        schema: "Usuário atual no SGBD: 'neo'@'localhost'",
        question: "Use o comando DROP USER para extinguir o usuário 'neo'@'localhost'.",
        type: "query", answer: "drop user 'neo'@'localhost'",
        placeholder: "DROP USER ...",
        hint: "A sintaxe exige as aspas no nome e no host: DROP USER 'usuario'@'host'."
    },
    {
        title: "NÍVEL 50: DESTRUIÇÃO MUTUAMENTE ASSEGURADA [FINAL BOSS]",
        story: "ELES NOS CERCAM! NÃO HÁ MAIS SAÍDA! Puxe o gatilho. Destrua o SGBD inteiro. Apague TODAS AS EVIDÊNCIAS DESTE MUNDO!",
        schema: "Banco de dados: omnisec_mainframe",
        question: "Qual o comando DDL derradeiro para excluir o banco de dados 'omnisec_mainframe' para todo o sempre?",
        type: "query", answer: "drop database omnisec_mainframe",
        placeholder: "DROP ...",
        hint: "O comando mais perigoso do SQL, que só um DBA Master utiliza: DROP DATABASE.",
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
        startBossTimer(180); // 3 minutos
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