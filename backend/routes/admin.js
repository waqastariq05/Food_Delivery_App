const express = require("express");
const Admin = require("../models/Admin");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const router = express.Router();

const JWT_SECRET = "FoodHub-$OrderYourFoodFromHome";

// Create A Admin: Post Method
router.post(
  "/createAdmin",
  [
    body("email", "Enter valid email").isEmail(),
    body("password", "Password must be atleast 7 character").isLength({
      min: 7,
    }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    let email = req.body.email;

    // Generate Password Hash
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      let admin = await Admin.create({
        email: req.body.email,
        password: secPassword,
      });

      const data = {
        user: {
          id: admin.id,
        },
      };
      const authToken = JWT.sign(data, JWT_SECRET);

      return res.json({ Success: true, authToken: authToken });

      // Send Error
    } catch (error) {
      res.status(500).send("Some error occured");
    }
  }
);

// Login An Admin: Post Method
router.post(
  "/loginAdmin",
  [
    body("email", "Enter valid email").isEmail(),
    body("password", "Incorrect Password").exists(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { email, password } = req.body;
    try {
      let admin = await Admin.findOne({ email });
      // Check User is exist or not
      if (!admin) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }

      // Check User password is match or not
      const passwordCompare = await bcrypt.compare(password, admin.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }

      const data = {
        user: {
          id: admin.id,
        },
      };
      const authToken = JWT.sign(data, JWT_SECRET);

      return res.json({
        Success: true,
        authToken: authToken,
      });

      // Send Error
    } catch (error) {
      res.status(500).json({ Success: false, msg: "Some error occured" });
    }
  }
);

module.exports = router;
