/*
JWT - JSON Web Token

Um padrão de mercado que define um token no formato JSON
para a troca de informações de forma segura e compacta.

Composição de um Token JWT
Header           Payload          Verify Signature
Algoritmo e      Conteúdo do      Assinatura que garante
tipo do Token    Token            a integridade do token

Onde usar o JTW
Cenário de autorização.
Por exemplo: depois que um usuário estiver conectado, é 
possível observar cada requisição e verificar se inclui
o JWT e verificando se o usuário tem autorização para 
acessar os recursos da API.

Autenticação e Autorização
Autenticação -> Processo de verificar a identidade de um
usuário. É como provar que a pessoa é quem ela diz ser.

Exemplo: quando um usuário faz login em uma aplicação, ele
fornece credenciais (como e-mail e senha) e se as credenciais
são válidas, o usuário é autenticado.

Autorização -> Define o que um usuário autenticado pode ou
não fazer dentro do sistema. Depois de identificado, o 
sistema verifica quais permissões o usuário tem.

Exemplo: um usuário autenticado no sistema, não tem permissão
para acessar um painel administrativo ou excluir dados. A
autorização determina esse nível de acesso com base no papel
(role) ou permissões atribuídas ao usuário.

*/
