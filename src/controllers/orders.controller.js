import Order from "../models/order.model.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate("user");
    res.json(orders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
    try {
      const { description, route, status } = req.body;
      const newOrder = new Order({
        description,
        route,
        status,
        user: req.user.id,
      });
      await newOrder.save();
      res.json(newOrder);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    return res.json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// export const deleteOrder = async (req, res) => {
//   try {
//     const order = await Order.findByIdAndDelete(req.params.id);
//     if (!order)
//       return res.status(404).json({ message: "Order not found" });

//     return res.sendStatus(204);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

export const deleteOrder = async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
  
      if (order.status === "processing") {
        return res
          .status(400)
          .json({ message: "Cannot delete an order in progress" });
      }
  
      await Order.findByIdAndDelete(req.params.id);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  

// export const updateOrder = async (req, res) => {
//   try {
//     const { description, route, status } = req.body;
//     const orderUpdated = await Order.findOneAndUpdate(
//       { _id: req.params.id },
//       { description, route, status},
//       { new: true }
//     );
//     return res.json(orderUpdated);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

export const updateOrder = async (req, res) => {
    try {
      const { description, route, status } = req.body;
      const order = await Order.findById(req.params.id);
  
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
  
      if (order.status === "processing") {
        return res
          .status(400)
          .json({ message: "Cannot modify an order in progress" });
      }
  
      const orderUpdated = await Order.findOneAndUpdate(
        { _id: req.params.id },
        { description, route, status },
        { new: true }
      );
  
      return res.json(orderUpdated);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };