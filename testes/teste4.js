import data from "../fakeData.js";

export default function (req, res) {
  const id = Number(req.params.id);
  const { name, job } = req.body;

  const user = data.find((u) => u.id === id);

  console.log(user);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (name) user.name = name;
  if (job) user.job = job;

  res.status(200).json({ message: `User updated successfully` });
}
