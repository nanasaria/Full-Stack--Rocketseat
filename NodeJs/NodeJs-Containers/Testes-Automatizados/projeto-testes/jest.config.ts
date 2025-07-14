import type { Config } from "jest";

/**
 * bail -> Parar quando um teste falhar.
 * preset -> Carrega uma configuração pré-definida.
 * testEnvironment -> Define o ambiente em que os testes
 * irão rodar
 */
const config: Config = {
  bail: true,
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
