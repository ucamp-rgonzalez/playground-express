import database from '../config/database.js';

const getUsers = (request, response) => {
  database.all(
    `
      SELECT id, email, name
      FROM user
    `,
    (error, data) => {
      console.log(data)
      response.json(data);
    },
  );
};

const createUser = (request, response) => {
  const { email, name } = request.body;
  database.run(
    `
      INSERT INTO user (email, name)
      VALUES (?, ?)
    `,
    [email, name],
    (error) => {
      console.log(error);
      response.json(true);
    },
  );
};

const updateUser = (request, response) => {
  const data = request.body;
  const { id } = request.params;
  response.json(true);
};

const deleteUser = (request, response) => {
  const data = request.body;
  const { id } = request.params;
  response.json(true);
};

export default (app) => {
  app.get('/users', getUsers);
  app.post('/users', createUser);
  app.put('/users/:id', updateUser);
  app.delete('/users/:id', deleteUser);
};
