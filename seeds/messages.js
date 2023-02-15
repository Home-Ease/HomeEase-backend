/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('messages').del()
  await knex('messages').insert([
    {
      sender_id: 1,
      reciever_id: 2,
      text: 'Hello, how are you?'
    },
    {
      sender_id: 2,
      reciever_id: 1,
      text: 'I am doing well, thank you for asking. How about you?'
    },
    {
      sender_id: 1,
      reciever_id: 3,
      text: 'Hi, let\'s schedule a meeting.'
    }
  ]);
};
