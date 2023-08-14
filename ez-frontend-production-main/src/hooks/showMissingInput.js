import { toast } from "react-hot-toast";

export const showMissingInput = ({ type, missing }) => {
    return toast.error(`Please ${type === "text" ? "enter"
            : type === "select" ? "select"
                : type === "option" && "choose"
        } ${missing}`);
};