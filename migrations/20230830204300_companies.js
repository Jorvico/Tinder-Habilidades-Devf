/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('companies', function(table){
        table.increments('id_company').primary();
        table.string('name').unique().notNullable();
        table.string('email').notNullable();
        table.string('direction').notNullable();
        table.string('phone').notNullable();
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("companies").then(function (exists){
        if(exists){
            return knex.schema.dropTable("companies");
        }
    })
};
