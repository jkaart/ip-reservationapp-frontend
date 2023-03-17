import { showError } from "../Components/AlertManager";
import { API_BASE_URL } from "../config";
import axios from "axios";

export const getNewIP = async (token) => {
    try {
        return await axios
            .post(API_BASE_URL + 'ips/next-ip', {
                desc:'User description',
                networkId:'640e21ac00544bcae339d40e'
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        );
    } catch (error) {
        console.log(error.response);
        //TODO: set error alert
    }
};

export const IPTablePopulate = async (token) => {
    try {
        const response = await axios
            .get(API_BASE_URL + 'users/user', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        );

        return response.data.ips;
    } catch (error) {
        console.log(error.response);
        //TODO: set error alert
    }
}

export const renewIP = async (token, id, description, days) => {
    try {
        const response = await axios
            .put(API_BASE_URL + 'ips/next-ip/' + id, {
                    'desc':description,
                    'TTL': days
                },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        );

        return response.data.ips;
    } catch (error) {
        showError("IP removal unsuccessful. Contact administrator if issue persists.");
        //TODO: set error alert
    }
}

export const removeIP = async (token, id) => {
    try {
        const response = await axios
            .delete(API_BASE_URL + 'ips/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        );

        return response.data.ips;
    } catch (error) {
        showError("IP removal unsuccessful. Contact administrator if issue persists.");
        //TODO: set error alert
    }
}