/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sellers_properties').del()
  await knex('sellers_properties').insert([
    {
      property_id: 1,
      seller_id: 1
    },
    {
      property_id: 2,
      seller_id: 2
    },
    {
      property_id: 3,
      seller_id: 3
    }
  ]);
};
