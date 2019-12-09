import api from './api';

if (localStorage.getItem("access_token")) {
  api.defaults.headers.common["Authorization"] = `${localStorage.getItem(
    "access_token"
  )}`;
}

export function register(name,surname,username, password) {
  return api.post("/users/register", { name,surname, username, password});
}


export function log(email, password){
  return api.post("/users/login/", {email, password});
}

export function logout(){
  return api.post("/users/logout/",)
}
