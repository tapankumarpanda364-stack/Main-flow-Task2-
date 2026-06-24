const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const contact = await Contact.create({ name, email, subject, message });
    return res.status(201).json({ message: "Message saved successfully.", contact });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({ message: "Server error while saving message." });
  }
});

router.get("/messages", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ message: "Server error while retrieving messages." });
  }
});

router.delete("/messages/:id", async (req, res) => {
  try {
    const deletedMessage = await Contact.findByIdAndDelete(req.params.id);

    if (!deletedMessage) {
      return res.status(404).json({ message: "Message not found." });
    }

    return res.status(200).json({ message: "Message deleted successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Server error while deleting message." });
  }
});

module.exports = router;
