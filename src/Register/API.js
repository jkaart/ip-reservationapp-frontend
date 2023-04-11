import axios from "axios";
import { API_BASE_URL } from "../config";

export const submitRegistrationForm = async (newEmail, newPassword, newGroup) => {
    return await ( axios
        .post(API_BASE_URL + 'users/', {
            name: newEmail.split('@')[0].replace('.', ' ').replace(/[0-9]/g, ''),
            email: newEmail,
            password: newPassword,
            group: newGroup
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    )
}