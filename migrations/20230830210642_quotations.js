/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('quotations', function(table){
        table.increments('id_quotation').primary();
        table.string('description').notNullable();
        table.boolean('state').notNullable();
        table.double('total_pay').notNullable();
        
        table.integer('id_company').unsigned();
        table.integer('id_contractor').unsigned();
        table.timestamps(true, true);
        
        table.foreign('id_company').references('companies.id_company');
        table.foreign('id_contractor').references('contractors.id_contractor');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("quotations").then(function (exists){
        if(exists){
            return knex.schema.dropTable("quotations");
        }
    })
};
