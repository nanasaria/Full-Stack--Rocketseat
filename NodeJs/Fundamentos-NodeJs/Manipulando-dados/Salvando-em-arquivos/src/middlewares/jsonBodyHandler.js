export async function jsonBodyHandler(request, response) {
  /* Adicionar cada chunk. */
  const buffers = [];

  /* Coleta os chunks de dados da requisição */
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    /* Concatenar os chunks e converter para String.
    Em seguida, converte a string para JSON */
    const joined = Buffer.concat(buffers).toString();
    request.body = JSON.parse(joined);
  } catch (error) {
    request.body = null;
  }

  /* Define o header de resposta como JSON */
  response.setHeader("Content-Type", "application/json");
}
