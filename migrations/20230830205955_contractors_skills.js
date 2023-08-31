/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('contractors_skills', function(table) {
        table.integer('id_contractor').unsigned();
        table.integer('id_skill').unsigned();
        
        table.foreign('id_contractor').references('contractors.id_contractor');
        table.foreign('id_skill').references('skills.id_skill');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("contractors_skills").then(function (exists){
        if(exists){
            return knex.schema.dropTable("contractors_skills");
        }
    })
};
