import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export const LoginPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue ] = useState('');
    const history = useNavigate();

    const onLoginClicked = async () => {
        alert("Log in not implemented");
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
            <p><button onClick={() => history('/forgot-password')}>Forgot your password?</button></p>
            <p><button onClick={() => history('/signup')} >Don't have an account? Sign Up</button></p>
        </div>
    )
}