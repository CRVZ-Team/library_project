import { useNavigate } from "react-router";

export const EmailVerificationFail = () => {
    const navigate = useNavigate();

    return(
        <div className="container">
            <h1>Uh oh...</h1>
            <p>
                Something went wrong while trying to verify your email.
            </p>
            <button onClick={() => navigate('/signup')}>Back to Sign-up</button>
        </div>
    );
}