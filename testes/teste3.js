/* Modificações:
      1. Reescrevi o método, utilizando o método 'findIndex' do JS para encontrar o índice da lista e remover o user.
  */

import data from "../fakeData.js";

export default function (req, res) {
  const id = Number(req.params.id);

  const index = data.findIndex((u) => u.id === id);

  console.log(id, index);

  if (index === -1) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  data.splice(index, 1);

  res.send(`Usuário com ID ${id} removido com sucesso`);
}
