import axios from "axios";


export const BASE_URL= 'https://api-dev.domecompass.com';
export const LOGIN_TOKEN= "login_token";

axios.interceptors.request.use((config)=> {
    const token= localStorage.getItem(LOGIN_TOKEN);

    if(!token){
        return config;
    }

    return {
        ...config, headers: {...config.headers, Authorization:token}
    };
})

axios.interceptors.response.use(undefined,(error) => {
    console.error("Error is ", error);
    if(error.response?.data?.code === 9101) { // use "?" or error.response && error.response.data && 
        localStorage.removeItem(LOGIN_TOKEN);
        window.location.href="/login";
    }

    return Promise.reject(error);
});