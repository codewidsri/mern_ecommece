import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const Authcontext = createContext();

function AuthProvider({ children }) {
    const [user, setuser] = useState({});

    const fetchuser = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setuser(null);
                return;
            }
            const response = await axios.get(process.env.REACT_APP_API_URL + "users/home", {
                headers: { Authorization: `Bearer ${token}` }
            })
            if (response.status == 200) {
                setuser(response.data._id);
            }
            else{
                setuser(null)
            }
        }
        catch (error) {
            console.log(error.message)
            setuser(null)
        }
    }

    useEffect(() => {
        fetchuser();
    }, []);

    return (
        <Authcontext.Provider value={{ user,setuser }}>
            {children}
        </Authcontext.Provider>
    )
}

export default AuthProvider;