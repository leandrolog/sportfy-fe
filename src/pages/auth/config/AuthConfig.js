import axios from "axios";

import jwt_decode from "jwt-decode";

const HttpRequest = axios.create({
    baseURL: "http://localhost:8080"
})

let user_id = '';

const token = sessionStorage.getItem("token");
console.log("token", token)
if (token) {
    /* const decodedToken = jwt_decode(token);
     role = decodedToken.role;
    */
    const decodedToken = jwt_decode(token);
    user_id = decodedToken.id;
    HttpRequest.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export {user_id, HttpRequest};
