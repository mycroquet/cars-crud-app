exports.up = function(knex, Promise) {
    return knex.schema.createTable('garage', function(table) {
        table.integer('year');
        table.text('make');
        table.text('model');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('garage');
};
