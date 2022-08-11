// Referência: Conteúdo da Trybe sobre testes de integração na plataforma Course.

const ToDoList = require('./to-do-list.json');

const mockCreate = (Instance, data) => {
  if(!data){
    return;
  }

  const newData = data;
  if(!!Instance[0].id) {
    newData.id = Date.now();
  }
  Instance.push(newData);
  return newData;
};

const List = {
  create: async (data) => mockCreate(ToDoList, data),
  findAll: async () => ToDoList,
  update: async (data) => mockCreate(ToDoList, data),
  delete: async (data) => mockCreate(ToDoList, data),
};

module.exports = {
  List,
};