const mongoose = require("mongoose");

const CRUDschema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  { timestamp: true }
);

const Crud = new mongoose.model("Crud", CRUDschema);
module.exports = { Crud };
