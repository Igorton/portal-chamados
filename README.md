# Portal de Chamados

Este é um sistema de **Portal de Chamados**, desenvolvido para um projeto acadêmico, utilizando **PHP** e **JavaScript** para criação de chamados, fechamento de tickets, e coleta de feedback dos usuários. O sistema também permite adicionar comentários nos chamados e oferece uma interface interativa, com design aprimorado utilizando o **AdminLTE**, garantindo uma aparência limpa e moderna.

## Pré-visualização

Para o acesso, basta clicar em entrar, na visualização não é necessário as credenciais.
- **[Portal Chamados](https://igorton.github.io/portal-chamados/acesso/login.html)**

## Funcionalidades

- **Criação de Chamados**: Usuários podem abrir novos chamados detalhando seu problema ou solicitação.
- **Encerramento de Chamados**: Permite que os chamados sejam marcados como resolvidos e encerrados.
- **Feedback**: Após o encerramento de cada chamado, o usuário pode fornecer feedback para avaliar a resolução do problema.
- **Comentários**: Usuários e administradores podem deixar comentários em cada chamado para complementar a comunicação.
  
## Tecnologias Utilizadas

- **PHP**: Para a lógica de backend e gerenciamento de dados.
- **JavaScript**: Para funcionalidades interativas como confirmação de ações e manipulação de dados na interface.
- **AdminLTE**: Template de front-end para proporcionar uma interface moderna e fácil de usar.
- **FontAwesome**: Ícones para melhorar a visualização das informações.
- **DataTables**: Para exibir listas de chamados de forma organizada e interativa (com filtros e ordenação).
- **SweetAlert**: Utilizado para alertas e pop-ups interativos para uma experiência de usuário mais agradável.

## Estrutura do Projeto

O projeto é composto por três partes principais:

1. **Backend (PHP)**: Responsável pela gestão de chamados, criação de tickets, gerenciamento de usuários, etc.
2. **Frontend (HTML/CSS/JS)**: Interface do usuário utilizando os componentes do AdminLTE, com uso de bibliotecas para interatividade.
3. **Banco de Dados**: Utiliza um banco de dados para armazenar informações de usuários, chamados, comentários e feedbacks.

## Como Utilizar

### 1. Requisitos

Certifique-se de ter um servidor local ou remoto com **PHP** e **MySQL** instalados.

### 2. Instalação

1. Clone o repositório ou faça o download dos arquivos:
   
   ```bash
   git clone https://github.com/seu-usuario/portal-de-chamados.git
   
2.	Crie um banco de dados MySQL e importe o arquivo database.sql para criar as tabelas necessárias.
3.	Configure a conexão com o banco de dados no arquivo config.php com os dados do seu banco de dados MySQL.
4.	Acesse a aplicação em seu servidor local (exemplo: http://localhost/portal-de-chamados).

### 3. Funcionalidades

- **Abrir Chamado**: Ao acessar a página principal, você pode criar um novo chamado clicando em "Abrir Chamado". Preencha os campos necessários e envie.
- **Visualizar Chamados**: Uma tabela interativa com todos os chamados será exibida. Você pode filtrar, ordenar e buscar por chamados.
-	**Encerrar Chamado**: Ao resolver um problema, você pode encerrar o chamado, o que automaticamente solicita um feedback do usuário.
-	**Deixar Comentários**: Tanto o usuário quanto o administrador podem deixar comentários nos chamados.

### 4. Feedback

Após o encerramento de cada chamado, o usuário será solicitado a deixar um feedback, utilizando uma simples escala de avaliação.

## **Contribuições**
Se você quiser contribuir para este projeto, fique à vontade para fazer um fork e enviar um pull request. Certifique-se de seguir as melhores práticas de desenvolvimento e manter a estrutura do código organizada.
Considerações
-	Este projeto foi criado com fins acadêmicos e foi mantido o logo original nas tags <img> de forma a respeitar as especificações do projeto da faculdade.
-	Qualquer modificação ou adaptação para uso comercial ou em outros contextos deve considerar licenciamento e atribuição adequados.

## Licença

Este projeto está licenciado sob a **[MIT License](LICENSE)**.
