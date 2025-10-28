/* Modificações:
    1. Atualizei o método de importação para o ES Modules
    2. Removi bodyParser, cuja função agora é incluída no express
    3. Jade serve para renderizar templates .jade ou .pug em HTML. Como o app não consta com esses templates, removi o código referente à Jade;
    4. Removi a função express.static(), que não tinha utilidade neste contexto;
    5. Optei por usar parâmetros de rota no DELETE e PUT, ao invés de valores de query;
*/

import express from "express";

import * as teste1 from "./testes/teste1.js";
import teste2 from "./testes/teste2.js";
import teste3 from "./testes/teste3.js";
import teste4 from "./testes/teste4.js";
import teste5 from "./testes/teste5.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <ul>
      <li>GET /user</li>
      <li>GET /users</li>
      <li>POST /users</li>
      <li>DELETE /users</li>
      <li>PUT /users</li>
      <li>GET /users/access</li>
    </ul>
  `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);

app.post("/users", teste2);

app.delete("/users/:id", teste3);

app.put("/users/:id", teste4);

app.get("/users/access", teste5);

app.listen(3000, () => console.log("🚀 Server on http://localhost:3000"));
