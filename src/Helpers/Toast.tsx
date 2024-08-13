import { toast } from "react-toastify";

interface IToaster {
    position: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left",
    autoClose: number,
    hideProgressBar: boolean,
    closeOnClick: boolean,
    pauseOnHover: boolean,
    draggable: boolean,
    theme: "light" | "dark" | "colored"
}

const defaultOptions: IToaster = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
};

export const successNotify = (message: string) => {
    toast.success(message, {
        ...defaultOptions,
    });
};

export const errorNotify = (message: string) => {
    toast.error(message, {
        ...defaultOptions,
    });
};
