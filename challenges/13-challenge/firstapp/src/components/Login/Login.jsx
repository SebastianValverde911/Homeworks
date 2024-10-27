import React, { useContext } from "react";
import './Login.css';
import {useNavigate} from 'react-router-dom';
import { UserContext } from "../../context/UserContext";

const Login = () => {
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

    const onLogin = (e) => {
        const dataUser = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        
        setUser(dataUser);

        const lastPath = localStorage.getItem('lastPath') || '/home';
        navigate(lastPath,{
            replace: true
        });

    }

    return(
        <div className="container-login">
            <div className="container-inputs">
                <form onSubmit={onLogin}>
                    <label>Email</label>        
                    <input className ="inputs" name="email" id="email" placeholder="Digite email" />
                    <label>Password</label>        
                    <input className ="inputs" name="password" id="password" placeholder="Digite password"/>
                    <button type="submit" className="btn-aceptar">Aceptar</button>
                </form>
            </div>
        </div>
    )
}

export default Login;