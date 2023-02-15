/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("showings", table => {
        table.increments('id').primary();
        table.integer("property").references("id").inTable("properties")
        table.string("time").notNullable()
        table.string("date").notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("showings")
};
