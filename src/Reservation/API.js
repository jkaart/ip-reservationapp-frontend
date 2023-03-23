import show from "../utils/AlertManager";
import { API_BASE_URL } from "../config";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const getNewIP = async (token, ip, ipDescription, specificIP) => {
    try {
        const body = specificIP ? { ip: ip } : { amount: ip };
        body.desc = ipDescription;
        return (await axios
            .post(API_BASE_URL + (specificIP ? 'ips/' : 'ips/next-ip'),
                body,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                })
        )
    } catch (error) {
        show.error("Could not reserve IP(s). If issue persists, contact administrator. Error: '" + error.response.data.message + "'", "newIPError", null, 10000);
    }
};

export const IPTablePopulate = async (token) => {
    //console.log(token)
    try {
        return (await axios
            .get(API_BASE_URL + 'ips/' + jwtDecode(token).id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
        )
    } catch (error) {
        show.error("Could not fetch IP table! Contact administrator if issue persists.");
    }
}

export const renewIP = async (token, ids) => {
    try {
        const response = await axios
            .put(API_BASE_URL + 'ips/', 
                ids, 
                { headers: {
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

export const removeIP = async (token, ids) => {
    try {
        const response = await axios
            .delete(API_BASE_URL + 'ips/' + ids.toString(), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
            );
        show.success("IP(s) removed!");
    } catch (error) {
        show.error("IP removal unsuccessful. Contact administrator if issue persists.");
    }
}

export const updateDescription = async (token, id, description) => {
    try {
        const response = await axios
            .put(API_BASE_URL + 'ips/' + id, {
                'desc': description
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
            );
        show.success("IP description updated!", 'update', null, 2000);
    } catch (error) {
        show.error("IP description update unsuccessful. Contact administrator if issue persists.");
    }
}

export const getActiveNetworkRange = async (token) => {
    return await axios
        .get(API_BASE_URL + 'admin/network/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
}