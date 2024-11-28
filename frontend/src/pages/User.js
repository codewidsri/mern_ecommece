import React, { useContext } from "react";
import { Authcontext } from "../authcontext/Authcontext";

function User() {
    const {user}=useContext(Authcontext);
    return<>
    <h1>welcome user bhai {user}</h1>
    </>
}

export default User;