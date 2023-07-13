import axios from "axios";
import Routes from "../models/routes.model.js";
import { API_KEY } from "../config.js";


export const getRoutes = async (req, res) => {
  try {
    const routes = await Routes.find({ user: req.user.id }).populate("user");
    res.json(routes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createRoute = async (req, res) => {
  try {
    const { origenPlaceId, destinoPlaceId } = req.body;

    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${origenPlaceId}&destination=place_id:${destinoPlaceId}&key=${API_KEY}`;
    const response = await axios.get(url);

    const route = response.data.routes[0];
    const distance = route.legs[0].distance.text;
    const duration = route.legs[0].duration.text;

    const nuevaRuta = new Routes({
      origenPlaceId,
      destinoPlaceId,
      distance,
      duration,
      user: req.user.id
    });

    await nuevaRuta.save();
    res.json(nuevaRuta);
  } catch (error) {
    console.error("Error al crear la ruta:", error);
    res.status(500).json({ error: "Error al crear la ruta" });
  }
};

export const getRoute = async (req, res) => {
  
  try {
    const { id } = req.params;
    const ruta = await Routes.findById(id);
    res.json(ruta);
  } catch (error) {
    console.error("Error al obtener la ruta:", error);
    res.status(500).json({ error: "Error al obtener la ruta" });
  }
};

export const deleteRoute = async (req, res) => {
  try {
    const route = await Routes.findById(req.params.id);
    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }

    // if (order.status === "processing") {
    //   return res
    //     .status(400)
    //     .json({ message: "Cannot delete an order in progress" });
    // }

    await Routes.findByIdAndDelete(req.params.id);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const updateRoute = async (req, res) => {
  try {
    const { origenPlaceId, destinoPlaceId } = req.body;
    const route = await Routes.findById(req.params.id);

    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }

    // if (order.status === "processing") {
    //   return res
    //     .status(400)
    //     .json({ message: "Cannot modify an order in progress" });
    // }

    const routeUpdated = await Routes.findOneAndUpdate(
      { _id: req.params.id },
      { origenPlaceId, destinoPlaceId } ,
      { new: true }
    );

    return res.json(routeUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
