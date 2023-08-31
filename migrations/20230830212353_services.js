/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('services', function(table){
        table.increments('id_services').primary();
        table.string('description').notNullable();
        table.boolean('state').notNullable();
        table.double('final_pay').notNullable();
        table.integer('qualification').notNullable();
    
        table.integer('id_advance').unsigned();
        table.timestamps(true, true);
        
        table.foreign('id_advance').references('advances.id_advance');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("services").then(function (exists){
        if(exists){
            return knex.schema.dropTable("services");
        }
    })
};
