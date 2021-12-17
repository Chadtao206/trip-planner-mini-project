const router = require("express").Router();
const {Trip, Traveller, Location} = require("../../models")

router.get("/", async (req, res) => {
    //get all travellers
    try {

        const trip = await Trip.findAll({
            include: [{model:Traveller}, {model:Location}]
        });
        res.status(200).json(trip);
    } catch (err) {
        console.log("oopsies something went wrong", err);
        res.status(500).json(err)
    }
})

router.post("/", async (req, res) => {
    //create a traveller
    try {
        const result = await Trip.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        console.log("oopsies something went wrong", err);
        res.status(500).json(err)
    }
});

router.get("/:id", async (req, res) => {
    //get a particular traveller
})

router.delete("/:id", async (req, res) => {
    //delete a traveller
        try {
            const result = await Traveller.destroy({ where: { id: req.params.id } });
        res.status(200).json(result)
    } catch (err) {
        console.log("oopsies something went wrong", err);
        res.status(500).json(err)
    }
});

module.exports = router;