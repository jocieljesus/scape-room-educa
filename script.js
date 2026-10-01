// Array contendo os 15 desafios
const levels = [
    {
        title: "NÍVEL 1: O Início",
        story: "Conseguimos acesso ao terminal. Precisamos descobrir a senha do root no banco.",
        schema: "Tabela: config_db\nColunas: id (INT), chave (VARCHAR), valor (VARCHAR)",
        question: "Sabendo que existe um registro com chave='senha_root' e valor='mysql_master', qual seria a saída se você executasse SELECT valor FROM config_db WHERE chave='senha_root'?",
        type: "output", // Resposta é uma palavra/senha
        answer: "mysql_master",
        placeholder: "Digite a senha encontrada"
    },
    {
        title: "NÍVEL 2: Varredura Básica",
        story: "A porta está trancada digitalmente. Precisamos listar todos os dados da tabela de funcionários do departamento de TI.",
        schema: "Tabela: funcionarios\nColunas: id, nome, cargo, departamento",
        question: "Escreva a query que seleciona TODAS (*) as colunas da tabela funcionarios onde o departamento seja igual a 'TI'.",
        type: "query", // Resposta é uma query SQL
        answer: "select * from funcionarios where departamento = 'ti'",
        placeholder: "SELECT ..."
    },
    {
        title: "NÍVEL 3: Contagem de Falhas",
        story: "Eles estão monitorando nossas tentativas. Precisamos saber quantos logs de erro existem.",
        schema: "Tabela: logs_acesso\nColunas: id, ip, status (Pode ser 'SUCESSO' ou 'FALHA')",
        question: "Escreva a query usando uma função de agregação para contar (COUNT) todos os registros onde status = 'FALHA'.",
        type: "query",
        answer: "select count(*) from logs_acesso where status = 'falha'",
        placeholder: "SELECT ..."
    },
    {
        title: "NÍVEL 4: Limite de Busca",
        story: "Precisamos do IP do último cara que invadiu esse sistema. O banco ordena os logs do mais antigo para o mais novo pelo ID.",
        schema: "Tabela: logs_acesso\nColunas: id, ip, data_hora",
        question: "Escreva uma query para buscar apenas a coluna 'ip' da tabela logs_acesso, ordenada pelo 'id' de forma decrescente, limitando o resultado a 1 linha.",
        type: "query",
        answer: "select ip from logs_acesso order by id desc limit 1",
        placeholder: "SELECT ..."
    },
    {
        title: "NÍVEL 5: Criação de Backdoor",
        story: "Precisamos criar nosso próprio usuário administrador para garantir nosso acesso permanente.",
        schema: "Tabela: usuarios_admin\nColunas: id (Auto Increment), username, nivel_acesso",
        question: "Escreva a query para inserir na tabela usuarios_admin, nas colunas (username, nivel_acesso), os valores ('neo', 'root').",
        type: "query",
        answer: "insert into usuarios_admin (username, nivel_acesso) values ('neo', 'root')",
        placeholder: "INSERT INTO ..."
    },
    {
        title: "NÍVEL 6: Desativando o Alarme",
        story: "O alarme disparou! Há uma tabela controlando as sirenes. Mude o status.",
        schema: "Tabela: alarmes\nColunas: id_alarme, local, status ('LIGADO' ou 'DESLIGADO')",
        question: "Escreva a query para atualizar (UPDATE) a tabela alarmes, definindo status = 'DESLIGADO' onde o local = 'servidor_principal'.",
        type: "query",
        answer: "update alarmes set status = 'desligado' where local = 'servidor_principal'",
        placeholder: "UPDATE ..."
    },
    {
        title: "NÍVEL 7: Manipulação de Estrutura (DDL)",
        story: "O banco não permite que a gente delete registros porque falta uma coluna de permissão especial.",
        schema: "Tabela: permissoes_globais\nObjetivo: Adicionar uma coluna chamada 'forcar_exclusao' do tipo BOOLEAN.",
        question: "Qual comando altera (ALTER) a tabela permissoes_globais para adicionar a coluna forcar_exclusao do tipo BOOLEAN?",
        type: "query",
        answer: "alter table permissoes_globais add column forcar_exclusao boolean",
        placeholder: "ALTER TABLE ..."
    },
    {
        title: "NÍVEL 8: Operador LIKE",
        story: "A senha do cofre está escondida na descrição de algum arquivo. Sabemos que a descrição termina com a palavra 'secreto'.",
        schema: "Tabela: arquivos_confidenciais\nColunas: id, nome_arquivo, descricao",
        question: "Escreva a query para selecionar o 'nome_arquivo' da tabela arquivos_confidenciais onde a descrição termine com 'secreto'.",
        type: "query",
        answer: "select nome_arquivo from arquivos_confidenciais where descricao like '%secreto'",
        placeholder: "SELECT ..."
    },
    {
        title: "NÍVEL 9: Apagando os Rastros",
        story: "Nossos IPs ficaram registrados na tabela de firewall. Precisamos sumir com eles.",
        schema: "Tabela: firewall_logs\nColunas: id, ip_origem, data_bloqueio",
        question: "Escreva a query para deletar (DELETE) os registros da tabela firewall_logs onde o ip_origem for '192.168.0.100'.",
        type: "query",
        answer: "delete from firewall_logs where ip_origem = '192.168.0.100'",
        placeholder: "DELETE FROM ..."
    },
    {
        title: "NÍVEL 10: Cruzamento de Dados (INNER JOIN)",
        story: "O acesso físico ao cofre exige a combinação dos dados de catracas e funcionários.",
        schema: "Tabelas: catracas (id, id_funcionario, local) | funcionarios (id, nome)\nQueremos saber o nome de quem passou pela catraca.",
        question: "Escreva o INNER JOIN que seleciona todas as colunas ligando 'catracas' com 'funcionarios' utilizando 'id_funcionario' e 'id'. (Dica: ... FROM catracas INNER JOIN funcionarios ON ...)",
        type: "query",
        answer: "select * from catracas inner join funcionarios on catracas.id_funcionario = funcionarios.id",
        placeholder: "SELECT ..."
    },
    {
        title: "NÍVEL 11: O Enigma Matemático do JOIN",
        story: "Para calibrar o software de invasão, precisamos testar a teoria de banco de dados.",
        schema: "Tabela A tem 5 linhas. Tabela B tem 10 linhas.",
        question: "Se executarmos um CROSS JOIN (produto cartesiano) entre a Tabela A e a Tabela B, quantas linhas o resultado terá?",
        type: "output",
        answer: "50",
        placeholder: "Digite apenas o número"
    },
    {
        title: "NÍVEL 12: Agrupando as Defesas (GROUP BY)",
        story: "A segurança distribuiu guardas por setores. Precisamos contar quantos guardas estão em cada setor para desviar deles.",
        schema: "Tabela: guardas\nColunas: id, nome, setor",
        question: "Escreva a query que selecione o 'setor' e a contagem (COUNT) deles, agrupando (GROUP BY) pelo 'setor'.",
        type: "query",
        answer: "select setor, count(*) from guardas group by setor",
        placeholder: "SELECT ..."
    },
    {
        title: "NÍVEL 13: O Sub-Chefe (SUBQUERY)",
        story: "Não sabemos o ID do diretor, mas sabemos o cargo dele. Precisamos mudar o nível dele para 0 (bloqueado).",
        schema: "Tabelas: acessos (id_user, nivel) | cargos (id_user, nome_cargo)",
        question: "Use uma Subquery: Dê UPDATE na tabela acessos setando nivel = 0 WHERE id_user esteja IN (selecione id_user da tabela cargos onde nome_cargo = 'Diretor').",
        type: "query",
        answer: "update acessos set nivel = 0 where id_user in (select id_user from cargos where nome_cargo = 'diretor')",
        placeholder: "UPDATE ..."
    },
    {
        title: "NÍVEL 14: Manipulação de Strings",
        story: "A última chave de segurança está fragmentada. Precisamos unir o primeiro nome e o último sobrenome do CEO.",
        schema: "Tabela: ceo_dados\nColunas: primeiro_nome, sobrenome",
        question: "Usando a função CONCAT do MySQL, selecione a união do primeiro_nome com sobrenome (com um espaço ' ' no meio) da tabela ceo_dados.",
        type: "query",
        answer: "select concat(primeiro_nome, ' ', sobrenome) from ceo_dados",
        placeholder: "SELECT ..."
    },
    {
        title: "NÍVEL 15: A Destruição Final (DROP)",
        story: "O cofre está aberto, os dados foram baixados. O último passo é apagar a existência desse banco de dados para sempre.",
        schema: "Banco de dados atual: omnisec_mainframe",
        question: "Qual o comando para excluir/derrubar todo o banco de dados 'omnisec_mainframe'?",
        type: "query",
        answer: "drop database omnisec_mainframe",
        placeholder: "DROP ..."
    }
];

