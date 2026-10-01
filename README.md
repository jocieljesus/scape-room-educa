🕵️‍♂️ SQL Escape Room - Invasão OmniSec

Um jogo educativo estilo "Escape Room" desenvolvido para turmas de Banco de Dados. Os alunos assumem o papel de hackers tentando invadir o mainframe da megacorporação OmniSec. Para avançar pelas 15 salas de segurança, as equipes devem resolver desafios práticos de MySQL.

Este projeto foi idealizado para metodologias ativas de ensino (especialmente no Senac), promovendo colaboração, raciocínio lógico e fixação da sintaxe SQL.

✨ Funcionalidades

15 Níveis Progressivos: Cobre desde comandos básicos (SELECT, WHERE) até DML (INSERT, UPDATE, DELETE), DDL (ALTER, DROP), Joins, Subqueries e Funções de Agregação.

Validação Inteligente de SQL: O validador em JavaScript no front-end ignora diferenças de maiúsculas/minúsculas, espaços extras, aspas duplas/simples e ponto e vírgula, focando na lógica do aluno.

Sistema de Punição: Errar 3 vezes aciona o "Firewall", bloqueando a equipe por 60 segundos para desencorajar o "chute" e incentivar o debate.

Interface Imersiva: Design inspirado em terminais hackers (Cyberpunk/CRT), com barra de progresso e feedbacks visuais.

Ranking Automático (Backend Google): Integração com Google Apps Script para registrar o tempo de conclusão das equipes em uma planilha do Google Sheets e enviar um e-mail ao professor.

🛠️ Tecnologias Utilizadas

Front-end: HTML5, CSS3, JavaScript (Vanilla)

Back-end (Serverless): Google Apps Script (Integração com Google Sheets e Gmail)

Hospedagem Recomendada: GitHub Pages ou Azure Static Web Apps

🚀 Como Executar e Hospedar o Projeto

1. Configurando o Front-end

Faça o clone deste repositório ou baixe os arquivos (index.html, style.css, script.js).

Abra o arquivo index.html no seu navegador para testar localmente.

Para jogar em sala de aula, hospede os arquivos em uma plataforma estática gratuita (como o GitHub Pages).

2. Configurando o Back-end (Ranking e E-mail)

Para receber os tempos das equipes e salvar no Google Sheets, siga este passo a passo:

Crie uma nova planilha no Google Sheets e adicione os cabeçalhos: Data/Hora, Equipe, Tempo.

Vá em Extensões > Apps Script.

Cole o código de recebimento (Web App POST) fornecido na documentação do professor.

Clique em Implantar > Nova implantação, escolha App da Web, defina o acesso para Qualquer pessoa e copie a URL gerada.

No arquivo script.js do seu projeto, substitua a variável GOOGLE_APPS_SCRIPT_URL pela URL que você copiou:

const GOOGLE_APPS_SCRIPT_URL = "SUA_URL_AQUI";


🎮 Regras do Jogo para os Alunos

Formem equipes de 3 a 4 pessoas.

Apenas um dispositivo por equipe deve acessar o terminal para promover a colaboração.

Leia atentamente a "situação-problema" e o "schema" do banco de dados apresentado em cada nível.

Digite a query SQL ou a senha solicitada.

Cuidado: 3 tentativas incorretas ativam o bloqueio temporário de segurança de 1 minuto!

A primeira equipe a chegar à tela de "Sistema Comprometido" e registrar o tempo na planilha do professor vence.

👨‍🏫 Autor

Criado por Jociel para aplicação em aulas de Banco de Dados. Fique à vontade para fazer um fork, alterar os desafios no array de níveis (script.js) e adaptar para as suas turmas!