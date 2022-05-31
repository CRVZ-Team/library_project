import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { PasswordResetSuccess } from '../components/PasswordResetSuccess';
import { PasswordResetFail} from '../components/PasswordResetFail';

export const PasswordResetLandingPage = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const { passwordResetCode } = useParams();

    const onResetClicked = async() => {
        try {
            await axios.put(`${process.env.REACT_APP_BACKEND}/api/users/${passwordResetCode}/reset-password`, { newPassword: passwordValue});
            setIsSuccess(true);
        } catch (e) {
            setIsFailure(true);
        }
    }
    
    if (isFailure) return <PasswordResetFail />
    if (isSuccess) return <PasswordResetSuccess />

    return (
        <div className = "container">
            <h1>Reset Password</h1>
            <p>Please enter a new password</p>
            <p><input
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="Password" /></p>
            <p><input
                type="password"
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                placeholder="Confirm password" /></p>
            <p><button 
                disabled={
                    !passwordValue || 
                    passwordValue !== confirmPasswordValue
                }
                onClick={onResetClicked}>Reset Password</button></p>
        </div>
    )
}