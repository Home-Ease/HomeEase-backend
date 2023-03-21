/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('properties').del()
  await knex('properties').insert([
    {
      houseNumber: 123,
      streetName: 'Main St',
      city: 'New York',
      state: 'NY',
      zip: 10001,
      price: 500000
    },
    {
      houseNumber: 456,
      streetName: 'Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zip: 90001,
      price: 1000000
    },
    {
      houseNumber: 789,
      streetName: 'Maple St',
      city: 'Chicago',
      state: 'IL',
      zip: 60601,
      price: 800000
    },
    {
      houseNumber: 345,
      streetName: 'hoit st',
      city: 'New York',
      state: "NY",
      zip: 10031,
      price: 500000
    },
    {
      houseNumber: 35,
      streetName: 'burberry st',
      city: 'New York',
      state: "NY",
      zip: 10031,
      price: 600000
    },
    {
      houseNumber: 3,
      streetName: 'aldair st',
      city: 'Brooklyn',
      state: "NY",
      zip: 10031,
      price: 500000
    },
    {
      houseNumber: 5,
      streetName: 'gupz ave',
      city: 'Brooklyn',
      state: "NY",
      zip: 10031,
      price: 200000
    },
    {
      houseNumber: 8,
      streetName: 'jose ave',
      city: 'New York',
      state: "NY",
      zip: 10031,
      price: 1000000
    },
    {
      houseNumber:71,
      streetName: 'Teresa Pl',
      city: 'Hempstead',
      state:"NY",
      zip:11550,
      price:800000
    },
    {
      houseNumber:443,
      streetName: 'Greene Ave',
      city: 'Brooklyn',
      state:"NY",
      zip:11216,
      price:800000
    }
  ])
  
};
