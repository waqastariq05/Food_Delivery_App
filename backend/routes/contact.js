const express = require("express");
const foodContact = require("../models/Contact");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Fetch All Item Contact Message: Get Method
router.get("/getcontact", async (req, res) => {
    try {
        const contacts = await foodContact.find({});
        res.json(contacts);
    } catch (error) {
        // Send Error
        res.status(500).json({ Success: false, msg: "Some error occured" });
    }
});

// Add Contact message: Post Method
router.post("/addcontact",
    [
        body("name", "Name must be atleast 5 character").isLength({ min: 5 }),
        body("email", "Email must be atleast 10 character").isLength({
            min: 10,
        }),
        body("message", "Message must be atleast 5 character").isLength({ min: 5 }),
    ], async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }

        const { name, email, message } = req.body;
        try {
            const contacts = new foodContact({
                name,
                email,
                message,
            });
            const saveContact = await contacts.save();
            return res.json({ Success: true });
            //   Send Error
        } catch (error) {
            res.status(500).json({ Success: false, msg: "Some error occured" });
        }
    });


// Delete Item Category: Delete Method
router.delete("/deleteContact/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let contacts = await foodContact.findById(id);
        if (!contacts) {
            return res.status(404).json({ errors: "Not Found " });
        }

        contacts = await foodContact.findByIdAndDelete(id);
        return res.json({ Success: true });

        // Send Error
    } catch (error) {
        res.status(500).json({ Success: false, msg: "Some error occured" });
    }
});

module.exports = router;
