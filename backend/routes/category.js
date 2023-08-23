const express = require("express");
const foodCategories = require("../models/Category");
const router = express.Router();

// Fetch All Item Category: Get Method
router.get("/getcategory", async (req, res) => {
  try {
    const categories = await foodCategories.find({});
    res.json(categories);
  } catch (error) {
    // Send Error
    res.status(500).json({ Success: false, msg: "Some error occured" });
  }
});

// Add Item Category: Post Method
router.post("/addcategory", async (req, res) => {
  const { name } = req.body;
  try {
    const categories = new foodCategories({
      name,
    });
    const saveCate = await categories.save();
    return res.json({ Success: true });
    //   Send Error
  } catch (error) {
    res.status(500).json({ Success: false, msg: "Some error occured" });
  }
});

// Delete Item Category: Delete Method
router.delete("/deletecategory/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let categories = await foodCategories.findById(id);
    if (!categories) {
      return res.status(404).json({ errors: "Not Found " });
    }

    categories = await foodCategories.findByIdAndDelete(id);
    return res.json({ Success: true });

    // Send Error
  } catch (error) {
    res.status(500).json({ Success: false, msg: "Some error occured" });
  }
});

module.exports = router;
