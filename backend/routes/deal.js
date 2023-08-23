const express = require("express");
const foodDeal = require("../models/Deals");
const { body, validationResult } = require("express-validator");
const multer = require("multer");
const router = express.Router();

// Storage Food Item image
const storage = multer.diskStorage({
    destination: "./upload/items/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });

// Fetch All Food Deals: Get Method
router.get("/getDeal", async (req, res) => {
    try {
        const deals = await foodDeal.find({});
        res.json(deals);
    } catch (error) {
        // Send Error
        res.status(500).json({ Success: false, msg: "Some error occured" });
    }
});

// Add Food Deals: Post Method
router.post("/addDeal", upload.single("image"), async (req, res) => {
    const { title, description, price } = req.body;
    const image = req.file.filename;
    try {
        const deals = new foodDeal({
            image,
            title,
            description,
            price,
        });
        await deals.save();
        return res.json({ Success: true });
        //   Send Error
    } catch (error) {
        res.status(500).json({ Success: false, msg: "Some error occured" });
    }
});

// Delete Item Deal: Delete Method
router.delete("/deleteDeal/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let deal = await foodDeal.findById(id);
        if (!deal) {
            return res.status(404).json({ errors: "Not Found " });
        }

        deal = await foodDeal.findByIdAndDelete(id);
        return res.json({ Success: true });

        // Send Error
    } catch (error) {
        res.status(500).json({ Success: false, msg: "Some error occured" });
    }
});

module.exports = router;
