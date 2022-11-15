import { useNavigate } from "react-router";

export const PasswordResetSuccess = () => {
    const navigate = useNavigate();

    return(
        <div className="container">
            <h1>Success!</h1>
            <p>
                Your password was changed! Now, please log in with your new password.
            </p>
            <button onClick={() => navigate('/login')}>Go to Login page</button>
        </div>
    );
}