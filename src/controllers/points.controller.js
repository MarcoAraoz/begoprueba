import Points from "../models/points.model.js";
// import Order from "../models/order.model.js";

export const getPoints = async (req, res) => {
  try {
    const points = await Points.find();
    res.json(points);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPoint = async (req, res) => {
    try {
      const { location } = req.body;
      const newPoint = new Points({
        location,
        // user: req.user.id,
      });
      await newPoint.save();
      res.json(newPoint);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

export const getPoint = async (req, res) => {
  try {
    const point = await Points.findById(req.params.id);
    if (!point) return res.status(404).json({ message: "Point not found" });
    return res.json(point);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePoint = async (req, res) => {
    try {
      const point = await Points.findById(req.params.id);
      if (!point) {
        return res.status(404).json({ message: "Point not found" });
      }
  
      // if (order.status === "processing") {
      //   return res
      //     .status(400)
      //     .json({ message: "Cannot delete an order in progress" });
      // }
  
      await Points.findByIdAndDelete(req.params.id);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

export const updatePoint = async (req, res) => {
    try {
      const { location } = req.body;
      const point = await Points.findById(req.params.id);
  
      if (!point) {
        return res.status(404).json({ message: "Point not found" });
      }
  
      // if (order.status === "processing") {
      //   return res
      //     .status(400)
      //     .json({ message: "Cannot modify an order in progress" });
      // }
  
      const pointUpdated = await Points.findOneAndUpdate(
        { _id: req.params.id },
        { location },
        { new: true }
      );
  
      return res.json(pointUpdated);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };