import { redirect } from "react-router-dom";

const checkExpiredToken = () => {
    const expiredToken = localStorage.getItem('expires') < new Date().getTime();
    return expiredToken;
}

export default checkExpiredToken;