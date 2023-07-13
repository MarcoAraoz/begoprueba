import Trucks from "../models/trucks.model.js";

export const getTrucks = async (req, res) => {
  try {
    const trucks = await Trucks.find();
    res.json(trucks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTruck = async (req, res) => {
  try {
    const { model, make, year, color, transportWeight, created_at } = req.body;
    const newTruck = new Trucks({
      model,
      make,
      year,
      color,
      transportWeight,
      created_at,
      // user: req.user.id,
    });
    await newTruck.save();
    res.json(newTruck);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTruck = async (req, res) => {
  try {
    const truck = await Trucks.findById(req.params.id);
    if (!truck) return res.status(404).json({ message: "truck not found" });
    return res.json(truck);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// export const deleteTruck = async (req, res) => {
//     try {
//       const point = await Points.findById(req.params.id);
//       if (!point) {
//         return res.status(404).json({ message: "Point not found" });
//       }

//       // if (order.status === "processing") {
//       //   return res
//       //     .status(400)
//       //     .json({ message: "Cannot delete an order in progress" });
//       // }

//       await Points.findByIdAndDelete(req.params.id);
//       return res.sendStatus(204);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   };

export const updateTruck = async (req, res) => {
  try {
    const { model, make, year, color, transportWeight, created_at } = req.body;
    const truck = await Trucks.findById(req.params.id);

    if (!truck) {
      return res.status(404).json({ message: "Truck not found" });
    }

    // if (order.status === "processing") {
    //   return res
    //     .status(400)
    //     .json({ message: "Cannot modify an order in progress" });
    // }

    const truckUpdated = await Trucks.findOneAndUpdate(
      { _id: req.params.id },
      { model, make, year, color, transportWeight, created_at },
      { new: true }
    );

    return res.json(truckUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
