
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('generic_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('generic_table').insert([
        {integercolumn: 10, textcolumn: "hello hello", booleancolumn: true},
        {integercolumn: 1, textcolumn: "hello hello2", booleancolumn: false},
        {integercolumn: 11, textcolumn: "hello hello3", booleancolumn: false}
      ]);
    });
};
