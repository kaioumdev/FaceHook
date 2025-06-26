import { useNavigate } from "react-router-dom";
import Logout from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";
const LogOut = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const handleLogout = () => {
        setAuth({});
        navigate("/login");
    }
    return (
        <button className="icon-btn" onClick={handleLogout}>
            <img src={Logout} alt="Logout" />
        </button>
    )
}

export default LogOut