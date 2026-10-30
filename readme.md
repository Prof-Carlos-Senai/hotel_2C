# 🏨 Sistema de Gestão Hoteleira (Full-Stack Web)

Aplicação web full-stack desenvolvida para fins educacionais, estruturada com um CRUD completo (*Cadastrar, Listar, Consultar, Atualizar e Apagar*) para gerenciamento de **Hóspedes** e **Quartos**.

---

## 🛠️ Tecnologias Utilizadas

### **Back-End**
* **Node.js** com **Express** (Padrão REST)
* **Sequelize ORM** (Integração e mapeamento objeto-relacional)
* **MySQL** (Banco de dados relacional)
* **CORS** (Middleware de segurança e comunicação)

### **Front-End**
* **HTML5** e **CSS3** (Interface estilizada baseada nos requisitos institucionais)
* **JavaScript (ES6+ / Fetch API)** (Comunicação assíncrona com o Back-End)

---

### 📋 Endpoints da API (Rotas REST)

#### Hóspedes
* `- POST /hospede` - Cadastra um novo hóspede.
* `- GET /hospedes` - Lista todos os hóspedes cadastrados.
* `- GET /hospede/:id` - Consulta um hóspede específico por código (ID).
* `- PUT /hospede/:id` - Atualiza os dados de um hóspede.
* `- DELETE /hospede/:id` - Remove um hóspede do sistema.

#### Quartos
* `- POST /quarto` - Cadastra um novo quarto vinculado a um hóspede.
* `- GET /quartos` - Lista todos os quartos cadastrados.
* `- GET /quarto/:id` - Consulta um quarto específico por código (ID).
* `- PUT /quarto/:id` - Atualiza as informações de um quarto.
* `- DELETE /quarto/:id` - Remove um quarto do sistema.

