import { useNavigate } from "react-router-dom";
import Logout from "../../assets/icons/logout.svg";
const LogOut = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/login");
    }
    return (
        <button className="icon-btn" onClick={handleLogout}>
            <img src={Logout} alt="Logout" />
        </button>
    )
}

export default LogOut