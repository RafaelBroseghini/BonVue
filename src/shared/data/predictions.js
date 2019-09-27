import * as axios from "axios";
import { BONGO_API } from "../config";

const getStopPredictions = async function(stop_id){
    try {
      const response = await axios.get(`${BONGO_API}/prediction?stopid=${stop_id}`);
      console.log(response.data)
      return response.data.predictions;
    } catch (e) {
      console.log(e)
      return [];
    }
}
  
const getPredictionsLessThanSeventyMin = function (predictions){
    let predLessSeventyMin = []
    predictions.forEach(element => {
      element.minutes < 65 ? predLessSeventyMin.push(element) : null
    });
    return predLessSeventyMin
}

export const predictionServices = {
  getStopPredictions,
  getPredictionsLessThanSeventyMin
}