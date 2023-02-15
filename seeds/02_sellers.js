/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sellers').del()
  await knex('sellers').insert([
    {
      seller: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      seller: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      seller: 3,
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
};
