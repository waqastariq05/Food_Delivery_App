const express = require("express");
const foodOrder = require("../models/Order");
const router = express.Router();

// Fetch All Item Orders: Get Method
router.get("/getOrder", async (req, res) => {
    try {
        const order = await foodOrder.find({});
        res.json(order);
    } catch (error) {
        // Send Error
        res.status(500).json({ Success: false, msg: "Some error occured" });
    }
});

// Add Order: Post Method
router.post("/addOrder", async (req, res) => {
    const { name, email, phone, country, address, orderData } = req.body;
    try {
        const order = new foodOrder({
            name,
            email,
            phone,
            country,
            address,
            orderData,
        });
        await order.save();
        return res.json({ Success: true });
        //   Send Error
    } catch (error) {
        res.status(500).json({ Success: false, msg: "Some error occured" });
    }
});


// Delete Order: Delete Method
router.delete("/deleteOrder/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let order = await foodOrder.findById(id);
        if (!order) {
            return res.status(404).json({ errors: "Not Found " });
        }

        order = await foodOrder.findByIdAndDelete(id);
        return res.json({ Success: true });

        // Send Error
    } catch (error) {
        res.status(500).json({ Success: false, msg: "Some error occured" });
    }
});

module.exports = router;
