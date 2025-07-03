import express from "express";

const PORT = 3333;

const app = express();

app.get("/", (request, response) => {});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
