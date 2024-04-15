const { Crud } = require("../Models/CRUD.model");

const getcontroller = async (req, res) => {
  try {
    const data = await Crud.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const postcontroller = async (req, res) => {
  try {
    const { name, email, comment } = req.body;
    console.log("working");
    const newcomment = await Crud.create({
      name,
      email,
      comment,
    });
    if (newcomment) {
      res.status(200).json({
        _id: newcomment._id,
        name: newcomment.name,
        email: newcomment.email,
        comment: newcomment.comment,
        message: "user comment added successfully",
      });
    } else {
      res
        .status(400)
        .json({ message: "there was an error adding user comment" });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Internal server error",
    });
  }
};

const deletecontroller = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedata = await Crud.findById(id);
    const data = await Crud.deleteOne({ _id: id });
    res.status(200).json({ deletedmessage:deletedata, essage: "comment deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updatecontroller = async (req, res) => {
  try {
    const id = req.params.id;
    const pastdata = await Crud.findById(id);
    const updatedata = req.body;
    const data = await Crud.findByIdAndUpdate(id, updatedata, {
      new: true,
    });
    res
      .status(200)
      .json({
        pastcomment: pastdata,
        newcomment: data,
        message: "comment data updated successfully",
      });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
module.exports = { getcontroller, postcontroller, deletecontroller, updatecontroller };
