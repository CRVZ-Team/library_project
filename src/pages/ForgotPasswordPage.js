import { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

export const ForgotPasswordPage = () => {
    const [emailValue, setEmailValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const onSubmitClicked = async() => {
        try {
            await axios.put(`https://mrs-whos-library-backend.herokuapp.com/api/forgot-password/${emailValue}`);
            setSuccess(true);
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        }catch (e) {
            setErrorMessage(e.message);
        }
    }

    return success ? (
        <div className="container">
            <h1>Success</h1>
            <p>Check your email for a reset link</p>
        </div>
    ) : (
        <div className="container">
            <h1>Forgot Password</h1>
            <p>Enter your email to send you a reset link</p>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input
                    value={emailValue}
                    onChange={e => setEmailValue(e.target.value)}
                    placeholder="someone@gmail.com" />
            <button
                disabled={!emailValue}
                onClick={onSubmitClicked}>
                    Send reset link
                </button>
        </div>
    )
} 