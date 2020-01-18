// Requiring our models
var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {
    // GET route for getting all of the hikes
    app.get("/api/hikes", function (req, res) {

        db.hikes.findAll({}).then(function (hikes) {
            // We have access to the hikes as an argument inside of the callback function
            console.log('~~~~~~~~~~', hikes)
            res.json(hikes);
        });
    });

    // POST route for saving new visitor count
    app.post("/api/hikes", function (req, res) {

        db.hikes.findAll({ where: { hike_ID_API: req.body.hike } })
            .then(result => {
                var match = null
                if (result.length > 0) {
                    match = result[0].dataValues
                }
                if (match) {
                    db.hikes.update({ visitor_count: match.visitor_count + 1 }, { where: { hike_ID_API: req.body.hike } })
                        .then(result2 => {
                            console.log('HIKE UPDATED:', result2)
                            res.json(match.visitor_count + 1)
                        })
                } else {
                    db.hikes.create({
                        hike_ID_API: req.body.hike,
                        visitor_count: 1
                    }).then(function (HikeSD_db) {
                        console.log('HIKE CREATED', HikeSD_db)
                        res.json(HikeSD_db);
                    })
                }
            })
    });
}