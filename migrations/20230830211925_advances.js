/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('advances', function(table){
        table.increments('id_advance').primary();
        table.double('advance_pay').notNullable;
        table.string('description').unique().notNullable();
        table.boolean('state').notNullable();
        table.integer('id_quotation').unsigned();
        table.timestamps(true, true);
        
        table.foreign('id_quotation').references('quotations.id_quotation');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("advances").then(function (exists){
        if(exists){
            return knex.schema.dropTable("advances");
        }
    })
};
