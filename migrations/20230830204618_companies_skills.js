/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('companies_skills', function(table) {
        table.integer('id_company').unsigned();
        table.integer('id_skill').unsigned();
        
        table.foreign('id_company').references('companies.id_company');
        table.foreign('id_skill').references('skills.id_skill');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("companies_skills").then(function (exists){
        if(exists){
            return knex.schema.dropTable("companies_skills");
        }
    })
};
