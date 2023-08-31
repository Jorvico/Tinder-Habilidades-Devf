/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('skills', function(table){
        table.increments('id_skill').primary();
        table.string('name').unique().notNullable();
        table.string('description').unique().notNullable();
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("skills").then(function (exists){
        if(exists){
            return knex.schema.dropTable("skills");
        }
    })
};
