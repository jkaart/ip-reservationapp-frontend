import { API_BASE_URL } from "../config";
import axios from "axios";

export const getNewIP = async (token) => {
    try {
        return await axios
            .post(API_BASE_URL + 'ips/next-ip', {
                desc:'aaaaa',
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
    console.log(token);
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