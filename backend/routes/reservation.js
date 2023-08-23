const express = require("express");
const foodReservation = require("../models/Reservation");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Fetch All Item Reservation Detail: Get Method
router.get("/getReservation", async (req, res) => {
    try {
        const reservation = await foodReservation.find({});
        res.json(reservation);
    } catch (error) {
        // Send Error
        res.status(500).json({ Success: false, msg: "Some error occured" });
    }
});

// Add Reservation: Post Method
router.post("/addReservation",
    [
        body("name", "Name must be atleast 5 character").isLength({ min: 5 }),
        body("email", "Email must be atleast 10 character").isLength({ min: 10, }),
        body("phone", "Phone must be atleast 10 character").isLength({ min: 10, }),
        body("location", "Location must be atleast 5 character").isLength({ min: 5, }),
        body("date", "Date must be atleast 5 character").isLength({ min: 5, }),
        body("message", "Message must be atleast 5 character").isLength({ min: 5 }),
    ], async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }

        const { name, email, phone, location, date, message } = req.body;
        try {
            const reservation = new foodReservation({
                name,
                email,
                phone,
                location,
                date,
                message,
            });
            const saveReservation = await reservation.save();
            return res.json({ Success: true });
            //   Send Error
        } catch (error) {
            res.status(500).json({ Success: false, msg: "Some error occured" });
        }
    });


// Delete Reservation: Delete Method
router.delete("/deleteReservation/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let reservation = await foodReservation.findById(id);
        if (!reservation) {
            return res.status(404).json({ errors: "Not Found " });
        }

        reservation = await foodReservation.findByIdAndDelete(id);
        return res.json({ Success: true });

        // Send Error
    } catch (error) {
        res.status(500).json({ Success: false, msg: "Some error occured" });
    }
});

module.exports = router;
