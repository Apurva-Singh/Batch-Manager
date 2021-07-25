import axios from "axios";

interface LoginData {email: string; password: string};

interface LoginResponse{
    data:{
          is_2fa_enabled: false;
         
    };
    token: string;
    user: {
        id:number,
        first_name: string,
        middle_name: string,
        last_name: string,
        role: 'staff' | 'admin',
    }
}

interface GetGroupRequest{
    limit?: number;
    offset?: number;
    status: "all-groups";
    query?: string;
}

interface GetGroupResponse{
    data:Array<{
        id: number,
        name: string,
        group_image_url:  string,
        description: string,
    }>

}

const BASE_URL= 'https://api-dev.domecompass.com';
const LOGIN_TOKEN= "login_token";

export const login =(data: LoginData)=>{
  const url=BASE_URL + "/login";
  console.log(data);

  return axios
    .post<LoginResponse>(url,data)
    .then((response) => {
        console.log("token here", response.data.token);
        localStorage.setItem(LOGIN_TOKEN, response.data.token);
    });
    };

export const logout = () =>{
    localStorage.removeItem(LOGIN_TOKEN);
}

export const getGroup = (data: GetGroupRequest) => {
    const url= BASE_URL + "/groups";
    const token= localStorage.getItem(LOGIN_TOKEN);

    return axios.get<GetGroupResponse>(url,{ params: data,headers:{Authorization: token}})
    .then((response)=> {
        const data= response.data;
        return data;
    })
}