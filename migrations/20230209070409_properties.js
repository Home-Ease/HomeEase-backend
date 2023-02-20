/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("properties", table => {
        table.increments('id').primary();
        table.integer("houseNumber").notNullable;
        table.string("streetName").notNullable;
        table.string("city").notNullable;
        table.string("state").notNullable;
        table.integer("zip").notNullable;
        table.integer("price").notNullable
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("properties")
};
