/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('showings').del()
  await knex('showings').insert([
    {
      property: 1,
      time: '10:00am',
      date: '2023-02-11'
    },
    {
      property: 2,
      time: '01:00pm',
      date: '2023-02-12'
    },
    {
      property: 3,
      time: '03:00pm',
      date: '2023-02-13'
    }
  ]);
};