let currentLevelIndex = 0;
let errorCount = 0;
let startTime; // Armazena a hora de início
const FORMSPREE_URL = "https://formspree.io/f/mkjgaeoz"; // Link que vamos gerar no passo 2

function startGame() {
    const teamName = document.getElementById('team-name').value.trim();
    if (teamName === '') {
        alert("Digite o nome da equipe para iniciar.");
        return;
    }
    localStorage.setItem('sqlEscapeTeam', teamName);
    
    // Inicia o cronômetro no momento do clique
    startTime = new Date(); 
    
    currentLevelIndex = 0;
    errorCount = 0;
    loadLevel();
    
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
}

function loadLevel() {
    const levelData = levels[currentLevelIndex];
    document.getElementById('level-title').innerText = levelData.title;
    document.getElementById('level-story').innerText = levelData.story;
    document.getElementById('level-schema').innerText = levelData.schema;
    document.getElementById('level-question').innerText = levelData.question;
    document.getElementById('error-msg').innerText = "";

    const inputArea = document.getElementById('input-area');
    if (levelData.type === "query") {
        inputArea.innerHTML = `<textarea id="user-answer" placeholder="${levelData.placeholder}"></textarea>`;
    } else {
        inputArea.innerHTML = `<input type="text" id="user-answer" placeholder="${levelData.placeholder}" autocomplete="off">`;
    }

    // Atualiza barra de progresso
    const progressPercent = (currentLevelIndex / levels.length) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercent}%`;
}

// Função para limpar a formatação da Query (remove espaços duplos, aspas duplas viram simples, remove ponto e vírgula)
function normalizeSQL(sqlString) {
    return sqlString.toLowerCase()
        .replace(/\s+/g, ' ')       // Troca múltiplos espaços por um só
        .replace(/"/g, "'")         // Troca aspas duplas por simples
        .replace(/;\s*$/, '')       // Remove o ponto e vírgula do final se houver
        .trim();
}

function checkAnswer() {
    const levelData = levels[currentLevelIndex];
    const rawAnswer = document.getElementById('user-answer').value;
    
    const processedUserAnswer = normalizeSQL(rawAnswer);
    const expectedAnswer = normalizeSQL(levelData.answer);

    // Validação
    let isCorrect = (processedUserAnswer === expectedAnswer);

    // Exceção especial para o Nível 7 (Permite ou não o uso da palavra COLUMN no ALTER TABLE)
    if (currentLevelIndex === 6) {
        if (processedUserAnswer === "alter table permissoes_globais add forcar_exclusao boolean" || 
            processedUserAnswer === "alter table permissoes_globais add column forcar_exclusao boolean") {
            isCorrect = true;
        }
    }

    if (isCorrect) {
        errorCount = 0;
        currentLevelIndex++;
        
       if (currentLevelIndex >= levels.length) {
            // Calcula o tempo total
            const endTime = new Date();
            const timeDiff = Math.floor((endTime - startTime) / 1000); // tempo em segundos
            const minutes = Math.floor(timeDiff / 60);
            const seconds = timeDiff % 60;
            const timeString = `${minutes} minutos e ${seconds} segundos`;

            const team = localStorage.getItem('sqlEscapeTeam');
            
            // Envia o e-mail silenciosamente
            sendEmailReport(team, timeString);

            // Atualiza a tela de sucesso
            document.getElementById('progress-fill').style.width = `100%`;
            document.getElementById('display-team-name').innerText = `${team} (Tempo: ${timeString})`;
            document.getElementById('game-screen').classList.remove('active');
            document.getElementById('success-screen').classList.add('active');
        } else {
            loadLevel();
        }
        errorCount++;
        document.getElementById('error-msg').innerText = `Sintaxe incorreta ou dados inválidos. Tentativa falha ${errorCount}/3`;
        
        if (errorCount >= 3) {
            triggerTimeout();
        }
    }
}

function triggerTimeout() {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('timeout-screen').classList.add('active');
    
    let timeLeft = 60;
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

function sendEmailReport(teamName, timeString) {
    if (FORMSPREE_URL === "COLOQUE_AQUI_O_SEU_LINK") return; // Evita erro se o link não for configurado

    fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Assunto: "🚨 Escape Room SQL - Sistema Invadido!",
            Equipe: teamName,
            Tempo_Gasto: timeString,
            Mensagem: "A equipe finalizou todos os 15 desafios com sucesso."
        })
    }).then(response => {
        console.log("Relatório enviado para o professor.");
    }).catch(error => {
        console.error('Erro ao enviar relatório de tempo:', error);
    });
}