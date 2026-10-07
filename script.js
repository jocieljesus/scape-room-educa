// ==========================================
// OS 20 NÍVEIS (MODO FÁCIL - REVISÃO BÁSICA)
// ==========================================
const levels = [
    // --- NÍVEL 1 ---
    {
        title: "NÍVEL 1: O Início",
        story: "Conseguimos acessar o primeiro terminal da OmniSec. Qual é a senha do administrador?",
        schema: "Tabela: admin_dados\nColunas: id (INT), nome (VARCHAR), senha (VARCHAR)\nRegistro 1: id=1, nome='sysadmin', senha='omega_protocol'",
        question: "Sabendo que a senha está no registro acima, qual seria a saída exata se você executasse: SELECT senha FROM admin_dados WHERE id=1?",
        type: "output", answer: "omega_protocol",
        placeholder: "Digite o valor encontrado",
        hint: "A query pede apenas o texto que está salvo dentro da coluna 'senha'."
    },
    // --- NÍVEL 2 ---
    {
        title: "NÍVEL 2: Varredura de Setor",
        story: "A primeira porta digital está trancada. Precisamos listar todos os dados da tabela de servidores.",
        schema: "Tabela: servidores\nColunas: id, nome, status, ip",
        question: "Escreva a query para selecionar TODAS (*) as colunas da tabela 'servidores'. (Não precisa de WHERE).",
        type: "query", answer: "select * from servidores",
        placeholder: "SELECT ...",
        hint: "O comando mais básico do SQL: SELECT * FROM nome_da_tabela."
    },
    // --- NÍVEL 3 ---
    {
        title: "NÍVEL 3: Foco no Alvo",
        story: "Trazer todos os dados gasta muita banda. Precisamos apenas dos IPs dos servidores.",
        schema: "Tabela: servidores\nColunas: id, nome, status, ip",
        question: "Escreva a query para selecionar APENAS a coluna 'ip' da tabela 'servidores'.",
        type: "query", answer: "select ip from servidores",
        placeholder: "SELECT ...",
        hint: "Em vez do asterisco (*), coloque o nome da coluna que você quer."
    },
    // --- NÍVEL 4 ---
    {
        title: "NÍVEL 4: O Primeiro Filtro",
        story: "Vamos focar apenas nos servidores que estão ativos.",
        schema: "Tabela: servidores\nColunas: id, nome, status, ip",
        question: "Selecione TODAS (*) as colunas da tabela 'servidores' onde o 'status' seja igual a 'ativo'.",
        type: "query", answer: "select * from servidores where status = 'ativo'",
        placeholder: "SELECT ...",
        hint: "Use WHERE para filtrar. Lembre-se que palavras (textos) precisam estar entre aspas simples ('ativo')."
    },
    // --- NÍVEL 5 [BOSS 1] ---
    {
        title: "NÍVEL 5: Sabotagem [BOSS BATTLE]",
        story: "A OmniGuard detectou anomalias! Desligue rapidamente o sistema de rastreamento antes que o tempo acabe!",
        schema: "Tabela: rastreamento\nColunas: id, status",
        question: "Escreva a query para ATUALIZAR (UPDATE) a tabela 'rastreamento', definindo o 'status' como 'desligado'. (Atenção: atualize todos de uma vez, sem usar WHERE).",
        type: "query", answer: "update rastreamento set status = 'desligado'",
        placeholder: "UPDATE ...",
        hint: "Sintaxe: UPDATE tabela SET coluna = 'novo_valor'.",
        isBoss: true
    },
    // --- NÍVEL 6 ---
    {
        title: "NÍVEL 6: Limpando Rastros",
        story: "O firewall registrou o ID da nossa conexão. Precisamos apagá-lo rápido.",
        schema: "Tabela: firewall\nColunas: id, ip_origem",
        question: "Escreva a query para DELETAR os registros da tabela 'firewall' onde o 'id' seja igual a 99.",
        type: "query", answer: "delete from firewall where id = 99",
        placeholder: "DELETE FROM ...",
        hint: "A sintaxe é DELETE FROM tabela WHERE condicao. Para números, não precisa de aspas."
    },
    // --- NÍVEL 7 ---
    {
        title: "NÍVEL 7: Contagem Básica",
        story: "Precisamos saber quantos arquivos existem no cofre.",
        schema: "Tabela: cofre_arquivos\nColunas: id_arquivo, nome, tamanho",
        question: "Escreva a query usando a função de agregação que CONTA o número total de registros (COUNT(*)) da tabela 'cofre_arquivos'.",
        type: "query", answer: "select count(*) from cofre_arquivos",
        placeholder: "SELECT ...",
        hint: "Em vez de selecionar colunas, selecione COUNT(*) FROM tabela."
    },
    // --- NÍVEL 8 ---
    {
        title: "NÍVEL 8: Matemática Lógica",
        story: "Você acabou de apagar dois arquivos. O sistema está verificando os dados.",
        schema: "A tabela possuía 10 arquivos. Você rodou um DELETE e apagou 2.",
        question: "Se o sistema rodar a query SELECT COUNT(*) FROM cofre_arquivos agora, qual será o número retornado?",
        type: "output", answer: "8",
        placeholder: "Digite apenas o número",
        hint: "Se você tinha 10 e apagou 2, quantos sobraram no total da contagem?"
    },
    // --- NÍVEL 9 ---
    {
        title: "NÍVEL 9: Ordenando a Bagunça",
        story: "Os registros estão misturados. Queremos ver a lista de funcionários em ordem alfabética.",
        schema: "Tabela: funcionarios\nColunas: id, nome",
        question: "Selecione TODAS (*) as colunas da tabela 'funcionarios' e ordene (ORDER BY) pelo 'nome' de forma crescente (ASC).",
        type: "query", answer: "select * from funcionarios order by nome asc",
        placeholder: "SELECT ...",
        hint: "Adicione ORDER BY nome ASC no final da sua query."
    },
    // --- NÍVEL 10 [BOSS 2] ---
    {
        title: "NÍVEL 10: O Infiltrado [BOSS BATTLE]",
        story: "Os cães de guarda virtuais estão na nossa cola! Crie nosso usuário no banco de dados para ganharmos passe livre antes de sermos expulsos!",
        schema: "Tabela: acessos\nColunas: login (VARCHAR), nivel (INT)",
        question: "Escreva a query para INSERIR (INSERT INTO) na tabela 'acessos' os valores ('hacker', 5).",
        type: "query", answer: "insert into acessos values ('hacker', 5)",
        placeholder: "INSERT INTO ...",
        hint: "Forma simplificada: INSERT INTO tabela VALUES (valor1, valor2). Textos vão entre aspas simples, números não.",
        isBoss: true
    },
    // --- NÍVEL 11 ---
    {
        title: "NÍVEL 11: O Topo da Lista",
        story: "Precisamos saber qual foi a ÚLTIMA conexão feita no servidor.",
        schema: "Tabela: logs\nColunas: id, ip",
        question: "Selecione a coluna 'ip' da tabela 'logs', ordene pelo 'id' de forma decrescente (DESC) e limite o resultado a 1 linha (LIMIT 1).",
        type: "query", answer: "select ip from logs order by id desc limit 1",
        placeholder: "SELECT ...",
        hint: "Sintaxe: SELECT coluna FROM tabela ORDER BY coluna DESC LIMIT 1."
    },
    // --- NÍVEL 12 ---
    {
        title: "NÍVEL 12: Caça-Palavras Simples",
        story: "Uma das senhas tem a palavra 'top' no início, mas não sabemos o resto.",
        schema: "Tabela: senhas_secretas\nColunas: id, codigo",
        question: "Selecione a coluna 'codigo' da tabela 'senhas_secretas' onde o código comece com 'top' (Use o operador LIKE 'top%').",
        type: "query", answer: "select codigo from senhas_secretas where codigo like 'top%'",
        placeholder: "SELECT ...",
        hint: "O % no final significa que a palavra começa com 'top' e pode ter qualquer coisa depois."
    },
    // --- NÍVEL 13 ---
    {
        title: "NÍVEL 13: Maioridade",
        story: "A OmniSec tem uma tabela de agentes, queremos listar apenas os mais experientes.",
        schema: "Tabela: agentes\nColunas: nome, idade",
        question: "Selecione o 'nome' da tabela 'agentes' onde a 'idade' seja MAIOR que 30.",
        type: "query", answer: "select nome from agentes where idade > 30",
        placeholder: "SELECT ...",
        hint: "Use o sinal matemático padrão de maior (>)."
    },
    // --- NÍVEL 14 ---
    {
        title: "NÍVEL 14: Restrição (Diferente de)",
        story: "Precisamos da lista de todos os setores, EXCETO o setor de RH que é uma armadilha.",
        schema: "Tabela: departamentos\nColunas: id, nome",
        question: "Selecione TODAS as colunas da tabela 'departamentos' onde o 'nome' seja DIFERENTE (<> ou !=) de 'RH'.",
        type: "query", answer: "select * from departamentos where nome != 'rh'",
        placeholder: "SELECT ...",
        hint: "Você pode usar o sinal != ou <> para representar 'diferente de'."
    },
    // --- NÍVEL 15 [BOSS 3] ---
    {
        title: "NÍVEL 15: Ataque Duplo [BOSS BATTLE]",
        story: "Eles descobriram nosso acesso! Troque sua senha e ative o modo furtivo ao mesmo tempo!",
        schema: "Tabela: meu_perfil\nColunas: senha, modo_furtivo",
        question: "Atualize (UPDATE) a tabela 'meu_perfil' setando a 'senha' = '123' E (vírgula) o 'modo_furtivo' = 1. (Sem WHERE, atualize tudo).",
        type: "query", answer: "update meu_perfil set senha = '123', modo_furtivo = 1",
        placeholder: "UPDATE ...",
        hint: "Para atualizar duas colunas de uma vez, separe com vírgula: SET coluna1 = 'valor', coluna2 = valor.",
        isBoss: true
    },
    // --- NÍVEL 16 ---
    {
        title: "NÍVEL 16: Função Máxima",
        story: "Precisamos descobrir qual é o maior nível de segurança cadastrado.",
        schema: "Tabela: credenciais\nColunas: id, nivel",
        question: "Use a função agregadora MAX() para selecionar o MAIOR 'nivel' da tabela 'credenciais'.",
        type: "query", answer: "select max(nivel) from credenciais",
        placeholder: "SELECT ...",
        hint: "Sintaxe: SELECT MAX(coluna) FROM tabela."
    },
    // --- NÍVEL 17 ---
    {
        title: "NÍVEL 17: Função Mínima",
        story: "Agora precisamos saber qual o menor ping (latência) de conexão para rotear nossos dados.",
        schema: "Tabela: rotas\nColunas: id, ping",
        question: "Use a função agregadora MIN() para selecionar o MENOR 'ping' da tabela 'rotas'.",
        type: "query", answer: "select min(ping) from rotas",
        placeholder: "SELECT ...",
        hint: "Da mesma forma que o MAX(), a sintaxe é: SELECT MIN(coluna) FROM tabela."
    },
    // --- NÍVEL 18 ---
    {
        title: "NÍVEL 18: Apagando Estruturas",
        story: "A tabela de backups nos rastreou. Em vez de apagar linha por linha, vamos jogar a tabela inteira fora.",
        schema: "Nome da tabela: backups",
        question: "Qual o comando estrutural (DDL) para deletar/derrubar a tabela 'backups' inteira?",
        type: "query", answer: "drop table backups",
        placeholder: "DROP ...",
        hint: "Para apagar a tabela inteira (não só os dados), use DROP TABLE nome_da_tabela."
    },
    // --- NÍVEL 19 ---
    {
        title: "NÍVEL 19: Múltiplas Condições",
        story: "O cofre principal exige duas chaves simultâneas para ser revelado.",
        schema: "Tabela: chaves\nColunas: id, status, tipo",
        question: "Selecione TODAS as colunas da tabela 'chaves' onde 'status' = 'ativa' E (AND) 'tipo' = 'mestra'.",
        type: "query", answer: "select * from chaves where status = 'ativa' and tipo = 'mestra'",
        placeholder: "SELECT ...",
        hint: "Use o operador lógico AND para juntar duas condições no WHERE."
    },
    // --- NÍVEL 20 [FINAL BOSS] ---
    {
        title: "NÍVEL 20: A Destruição Final [FINAL BOSS]",
        story: "ÚLTIMA DEFESA! A Inteligência Artificial central vai nos prender. Destrua o banco de dados inteiro agora para apagar as evidências da invasão!",
        schema: "Banco de dados atual: omnisec",
        question: "Qual o comando DDL absoluto para excluir/derrubar todo o banco de dados 'omnisec'?",
        type: "query", answer: "drop database omnisec",
        placeholder: "DROP ...",
        hint: "O comando mais destrutivo do SQL: DROP DATABASE nome_do_banco.",
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
            Equipe: teamName,
            Tempo_Gasto: timeString
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