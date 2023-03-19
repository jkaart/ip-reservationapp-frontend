import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const timeOutDefault = 3000;

function main(msg, toastID, override, timeOut, t){
    if(toast.isActive(toastID))
        toast.update(toastID, {render:override});
    else t.method(msg, {toastId:toastID, autoClose:timeOut});
}

const show = {
    error:(msg = "Error: generic. Contact administrator if issue persists.", 
            toastID = null, override = "", timeOut = timeOutDefault) => {
        main(msg, toastID, override, timeOut, {method:toast.error});
    },
    success:(msg, toastID = null, override = "", timeOut = timeOutDefault) => {
        main(msg, toastID, override, timeOut, {method:toast.success});
    },
    info:(msg, toastID = null, override = "", timeOut = timeOutDefault) => {
        main(msg, toastID, override, timeOut, {method:toast.info});
    },
};

export default show;