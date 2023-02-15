/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password',
      seller: false
    },
    {
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      password: 'password',
      seller: true
    },
    {
      name: 'Bob Smith',
      email: 'bobsmith@example.com',
      password: 'password',
      seller: false
    }
  ]);
};
