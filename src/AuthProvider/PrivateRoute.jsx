import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    if (!user) {
       navigate("/register");
    }

    return children
};

export default PrivateRoute;