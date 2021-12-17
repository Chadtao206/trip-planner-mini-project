const router = require("express").Router();
const {Location} = require("../../models")

router.get("/", async (req, res) => {
    //TODO get all Locations
})

router.post("/", async (req, res) => {
    //TODO Create a location
});

router.get("/:id", async (req, res) => {
    //TODO - GET A PARTICULAR LCOATION BASED ON LOCATION ID, INCLUDE TRAVELLERS AND LOCATION AS WELL
})

router.delete("/:id", async (req, res) => {
    //delete a Location
});

module.exports = router;