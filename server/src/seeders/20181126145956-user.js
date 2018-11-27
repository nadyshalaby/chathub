const faker = require("faker");

module.exports = {
  up: queryInterface => {
    const users = [];
    const password =
      "$2a$10$MCcicYNdc2HTchBqMfGeq.JDGVpKWJYntDwE9a8gjFukoRVw0SuT6";
    for (let i = 0; i < 50; i++) {
      users.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.firstName(),
        email: faker.internet.email(),
        password,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return queryInterface.bulkInsert("Users", users, {});
  },

  down: queryInterface => queryInterface.bulkDelete("Users", null, {})
};
