import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate,Navigate } from "react-router-dom";

export const Authcontext = createContext();

function AuthProvider({ children }) {
    const [user, setuser] = useState({});
    const navigate = useNavigate();

    const fetchuser = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.log("No token found");
                setuser(null);
                return;
            }
            const response = await axios.get(process.env.REACT_APP_API_URL + "users/home", {
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log(response.data.data._id)
            if (response.data.data) {
                setuser(response.data.data._id);
                console.log(user.id)
                return <Navigate to={'/home'} />
            }
        }
        catch (error) {
            console.log(error.response?.data || error.message)
            setuser(null)
        }
    }

    useEffect(() => {
        fetchuser();
    }, []);

    return (
        <Authcontext.Provider value={{ user }}>
            {children}
        </Authcontext.Provider>
    )
}

export default AuthProvider;