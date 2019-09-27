import * as axios from "axios";
import { BONGO_API } from "@/shared/config";

const getBusesLocations = async (agency, route_id) => {
    try {
        const res = await axios.get(`${BONGO_API}/buslocation?agency=${agency}&route=${route_id}`)
        return res.data.buses
    } catch (e) {
        return []
    }
}

export const busesServices =  {
    getBusesLocations
}