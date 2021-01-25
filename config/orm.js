const connection = require('./connection');

const orm = {
    selectAll: (cb) => {
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: (burgerName, devoured, cb) => {
        const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
        connection.query(queryString, [burgerName, devoured], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: (devoured, burgerId, cb) => {
        const queryString = "UPDATE burgers SET devoured = ? WHERE id = ?;";
        connection.query(queryString, [devoured, burgerId], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    }
}

module.exports = orm;