var orm = require("../config/orm.js");

// Our burger model
var burger = {
  // the all burgers function
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The create burger function. The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // The update burger function.
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // The delete burger function
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
