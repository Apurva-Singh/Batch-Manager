import axios from "axios";
import { BASE_URL } from "./base";

interface ModifyData {
    first_name?: string;
  middle_name?: string;
  last_name?: string;
  profile_pic_url?: string;
  phone_number?: string;
  alternate_phone_number?: string;
  email?: string;
  gender?: "male" | "female" ;
  birth_year?: string;
  birth_month?: string;
  birth_date?: string;
  death_year?: string;
  death_month?: string;
  death_date?: string;
  party?: string;
  home_state_code?: string;
  education?: string;
  hometown?: string;
};



export const modify =(data: ModifyData)=>{
    const url=BASE_URL + "/me";
    console.log("data ",data);
  
    return axios
      .put(url,data)
      .then((response) => { 
          console.log(response.data);
          return response.data.user;
       
      });
      };