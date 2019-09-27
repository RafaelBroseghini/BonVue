import * as axios from "axios";
import { BONGO_API, AWS_API } from "../config";


const getRoutes = async () => {
    try {
      const res = await axios.get(`${AWS_API}`);
      return res.data
    } catch (error) {
      console.error(error);
      return [];
    }
  };

const getRoute = async (agency, id) => {
    try {
      const response = await axios.get(`${BONGO_API}/route?agency=${agency}&route=${id}`);
      return response.data.route;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

const getRoutesPaths = async () => {
  try {
    const response = await axios.get(`${AWS_API}/path`)
    return response.data
  } catch (e) {
    console.log(error)
    return []
  }
}

export const routeServices = {
    getRoutes,
    getRoute,
    getRoutesPaths
}