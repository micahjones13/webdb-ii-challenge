exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
  .truncate() //delets data and resets the primary key back to 1
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '12345678901234567', make: "Toyota", model: "Camry", transmissionType: "Automatic", titleStatus: "Salvaged"},
        {vin: '12345678901234568', make: "Tesla", model: "3", transmissionType: "Automatic", titleStatus: "Clean"}
      ]);
    });
};
