/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('contractors', function(table){
        table.increments('id_contractor').primary();
        table.string('name').unique().notNullable();
        table.string('email').notNullable();
        table.string('direction').notNullable();
        table.string('phone').notNullable();
        table.double('hourly_pay').notNullable();
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("contractors").then(function (exists){
        if(exists){
            return knex.schema.dropTable("contractors");
        }
    })
};
