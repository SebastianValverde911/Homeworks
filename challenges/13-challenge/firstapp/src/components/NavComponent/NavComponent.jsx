import React, {useContext} from "react";
import './NavComponent.css';
import { UserContext } from "../../context/UserContext";
import { useNavigate, NavLink } from "react-router-dom";


const NavComponent = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/',{
            replace:true
        });
    }

    return(
        <div className="container-menu">
            <div className="name-user">Hola, {user.email}</div>
            <ul>
                <li className="item-menu">
                    <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li className="item-menu">
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                </li>
                <li className="item-menu">
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                </li>
            </ul>
            <button className="logout" onClick={()=>onLogout()}>Cerrar sesion</button>
        </div>
    )
}

export default NavComponent;