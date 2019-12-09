import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/"
});


export function updateHeader(name, value){
  api.defaults.headers.common[name] = value;
}

export default api;
