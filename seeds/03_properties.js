/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('properties').del()
  await knex('properties').insert([
    {
      id:1,
      houseNumber: 123,
      streetName: 'Main St',
      city: 'New York',
      state: 'NY',
      zip: 10001,
      price: '$500,000'
    },
    {
      id:2,
      houseNumber: 456,
      streetName: 'Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zip: 90001,
      price: '$1,000,000'
    },
    {
      id:3,
      houseNumber: 789,
      streetName: 'Maple St',
      city: 'Chicago',
      state: 'IL',
      zip: 60601,
      price: '$800,000'
    }
  ])
  
};
