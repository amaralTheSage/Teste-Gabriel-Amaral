import accessList from "../accessCounter.js";

export default function (req, res) {
  const name = req.query.name;

  const count = accessList.find((u) => u.name === name).count;

  res.send(`Usuário ${name} foi visto ${count} vezes.`);
}
