import axios from "axios";

export const API_URL = "https://www.themealdb.com/api/json/v1/1";

export default function callApi(endpoint, method = "get") {
  return axios({
    url: `${API_URL}/${endpoint}`,
    method
  }).then(response => response.data);
}
