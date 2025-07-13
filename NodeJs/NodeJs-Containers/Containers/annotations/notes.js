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


*/
