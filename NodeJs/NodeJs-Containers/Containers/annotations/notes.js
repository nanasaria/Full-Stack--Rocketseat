/* 
Introdução ao Docker

O que é Docker?
Sistema de virtualização não convencional.

Virtualização Convencional
Um software instalado na máquina Host que irá gerenciar as
máquinas virtuais. Para cada máquina virtual temos uma
instalação completa do Sistema Operacional que queremos 
virtualizar, além de ter o próprio hardware virtualizado.

Containers
Proporciona um ambiente isolado com os recursos que a 
aplicação precisa para funcionar.

Isolamento
Kernel: O kernel é o coração de um sistema operacional que
faz a ponto entre o software e o hardware e controla 
processos, memória, dispositivos e chamadas do sistema.

CGroups: É uma funcionalidade que controla e limita a 
alocação de recursos, tais como CPU, memória, etc. O 
objetivo é não deixar que um contêiner monopolize os 
recursos do host para ter um ambiente equilibrado.

Namespaces: Isola os recursos, ou seja, um container só 
"enxerga" os seus próprios processos e arquivos.

Host é onde executamos os containers e os CGroups estão
no Kernel.

Por que utilizar Docker?
Com o Docker temos um container com a nossa aplicação. Esse
container pode ser levado inteiro para o outro ambiente. 
Com isso não precisamos nos preocupar com pré-requisitos
instalados no outro ambiente, versão do S.O, permissionamento,
etc.

Conceitos do Docker
Dockerfile -> Contém todas as informações necessárias para
gerar a imagem docker.

Imagem -> Contém as informações de um ambiente com tudo que
a nossa aplicação precisa para executar. Por exemplo: código,
dependências e bibliotecas necessárias.

Container -> É a instância de uma imagem em execução. Ou 
seja, é o ambiente de uma imagem executando.

Host -> Pode ser uma máquina virtual rodando em uma máquina
física como um servidor ou diretamente na máquina física 
com o nosso computador.

DockerHub -> Onde tem imagens disponíveis para utilizar em 
containers.

dockerignore -> O arquivo .dockerignore é semelhante ao 
.gitignore, sendo usado para definir quais arquivos e 
pastas devem ser ignorados ao enviar arquivos para um 
container Docker.

Visualizar containers em execução
docker ps

Visualizar todos os containers 
docker ps -a

Visualizar imagens
docker image ls

Para executar e criar um container
docker run -p 3333:3333 (nome-imagem ou id da imagem)
A flag -p é para indicar a porta.

Para executar e criar um container em background
docker run -p 3333:3333 -d api

Para iniciar um container que já foi criado
docker start <id container>

Para visualizar logs e históricos de containers
Logs: docker logs <id imagem>
Histórico: docker history <nome imagem>

Para pausar a executação de um container
docker pause <id container>

Voltar o container pausado para em execução
docker unpause <id container>   

Para parar a execução em background
docker stop <id container> 

Estados de um Container
STATUS
Em execução -> Up quando o container está em execução.
Pausado -> Up (tempo. Ex: 9 minutos) (Paused)
Parado -> Exited

Remover container ou imagem
Para remover container, ele não pode estar em execução ou 
você pode forçar a remoção.
Remover container -> docker rm <id container>
Remoção forçada container -> docker rm -f <id container>
Para remover imagem -> docker rmi <id imagem>

Utilizar TAG para versionar imagem
Para criar -> docker build -t <nome imagem>:v1 .
Nesse caso estamos dizendo para criar uma imagem com a tag
v1, mas podia ser qualquer uma e o . é para sinalizar
para utilizar o Dockerfile. A flag -t é o que permite 
atribuir uma tag de versão a imagem criada.

Para executar a imagem com a tag
docker run -p 3333:3333 -d api:v2

Efemeridade em Containers

Efêmero -> Característica do que é temporário.

Um Container é Efêmero
Containers são projetados para serem descartáveis e podem
ser facilmente parados, destruídos ou substituídos. Portanto,
se precisar armazenar dados, é recomendado utilizar ambiente
externo ao container. Se os dados não forem armazenados 
externamente, esses dados serão perdidos quando o container
for encerrado ou removido.

Como acessar o diretório de trabalho dos containers
docker exec -it <id image> //bin//sh
ou
docker exec -it <id image> bash

Nesse diretório de trabalho podemos executar comandos linux.

Para inspecionar um container
docker container inspect <id container>

Como criar volumes
docker volume create <nome que quiser>

Inspecionar volume
docker volume inspect <nome do volume>

Como listar volumes
docker volume ls

Executar container com volume
docker run -v <nome volume>:<diretorio de trabalho> -p 3333:3333 -d <nome imagem>
Ex: docker run -v api-volume:/usr/src/app -p 3333:3333 -d api 

Se executarmos o container sem utilizar o volume, os dados 
não persistem.

Como remover volume 
docker volume rm <nome volume>

Mas só podemos remover volumes que não estão vinculados a
containers

Para resolver isso, precisamos remover os containers que 
utilizam o volume.

Se quiser excluir todos os containers:
docker container prune

Depois de removidos, ai sim execute o comando: 
docker volume rm <nome volume>

Para baixar imagens do Docker Hub:
docker run --name <Nome da imagem>:versão

Exemplo: 
docker run --name postgresql bitnami/postgresql:latest

Flag -e:
Essa flag indica que queremos passar variáveis de ambiente.

Ex:
docker run --name db-postgres -e POSTGRES_USER=postgres -e
POSTGRES_PASSWORD=senha -p 5432:5432 -d bitnami/postgresql:latest

Docker Compose
Permite definir, configurar e rodar múltiplos containers
Docker de uma vez só, usando um arquivo YAML.

Ele facilita a orquestração de containers que precisam 
trabalhar juntos, como:
- um container para sua aplicação Node.js
- outro para o banco de dados PostgreSQL

O Docker Compose é uma ferramenta usada para definir e
executar aplicações de vários contêineres do Docker.
No Compose, um arquivo YAML é usado para configurar
os serviços o aplicativo. Em seguida, você cria e inicia
todos os serviços com base na sua configuração executando
um só comando.

Para Executar o Docker Compose
docker-compose up -d
*/
