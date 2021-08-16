import axios, { CancelToken } from "axios";
import { Group } from "../models/Group";
import { BASE_URL, LOGIN_TOKEN } from "./base";

export interface GetGroupRequest{
    limit?: number;
    offset?: number;
    status: "all-groups";
    query: string;
}

export interface GroupResponse{
    data: Group[];
}


export const getGroups = (data: GetGroupRequest, tokenSourceToken: CancelToken) => {
    const url= BASE_URL + "/groups";

    return axios.get<GroupResponse>(url,{ params: data, cancelToken: tokenSourceToken})
    .then((response)=> {
        const data= response.data.data;
        return data;
    });
}

export const getGroupById = (groupId: number) => {
    const url= `${BASE_URL}/groups/${groupId}`;
    const token= localStorage.getItem(LOGIN_TOKEN);

    return axios.get<GroupResponse>(url,{headers:{Authorization: token}})
    .then((response)=> {
        const data= response.data.data;
        return data;
    })


}



