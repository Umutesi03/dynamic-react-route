import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Login({}){
    const navigate = useNavigate();
    const {login} = useAuth();

    const handleLogin = () =>{
        login();
        navigate("/dashboard");
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>click to login</button>
        </div>
    );
}

export default Login;