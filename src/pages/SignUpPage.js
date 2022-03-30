import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

export const SignUpPage = () => {
    const [token, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue ] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue ] = useState('');
    const navigate = useNavigate();

    const onSignUpClicked = async () => {
        const response = await axios.post('https://mrs-whos-library-backend.herokuapp.com/api/signup', {
            email: emailValue,
            password: passwordValue,
        });
        const { token } = response.data;
        setToken(token);
        navigate('/please-verify');
        //ADD: {!isVerified && <div className="faill">You won't be able ... until you verify your email</div>}
    } 

    return (
        <div className="container text-center">
            <h1>Sign Up</h1>
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
            <p><input
                type="password"
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                placeholder="password" /></p>
            <hr />
            <p><button 
                disabled={
                    !emailValue || !passwordValue || 
                    passwordValue !== confirmPasswordValue
                }
                onClick={onSignUpClicked}>Sign Up</button></p>
            <p><button onClick={() => navigate('/login')} >Already have an account? Log In</button></p>
        </div>
    )
}