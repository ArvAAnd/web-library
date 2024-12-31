import axios from "axios";

export const getConfig = () => {
    return {
        headers: {"bypass-tunnel-reminder": "true"}
    }
};

export const axiosConfig = axios.create({
    //baseURL:"http://127.0.0.1:5000/", //offline fast server (on pc)
    //baseURL:"https://dilib-host.loca.lt/", //online slow server (on pc)
    baseURL: "https://book-server-yec5.onrender.com/", //online fast server
    ...getConfig(),
});