
exports.up = async function(knex, Promise) {
    await knex.schema.hasTable("bike_parts_add");

    return await knex.schema.createTable("bike_parts_add", table => {
      table.increments("id").primary(),
        table.string("title"),
        table.string("price"),
        table.string("image"),
        table.string("description")
    });
    
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable("bike_parts_add");

};
