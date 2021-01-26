const connection = require('./connection');

const orm = {
    selectAll: (cb) => {
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: (burgerName, cb) => {
        const queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burgerName], (err, data) => {
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
    },
    deleteOne: (burgerName, cb) => {
        const queryString = "DELETE FROM burgers WHERE burger_name = ?;";
        connection.query(queryString, [burgerName], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    }
}

module.exports = orm;