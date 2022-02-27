import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export const SignUpPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue ] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue ] = useState('');
    const history = useNavigate();

    const onSignUpClicked = async () => {
        alert("Sign Up not implemented");
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
            <p><button 
                disabled={
                    !emailValue || !passwordValue || 
                    passwordValue !== confirmPasswordValue
                }
                onClick={onSignUpClicked}>Sign Up</button></p>
            <p><button onClick={() => history('/login')} >Already have an account? Log In</button></p>
        </div>
    )
}