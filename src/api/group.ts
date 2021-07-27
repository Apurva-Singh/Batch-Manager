import axios from "axios";
import { Group } from "../models/Group";
import { BASE_URL, LOGIN_TOKEN } from "./base";

interface GetGroupRequest{
    limit?: number;
    offset?: number;
    status: "all-groups";
    query?: string;
}

interface GroupResponse{
    data: Group[];
}


export const getGroup = (data: GetGroupRequest) => {
    const url= BASE_URL + "/groups";
    const token= localStorage.getItem(LOGIN_TOKEN);

    return axios.get<GroupResponse>(url,{ params: data,headers:{Authorization: token}})
    .then((response)=> {
        const data= response.data.data;
        return data;
    })
}