import show from "../utils/AlertManager";
import { API_BASE_URL } from "../config";
import axios from "axios";


export const getNetworks = async (token) => {
    try {
        return await axios
            .get(API_BASE_URL + 'admin/network/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        );
    } catch (error) {
        show.error("Could not get networks!");
    }
}

export const getUsers = async (token) => {
    try {
        return await axios
            .get(API_BASE_URL + 'users/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        );
    } catch (error) {
        show.error("Could not get users!");
    }
}