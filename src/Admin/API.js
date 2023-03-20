import show from "../utils/AlertManager";
import { API_BASE_URL } from "../config";
import axios from "axios";

export const getIPTable = async (token) => {
    try {
        return await axios
            .get(API_BASE_URL + 'ips/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        );
    } catch (error) {
        show.error("Could not fetch IP table!");
    }
}

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