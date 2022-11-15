import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useToken } from "../auth/useToken";
import "bootstrap/dist/css/bootstrap.css";

export const LoginPage = () => {
    const [token, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue ] = useState('');
    const navigate = useNavigate();

    const onLoginClicked = async () => {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/login`, {
            email: emailValue,
            password: passwordValue,            
        }).catch(error => {
            setErrorMessage("Invalid email or password")});

        const { token } = response.data;
        setToken(token);
        navigate("/");
        window.location.reload(false);
    } 

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col mt-5">
                <h1>Log In</h1>
                
                {errorMessage && <div className="text-danger">{errorMessage}</div> }
                <p><input
                    id="email"
                    value={emailValue}
                    onChange={e => setEmailValue(e.target.value)}
                    placeholder="someone@gmail.com" /></p>
                <p><input
                    id="password"
                    type="password"
                    value={passwordValue}
                    onChange={e => setPasswordValue(e.target.value)}
                    placeholder="password" /></p>
                <hr />
                <div class="btn-group-vertical">
                    <button
                    id="login_button"
                    className="btn btn-outline-success"
                    disabled={!emailValue || !passwordValue}
                    onClick={onLoginClicked}>Log In</button>
                    <button className="btn btn-outline-success" onClick={() => navigate('/forgot-password')}>Forgot your password?</button>
                    <button className="btn btn-outline-success" onClick={() => navigate('/signup')} >Don't have an account? Sign Up</button> 
                </div>
                
            </div>
            </div>
            
        </div>
    )
}