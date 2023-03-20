import show from "../utils/AlertManager";
import { API_BASE_URL } from "../config";
import axios from "axios";

export const getNewIP = async (token, amount) => {
    try {
        return await axios
            .post(API_BASE_URL + 'ips/next-ip', {
                desc:'User description',
                amount: amount,
                networkId:'640e21ac00544bcae339d40e'
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        );
    } catch (error) {
        show.error("Could not fetch new IP! Contact administrator if issue persists.");
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
        show.error("Could not fetch IP table! Contact administrator if issue persists.");
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
        show.success("IP renewed!", 'renew', 'IPs renewed!', 2000);
    } catch (error) {
        show.error("IP update unsuccessful. Contact administrator if issue persists.");
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
        show.success("IP removed!", 'remove', 'IPs removed!', 2000);
    } catch (error) {
        show.error("IP removal unsuccessful. Contact administrator if issue persists.");
    }
}