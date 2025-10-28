import data from "../fakeData.js";

/* Modificações:
    1. Substituição do declarador de variável obsoleto 'var' pelo indicado 'const'. O mesmo foi feito nas páginas seguintes;
    2. Substituição do método CommonJS pelo ES Modules, nesta como nas outras páginas;
    3. Re-escrevi a função getUser, para que funcione a query por nome. Ex: http://localhost:3000/user?name=João%20Oliveira
*/

export function getUser(req, res, next) {
  const name = req.query.name;
  const user = data.find((u) => u.name === name);

  if (user) return res.send(user);

  res.status(404).send({ message: "Usuário não encontrado" });
}

export const getUsers = (req, res, next) => {
  res.send(data);
};
