import axios from "axios";

export const getConfig = () => {
    return {
        headers: {"bypass-tunnel-reminder": "true"}
    }
};

export const axiosConfig = axios.create({
    //baseURL:"http://127.0.0.1:5000/",
    //baseURL:"https://dilib-host.loca.lt/",
    baseURL: "https://book-server-yec5.onrender.com/",
    ...getConfig(),
});