# 🐳 Deploy com Docker + Docker Compose

## 📌 1º Passo

Foi desenvolvida uma API com uma aplicação em **React**.

---

## 📌 2º Passo

Foram criados arquivos Docker nos dois projetos (Frontend e Backend):

- **🛠 Container Backend:** utiliza uma imagem Node como base. As dependências foram instaladas e os arquivos do projeto copiados para o container.
Por fim, a porta 3001 é exposta e a aplicação é iniciada.

- **🧭 Container Frontend:** segue o mesmo processo do container Backend, com a diferença de que utiliza um servidor Nginx para executar a aplicação.

---

## 📌 3º Passo

Foi criado um arquivo **Docker Compose** para orquestrar os containers:
- O container do backend foi nomeado como express-api, com a porta 3001 mapeada para a mesma porta do host.
- O container do frontend foi nomeado como react-app, com a porta 80 (padrão do Nginx) mapeada para a porta 3000 do host.
- Além disso, o frontend depende do backend, e ambos os containers estão conectados a uma rede comum no modo bridge (ponte).

---

## 📌 4º Passo

Para subir os containers, foi executado o comando abaixo:

```bash
docker-compose up --build
