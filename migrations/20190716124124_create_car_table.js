exports.up = function(knex) {
    //we make changes to the db schmea 
    //always want to do a return 
    return knex.schema.createTable('cars', tbl => {
        //add a primary key
        tbl.increments();
  
        //other columns
        tbl.string('vin', 17)
        .unique()
        .notNullable();
        tbl.string('make');
        tbl.string('model');
        tbl.string('transmissionType');
        tbl.string('titleStatus'); //clean, salvaged
    })
  };
  
  exports.down = function(knex) {
    //we undo the changes to the db schema 
    return knex.schema.dropTableIfExists('cars');
  };


//   - The critical information for each car is the VIN,
//    make, model, and mileage. 
// - They also track transmission type and status
//  of the title (clean, salvage, etc.), 
// but this information is not always immediately known