import * as axios from "axios";
import { BONGO_API, AWS_API } from "../config";

const getStop = async function (id) {
    try {
        const stop = await axios.get(`${BONGO_API}/stop?stopid=${id}`)
        return stop.data.stopinfo
    } catch (e) {
        return []
    }

}

const getRouteStops = function(route) {
    return route.directions[0].stops;
}
  
const modifyStopArrayKeys = function(stopArr) {
    stopArr.forEach(stop => {
        stop.lat = stop["stoplat"]
        stop.lng = stop["stoplng"]
        delete stop["stoplat"]
        delete stop["stoplng"]
    });
}
  
const getStopsCoordsArr = (arr) => {
    let route = getRouteStops(arr);
    modifyStopArrayKeys(route)
    return route;
}

const getNonSharedStops = async () => {
    try {
        const non_shared_stops = await axios.get(`${AWS_API}/non-shared-stops`)
        return non_shared_stops.data
    } catch (e) {
        return []
    }
}

const getSharedStops = async () => {
    try {
        const shared_stops = await axios.get(`${AWS_API}/shared-stops`)
        return shared_stops.data
    } catch (e) {
        return []
    }
}

export const stopServices = {
    getStop,
    getRouteStops,
    getSharedStops,
    getNonSharedStops,
    getStopsCoordsArr,
    modifyStopArrayKeys
}