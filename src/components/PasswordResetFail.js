import { useNavigate } from "react-router";

export const PasswordResetFail = () => {
    const navigate = useNavigate();

    return(
        <div className="container">
            <h1>Fail!</h1>
            <p>
                Something went wrong while trying to reset the password! Please try again.
            </p>
            <button onClick={() => navigate('/login')}>Go to Login page</button>
        </div>
    );
}