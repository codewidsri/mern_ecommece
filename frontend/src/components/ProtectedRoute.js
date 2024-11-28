import { Navigate  } from "react-router-dom";
import { Authcontext } from "../authcontext/Authcontext";
import { useContext } from "react";

function ProtectedRoute({ children }) {
    const { user } = useContext(Authcontext);
    return user ? children : <Navigate to={'/login'} />
}

export default ProtectedRoute;