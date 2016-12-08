
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('garage').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('garage').insert({id: 1, year: '1990',make: 'Toyota', model: 'Camry'}),
        knex('garage').insert({id: 2, year: '2016', make: 'Ford', model: 'Mustang'}),
        knex('garage').insert({id: 3, year: '2015', make: 'Jeep', model: 'Wrangler'})
      ]);
    });
};
