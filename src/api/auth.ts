import axios from "axios";
import { User } from "../models/User";
import { BASE_URL, LOGIN_TOKEN } from "./base";

interface LoginData {email: string; password: string};

interface LoginResponse{
    data:{
          is_2fa_enabled: false;
         
    };
    token: string;
    user: User;
}






export const login =(data: LoginData)=>{
  const url=BASE_URL + "/login";
  console.log(data);

  return axios
    .post<LoginResponse>(url,data)
    .then((response) => {
        console.log("token here", response.data.token);
        localStorage.setItem(LOGIN_TOKEN, response.data.token);
        return response.data.user;
    });
    };

export const logout = () =>{
    localStorage.removeItem(LOGIN_TOKEN);
};

interface MeResponse{
    data:User;
}

export const me = () => {
    const url= BASE_URL+ "/me";
    return axios.get<MeResponse>(url).then(response => response.data.data);
};