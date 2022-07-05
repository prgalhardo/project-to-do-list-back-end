# project-to-do-list-back-end

- Instalação e configuração do ESlint;
- Instalação do mocha, chai, sinon e chai-Http;
- Instalação do typescript;
- Instalação do sequelize, sequelize-cli e mysql2;
- Instalação do dotenv;
- Instalação do ts-node-dev;
- Instalação do types-node;
- Instalação do types-express;
- Criação do arquivo mock para um banco de dados para realizar o TDD;
- Criação do arquivo app;
- Criação das migration, model e seeder;
- Criação da interface de To Do List;
- Criação da service com os métodos CRUD;
- Criação da controller com os métodos CRUD;


- Problemas com a query do sequelize:
* Ao criar a migration o timestamps estava como false, porém existia o campo createdAt na tabela e na model ele estava setado para ser criado manualmente isso estava gerando conflitos na hora de fazer uma requisição no insomnia. Solução: Deixar setado para o próprio db criar os campos createdAt e updatedAt.




