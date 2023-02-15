/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("sellers_properties", table => {
    table.increments('id').primary();
    table.integer("property_id").references("id").inTable("properties")
    table.integer("seller_id").references("id").inTable("sellers")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sellers_properties")
};
