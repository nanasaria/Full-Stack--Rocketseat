/*
Versionamento Semântico

O que é?
Padrão utilizado para identificar e comunicar alterações e
compatibilidade entre as versões.

    1       .       12          .       7
  Major            Minor              Patch

  Ex: 1.12.7

Major - Incompatibilidade
Significa que houve mudanças significativas que podem afetar
a funcionalidade do programa ou causar problemas de compatibilidade
com versões anteriores.

Minor - Novas funcionalidades
Quando novas funcionalidades são adicionadas de uma maneira
compatível com versões anteriores.

Patch - Correções de bugs
Quando são feitas correções de bugs ou pequenas melhorias
que não afetam a compatibilidade com versões anteriores.

Identificar versões compatíveis
semver.npmjs.com
É uma calculadora que mostra as versões compatíveis.

Atualização Baseada na Minor
Ao executar o comando npm i, o sistema identifica a versão
instalada e atualiza para a versão mais recente compatível.

Exibir Pacotes desatualizados
npm outdated
ou
npm out
E na coluna Wanted está a versão mais compatível e atual

Atualizar uma lib para a última versão
ex: npm i express@latest

Maneira de atualizar os pacotes com NPX
npx npm-check-updates

Esse pacote é instalado de maneira temporária e lista as
versões atuais e recomendadas dos pacotes.
Com esse pacote também é possível atualizar os pacotes 
utilizando: npx npm-check-updates -u
É importante executar npm install depois desse comando 
para garantir que o package.json atualize corretamente.

O Modo interativo do npm-check-updates 
Para utilizar o modo interativo:
npx npm-check-updates --interactive --format group

Changelog

O que é Changelog?
É um relatório que mostra os detalhes da atualização, 
mostra o que mudou - Correções de bugs, novas funções, 
incompatibilidade - na biblioteca.

*/
