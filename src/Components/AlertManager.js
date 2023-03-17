import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showError = (errorMessage, props = {}) => {
    const {timeOut = 5000, toastID = null} = props;
    console.log(errorMessage);
    toast.error(errorMessage, {autoClose:timeOut});
};

export const showSuccess = (successMessage, props = {}) => {
    const {timeOut = 5000, toastID = null} = props;
    if(toast.isActive(toastID))
        toast.update(toastID, {render:"New IP(s) added! Confirm with 'Renew selected'"});
    else toast.success(successMessage, {toastId:toastID,  autoClose:timeOut});
};

export const showInfo = (infoMessage, props = {}) => {
    const {timeOut = 5000, toastID = null} = props;
    toast.info(infoMessage, {autoClose:timeOut});
};