const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get("/", (req, res) => {
    burger.all(data => {
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", (req, res) => {
    burger.add(req.body.burger_name, () => {
        res.send(true);
    });
});

router.put("/api/burgers/:id", (req, res) => {
    burger.update(req.body.devoured, req.params.id, data => {
        if (data.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:name", (req, res) => {
    burger.delete(req.params.name, data => {
        if (data.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
