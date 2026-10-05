const levels = [
    // --- 🟢 SIMPLES (1) ---
    {
        title: "NÍVEL 1: O Início",
        story: "Conseguimos interceptar pacotes de dados. Precisamos descobrir a senha do root no banco.",
        schema: "Tabela: config_db\nColunas: id (INT), chave (VARCHAR), valor (VARCHAR)",
        question: "Sabendo que existe um registro com chave='senha_root' e valor='mysql_master', qual seria a saída exata da query: SELECT valor FROM config_db WHERE chave='senha_root'?",
        type: "output", answer: "mysql_master",
        placeholder: "Digite o valor encontrado",
        hint: "A query pede apenas a coluna 'valor'. Qual é o texto guardado nessa coluna?"
    },
    
    // --- 🟡 MÉDIA (2) ---
    {
        title: "NÍVEL 2: Varredura de Setor",
        story: "A primeira porta digital está trancada. Precisamos listar os funcionários do departamento de TI.",
        schema: "Tabela: funcionarios\nColunas: id, nome, cargo, departamento",
        question: "Escreva a query que seleciona TODAS (*) as colunas da tabela funcionarios onde o departamento seja igual a 'TI'.",
        type: "query", answer: "select * from funcionarios where departamento = 'ti'",
        placeholder: "SELECT ...",
        hint: "Use o asterisco (*) para selecionar tudo e filtre com WHERE."
    },

    // --- 🟢 SIMPLES (3) ---
    {
        title: "NÍVEL 3: Identificação de Chave",
        story: "O sistema exige a identificação do identificador principal (Primary Key) da tabela de segurança.",
        schema: "Tabela: seguranca_log\nColunas: id_log (PK), data_hora, evento",
        question: "Analisando o schema acima, qual é o nome exato da coluna que atua como Chave Primária (Primary Key)?",
        type: "output", answer: "id_log",
        placeholder: "Digite o nome da coluna",
        hint: "A Chave Primária (PK) é o identificador único da tabela. Como essa coluna se chama no texto acima?"
    },
    // --- 🟡 MÉDIA (4) ---
    {
        title: "NÍVEL 4: Limpando Rastros Iniciais",
        story: "O firewall registrou nosso IP de entrada. Precisamos apagá-lo rápido.",
        schema: "Tabela: firewall_logs\nColunas: id, ip_origem, status",
        question: "Escreva a query para deletar (DELETE) os registros da tabela firewall_logs onde o ip_origem for '192.168.0.100'.",
        type: "query", answer: "delete from firewall_logs where ip_origem = '192.168.0.100'",
        placeholder: "DELETE FROM ...",
        hint: "A sintaxe é DELETE FROM tabela WHERE condicao."
    },
    // --- 🔴 COMPLEXA [BOSS 1] (5) ---
    {
        title: "NÍVEL 5: Criação de Backdoor [BOSS BATTLE]",
        story: "A OmniGuard detectou anomalias. O Administrador está rastreando seu IP! Crie nosso usuário administrador antes que o tempo acabe.",
        schema: "Tabela: usuarios_admin\nColunas: id (Auto Increment), username, nivel_acesso",
        question: "Escreva a query para inserir (INSERT) na tabela usuarios_admin, nas colunas (username, nivel_acesso), os valores ('neo', 'root').",
        type: "query", answer: "insert into usuarios_admin (username, nivel_acesso) values ('neo', 'root')",
        placeholder: "INSERT INTO ...",
        hint: "Sintaxe: INSERT INTO tabela (colunas) VALUES (valores). Atenção às aspas simples nos textos!",
        isBoss: true
    },
    // --- 🟡 MÉDIA (6) ---
    {
        title: "NÍVEL 6: O Último Acesso",
        story: "Precisamos saber qual foi o último cara que invadiu esse sistema. O banco ordena do mais antigo para o mais novo pelo ID.",
        schema: "Tabela: logs_acesso\nColunas: id, ip, data_hora",
        question: "Busque apenas a coluna 'ip' da tabela logs_acesso, ordenando pelo 'id' de forma decrescente (DESC) e limitando o resultado a 1 linha.",
        type: "query", answer: "select ip from logs_acesso order by id desc limit 1",
        placeholder: "SELECT ...",
        hint: "Adicione ORDER BY id DESC e depois LIMIT 1 no final da sua query."
    },
    // --- 🟡 MÉDIA (7) ---
    {
        title: "NÍVEL 7: Desativando o Alarme",
        story: "O alarme disparou! Há uma tabela controlando as sirenes. Mude o status.",
        schema: "Tabela: alarmes\nColunas: id_alarme, local, status",
        question: "Atualize (UPDATE) a tabela alarmes, definindo status = 'DESLIGADO' onde o local = 'servidor_principal'.",
        type: "query", answer: "update alarmes set status = 'desligado' where local = 'servidor_principal'",
        placeholder: "UPDATE ...",
        hint: "Sintaxe: UPDATE tabela SET coluna = valor WHERE condicao."
    },
    // --- 🟢 SIMPLES (8) ---
    {
        title: "NÍVEL 8: Verificação de Status",
        story: "Você acabou de desligar os alarmes no nível anterior. O sistema está fazendo uma varredura.",
        schema: "Situação atual: Todos os registros da tabela 'alarmes' estão com status = 'DESLIGADO'.",
        question: "Se o sistema rodar a query SELECT COUNT(*) FROM alarmes WHERE status='LIGADO', qual será o número retornado?",
        type: "output", answer: "0",
        placeholder: "Digite apenas o número",
        hint: "Se não existe nenhum alarme ligado, o que a função COUNT vai retornar?"
    },
    // --- 🔴 COMPLEXA (9) ---
    {
        title: "NÍVEL 9: Modificação Estrutural (DDL)",
        story: "O banco bloqueia deleções. Precisamos forçar uma alteração na estrutura da tabela.",
        schema: "Tabela: permissoes_globais",
        question: "Qual comando altera (ALTER) a tabela permissoes_globais para adicionar (ADD COLUMN) a coluna 'forcar_exclusao' do tipo BOOLEAN?",
        type: "query", answer: "alter table permissoes_globais add column forcar_exclusao boolean",
        placeholder: "ALTER TABLE ...",
        hint: "Comando: ALTER TABLE nome_tabela ADD COLUMN nome_coluna tipo_dado."
    },
    // --- 🔴 COMPLEXA [BOSS 2] (10) ---
    {
        title: "NÍVEL 10: Cruzamento de Dados [BOSS BATTLE]",
        story: "Os cães de guarda virtuais foram soltos! Combine as tabelas de catracas e funcionários ou seremos pegos.",
        schema: "Tabelas: catracas (id, id_func) | funcionarios (id, nome)",
        question: "Escreva o INNER JOIN que seleciona TODAS (*) as colunas, ligando 'catracas' com 'funcionarios' onde catracas.id_func seja igual a funcionarios.id.",
        type: "query", answer: "select * from catracas inner join funcionarios on catracas.id_func = funcionarios.id",
        placeholder: "SELECT ...",
        hint: "Sintaxe: SELECT * FROM tab1 INNER JOIN tab2 ON tab1.fk = tab2.pk",
        isBoss: true
    },
    // --- 🟢 SIMPLES (11) ---
    {
        title: "NÍVEL 11: O Enigma Matemático",
        story: "A inteligência artificial quer testar seu conhecimento relacional.",
        schema: "A Tabela A possui 10 registros. A Tabela B possui 10 registros.",
        question: "Se executarmos um CROSS JOIN (produto cartesiano) sem filtros entre elas, quantas linhas o resultado terá no total?",
        type: "output", answer: "100",
        placeholder: "Digite apenas o número",
        hint: "O CROSS JOIN multiplica a quantidade de linhas de uma tabela pela outra (10 x 10)."
    },
    // --- 🟡 MÉDIA (12) ---
    {
        title: "NÍVEL 12: Caça-Palavras",
        story: "A senha do cofre está escondida na descrição de algum arquivo. Sabemos que ela termina com a palavra 'secreto'.",
        schema: "Tabela: arquivos\nColunas: id, nome, descricao",
        question: "Selecione o 'nome' da tabela 'arquivos' onde a 'descricao' termine com 'secreto' (Use o operador LIKE).",
        type: "query", answer: "select nome from arquivos where descricao like '%secreto'",
        placeholder: "SELECT ...",
        hint: "No LIKE, use o curinga %. Se termina com a palavra, fica '%palavra'."
    },
    // --- 🔴 COMPLEXA (13) ---
    {
        title: "NÍVEL 13: Agrupando as Defesas",
        story: "Precisamos contar quantos guardas estão em cada setor para traçar uma rota segura.",
        schema: "Tabela: guardas\nColunas: id, nome, setor",
        question: "Selecione o 'setor' e a contagem (COUNT(*)) deles, agrupando (GROUP BY) pelo 'setor'.",
        type: "query", answer: "select setor, count(*) from guardas group by setor",
        placeholder: "SELECT ...",
        hint: "Sempre que selecionar uma coluna junto com um COUNT, use GROUP BY [coluna]."
    },
    // --- 🔴 COMPLEXA (14) ---
    {
        title: "NÍVEL 14: O Sub-Chefe",
        story: "Precisamos mudar o nível do diretor para 0 na tabela de acessos, mas só sabemos o cargo dele em outra tabela.",
        schema: "Tabelas: acessos (id_user, nivel) | cargos (id_user, nome_cargo)",
        question: "Dê UPDATE na tabela 'acessos' definindo nivel = 0 WHERE id_user esteja IN (selecione id_user da tabela 'cargos' onde nome_cargo = 'diretor').",
        type: "query", answer: "update acessos set nivel = 0 where id_user in (select id_user from cargos where nome_cargo = 'diretor')",
        placeholder: "UPDATE ...",
        hint: "Você vai colocar um SELECT inteiro dentro dos parênteses do IN ()."
    },
    // --- 🔴 COMPLEXA [BOSS 3] (15) ---
    {
        title: "NÍVEL 15: Extração em Massa [BOSS BATTLE]",
        story: "O firewall está derretendo! Transfira todos os dados do cofre principal para nossa tabela de extração antes do bloqueio total!",
        schema: "Tabelas: cofre_seguro | cofre_extracao",
        question: "Escreva a query para inserir (INSERT INTO) na tabela 'cofre_extracao' selecionando TODOS (*) os dados da tabela 'cofre_seguro'.",
        type: "query", answer: "insert into cofre_extracao select * from cofre_seguro",
        placeholder: "INSERT INTO ...",
        hint: "Você pode unir INSERT e SELECT: INSERT INTO tabela_destino SELECT * FROM tabela_origem.",
        isBoss: true
    },
    // --- 🟢 SIMPLES (16) ---
    {
        title: "NÍVEL 16: O Nível Máximo",
        story: "Encontramos a tabela de níveis de acesso. Queremos saber qual é a autoridade máxima lá dentro.",
        schema: "A coluna 'nivel' possui os seguintes registros: 1, 3, 5, 42 e 99.",
        question: "Se rodarmos a query: SELECT MAX(nivel) FROM acessos; qual será o número devolvido pelo banco?",
        type: "output", answer: "99",
        placeholder: "Digite apenas o número",
        hint: "A função MAX() sempre retorna o maior valor matemático de uma coluna."
    },
    // --- 🔴 COMPLEXA (17) ---
    {
        title: "NÍVEL 17: Pontos Cegos (LEFT JOIN)",
        story: "A corporação está escondendo servidores fantasmas. Precisamos cruzar a lista de servidores com os logs de conexões para achar as máquinas que nunca se conectaram à rede.",
        schema: "Tabelas: servidores (id_servidor, nome) | conexoes (id_conexao, id_servidor)",
        question: "Faça um LEFT JOIN selecionando o 'nome' de 'servidores' cruzando com 'conexoes' via 'id_servidor', e filtre (WHERE) onde 'conexoes.id_servidor' seja NULO.",
        type: "query", answer: "select nome from servidores left join conexoes on servidores.id_servidor = conexoes.id_servidor where conexoes.id_servidor is null",
        placeholder: "SELECT ...",
        hint: "A estrutura é: SELECT coluna FROM tab1 LEFT JOIN tab2 ON tab1.id = tab2.id WHERE tab2.id IS NULL."
    },
    // --- 🔴 COMPLEXA (18) ---
    {
        title: "NÍVEL 18: Rastreamento Triplo (JOIN)",
        story: "Um agente duplo acessou a porta do cofre. Precisamos cruzar dados de usuários, cartões e logs para descobrir o nome dele.",
        schema: "Tabelas: usuarios (id, nome) | cartoes (id, id_usuario, codigo) | logs_portas (id, codigo_cartao, porta)",
        question: "Faça um INNER JOIN triplo: Selecione o 'nome' cruzando 'usuarios' com 'cartoes' (usando id_usuario e id) e cruzando 'cartoes' com 'logs_portas' (usando codigo_cartao e codigo), onde a 'porta' seja 'cofre_principal'.",
        type: "query", answer: "select nome from usuarios inner join cartoes on usuarios.id = cartoes.id_usuario inner join logs_portas on cartoes.codigo = logs_portas.codigo_cartao where porta = 'cofre_principal'",
        placeholder: "SELECT ...",
        hint: "Junte a 1ª tabela com a 2ª, e logo depois adicione outro INNER JOIN para a 3ª: ... INNER JOIN tab2 ON ... INNER JOIN tab3 ON ... WHERE ..."
    },
    // --- 🔴 COMPLEXA (19) ---
    {
        title: "NÍVEL 19: Os Fantasmas do Sistema",
        story: "Existem usuários fantasmas cadastrados que não possuem crachá vinculado (NULO).",
        schema: "Tabela: funcionarios\nColunas: nome, id_cracha",
        question: "Selecione o 'nome' dos 'funcionarios' onde a coluna 'id_cracha' seja NULA (vazia).",
        type: "query", answer: "select nome from funcionarios where id_cracha is null",
        placeholder: "SELECT ...",
        hint: "No SQL, não usamos = NULL. Usamos IS NULL para verificar se algo está vazio."
    },
    // --- 🔴 COMPLEXA [BOSS 4] (20) ---
    {
        title: "NÍVEL 20: A Destruição Final [FINAL BOSS]",
        story: "ÚLTIMA DEFESA! A Inteligência Artificial central vai nos rastrear em segundos. Destrua o banco de dados inteiro agora para apagar todas as evidências!",
        schema: "Banco de dados atual: omnisec_mainframe",
        question: "Qual o comando DDL absoluto para excluir/derrubar todo o banco de dados 'omnisec_mainframe'?",
        type: "query", answer: "drop database omnisec_mainframe",
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
    return sqlString.toLowerCase().replace(/\s+/g, ' ').replace(/"/g, "'").replace(/;\s*$/, '').trim();
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