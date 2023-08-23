const express = require("express");
const foodItem = require("../models/Item");
const multer = require("multer");
const router = express.Router();

// Storage Food Item image
const storage = multer.diskStorage({
  destination: "./upload/items/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Fetch All Food Item: Get Method
router.get("/getItem/all", async (req, res) => {
  let ids = [];
  const categ = await foodItem.find({}, { categories: 1 });
  categ.forEach((cat) => {
    ids.push(cat.categories);
  });

  const cat = req.query.cat;
  let query = cat !== "" ? cat : ids;

  try {
    const items = await foodItem.find({ categories: query });
    res.json(items);
  } catch (error) {
    // Send Error
    res.status(500).json({ Success: false, msg: "Some error occured" });
  }
});

// Add Food Item: Post Method
router.post("/additem", upload.single("image"), async (req, res) => {
  const { title, description, price, categories } = req.body;
  const image = req.file.filename;
  try {
    const items = new foodItem({
      image,
      title,
      description,
      price,
      categories,
    });
    await items.save();
    return res.json({ Success: true });
    //   Send Error
  } catch (error) {
    res.status(500).json({ Success: false, msg: error });
  }
});

// Delete Item Category: Delete Method
router.delete("/deleteitem/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let item = await foodItem.findById(id);
    if (!item) {
      return res.status(404).json({ errors: "Not Found " });
    }

    item = await foodItem.findByIdAndDelete(id);
    return res.json({ Success: true });

    // Send Error
  } catch (error) {
    res.status(500).json({ Success: false, msg: "Some error occured" });
  }
});

module.exports = router;
