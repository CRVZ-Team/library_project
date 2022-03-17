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
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email: emailValue,
            password: passwordValue,
        });

        const { token } = response.data;
        setToken(token);
        navigate("/welcome");
        window.location.reload(false);
    } 

    return (
        <div className="container text-center">
            <h1>Log In</h1>
            {errorMessage && <div className="fail">{errorMessage}</div> }
            <p><input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="someone@gmail.com" /></p>
            <p><input
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="password" /></p>
            <hr />
            <p><button 
                disabled={!emailValue || !passwordValue}
                onClick={onLoginClicked}>Log In</button></p>
            <p><button onClick={() => navigate('/forgot-password')}>Forgot your password?</button></p>
            <p><button onClick={() => navigate('/signup')} >Don't have an account? Sign Up</button></p>
        </div>
    )
}