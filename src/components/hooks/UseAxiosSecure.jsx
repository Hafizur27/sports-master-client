import axios from "axios";
import UseAuth from "../UseAuth/UseAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://sports-master-server-hafizur27.vercel.app'
});

const UseAxiosSecure = () => {
    const {logOut} = UseAuth();
    const navigate = useNavigate();

    useEffect(() =>{
        axiosSecure.interceptors.request.use(req =>{
            const token = localStorage.getItem('access-token');
            if(token){
                req.headers.Authorization = `Bearer ${token}`;
            }
            return req;
        });
        axiosSecure.interceptors.response.use(response => response, async (error) =>{
            if(error.response && (error?.response.status === 401 || error?.response.status === 403)){
                await logOut();
                navigate('/logIn');
            }
            return Promise.reject(error);
        });
    },[logOut, navigate])
    return [axiosSecure]
};

export default UseAxiosSecure;