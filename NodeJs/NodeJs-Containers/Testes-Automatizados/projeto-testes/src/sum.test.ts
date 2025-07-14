import { sum } from "./sum";

/**
 * Método describe()
 * 1° Parâmetro: Nome do grupo de testes.
 * 2° Função com testes relacionados dentro.
 *
 * Método test()
 * 1° Parâmetro: Nome do teste
 * 2° Parâmetro: Função que executa o teste
 *
 * Com o teste, verificamos se a função está realizando o
 * comportamento esperado.
 *
 * Método expect()
 * Estamos dizendo que esperamos que ao executar a função
 * sum com os argumentos 3 e 7, o resultado seja 10.
 *
 * Além da palavra teste, podemos utilizar o it(), a
 * diferença de it e test é apenas semântica. Com it geralmente
 * se lê como: "Isso deveria fazer tal coisa", enquanto
 * com test() se lê: "testa tal coisa".
 *
 * beforeAll() -> Utilizado para executar uma função antes
 * dos testes serem realizados. É possível definir variáveis
 * e atribuir valores a elas antes dos testes, garantindo
 * que as informações necessárias estejam disponíveis.
 *
 * afterAll() -> Utilizado para executar uma função depois
 * dos testes serem realizados.
 *
 */

describe("sum", () => {
  let sumResult: number;

  beforeAll(() => {
    console.log("Executo antes de tudo");
    sumResult = 10;
  });

  test("sum of 3+7 must be 10", () => {
    const result = sum(3, 7);

    expect(result).toBe(sumResult);
  });

  test("sum of 2+2 must be 4", () => {
    const result = sum(2, 2);

    expect(result).toBe(4);
  });

  afterAll(() => {
    sumResult = 0;
    console.log("Executado depois dos testes");
  });
});
