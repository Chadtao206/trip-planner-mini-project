const router = require("express").Router();
const {Traveller} = require("../../models")

router.get("/", async (req, res) => {
    //get all Trips
    try {

        const travellers = await Traveller.findAll();
        res.status(200).json(travellers);
    } catch (err) {
        console.log("oopsies something went wrong", err);
        res.status(500).json(err)
    }
})

router.post("/", async (req, res) => {
    //create a Trip
    try {
        const result = await Trip.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        console.log("oopsies something went wrong", err);
        res.status(500).json(err)
    }
});

router.get("/:id", async (req, res) => {
    //TODO - GET A PARTICULAR TRIP BASED ON TRIP ID, INCLUDE TRAVELLERS AND LOCATION AS WELL
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