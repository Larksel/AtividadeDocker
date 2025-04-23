import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;
app.use(cors());

app.get('/api/users', (_req, res) => {
  res.status(200).send('Listando usuários');
});

app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  res.status(200).send('Listando usuário com id: ' + userId);
});

app.post('/api/users', (req, res) => {
  const { nome, senha } = req.body;
  res.status(200).send(`Criando novo usuário com nome ${nome} e senha ${senha}`);
});

app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  res.status(200).send(`Atualizando usuário com id ${userId}`);
});

app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  res.status(200).send(`Excluindo usuário com id ${userId}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});