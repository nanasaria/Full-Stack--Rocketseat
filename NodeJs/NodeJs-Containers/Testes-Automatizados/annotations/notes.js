/*
Testes Automatizados

Testes -> Permite identificar erros durante o desenvolvimento
e assegurar a qualidade e o funcionamento correto da 
aplicação.

O teste automatizado é a utilização de ferramentas para 
automatizar processo manual conduzido por humanos de 
revisão e validação da aplicação.

Tipos de Testes
Teste de Unidade -> Testa unidades individuais do código.

Por exemplo: testar uma função específica da aplicação.

Testes automatizados podem ser executados mesmo com a 
aplicação parada.

Nomenclatura:
<nome>.test.ts
Para testes unitários, integração e e2e de forma geral.

<nome>.spec.ts
Quando você quer deixar claro que está descrevendo o 
comportamento esperado de uma funcionalidade, principalmente 
em cenários de BDD ou documentação.

Exemplo de sintaxe do teste unitário:
Método test(), primeiro parâmetro é o nome do teste e o
segundo é a função que executa o teste.

test("example", () => {
  console.log("Test Ok");
});

Para rodarmos os scripts de teste:
Um único teste: npx jest <caminho do arquivo>
Todos os testes: npx jest

Com a flag watch no package.json, não precisamos "matar" o
terminal toda vez que modificarmos, ou seja, toda vez que
algo mudar, ele executa normalmente.

Agrupar testes
É muito comum um arquivo de teste testar várias funcionalidades
da mesma função. Sendo cenários de sucesso ou de falhas. Nesse
sentido, é interessante agrupar testes da mesma função.

Teste End-to-End (E2E)
Testes E2E são testes que simulam a experiência real do
usuário com o sistema, testando o fluxo completo de uma
aplicação do início ao fim.

*/
