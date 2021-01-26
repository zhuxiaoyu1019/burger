const orm = require('../config/orm');

const burger = {
    all: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    add: function (burgerName, cb) {
        orm.insertOne(burgerName, function (res) {
            cb(res);
        });
    },
    update: function (devoured, burgerId, cb) {
        orm.updateOne(devoured, burgerId, function (res) {
            cb(res);
        });
    },
    delete: function (burgerName, cb) {
        orm.deleteOne(burgerName, function (res) {
            cb(res);
        });
    }
}

// Export the database functions for the controller (burgerController.js).
module.exports = burger;