import axios from "axios";

export const API_URL = "https://www.themealdb.com/api/json/v1/1";

export default function callApi(endpoint) {
  return axios(`${API_URL}/${endpoint}`)
    .then(response => response.data);
}
