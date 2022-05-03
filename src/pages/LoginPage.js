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
        const response = await axios.post('http://localhost:8080/api/login', {
            email: emailValue,
            password: passwordValue,            
        });

        const { token } = response.data;
        setToken(token);
        navigate("/");
        window.location.reload(false);
    } 

    const mitid_style = {
        border: '2px solid #ccc',
        borderRadius: '4px',
        padding: '10px',
        margin: '10px',
        width: '25rem',
        height: '25rem',
    }

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col mt-5">
                <h1>Log In</h1>
                {errorMessage && <div className="fail">{errorMessage}</div> }
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
                <p><button
                    id="login_button"
                    disabled={!emailValue || !passwordValue}
                    onClick={onLoginClicked}>Log In</button></p>
                <p><button onClick={() => navigate('/forgot-password')}>Forgot your password?</button></p>
                <p><button onClick={() => navigate('/signup')} >Don't have an account? Sign Up</button></p>
            </div>
            
            <div className="col mt-5">
                <h1>Log In with MitID</h1>
                {errorMessage && <div className="fail">{errorMessage}</div> }
                <div>
                    <iframe src="https://mitid.eu.pythonanywhere.com/" style={mitid_style}>
                    </iframe>
                </div>
            </div>
            </div>
            
        </div>
    )

 

    //"border:2px; height: 20rem; background-color:beige; border-width: 2px; border-color: black;"

}