import React, { useContext } from "react";
import { Authcontext } from "../authcontext/Authcontext";
import { Button } from 'react-bootstrap';

function User() {
    const { user } = useContext(Authcontext);

    return (
        <>
            <h1>welcome user bhai {JSON.stringify(user)}</h1>
            <Button variant="danger">logout</Button>
        </>)
}

export default User;