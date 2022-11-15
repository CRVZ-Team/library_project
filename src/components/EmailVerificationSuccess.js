import { useNavigate } from "react-router";

export const EmailVerificationSuccess = () => {
    const navigate = useNavigate();

    return(
        <div className="container">
            <h1>Success!</h1>
            <p>
                Thanks for verifying your email, now you can use all features!
            </p>
            <button onClick={() => navigate('/')}>Go to home page</button>
        </div>
    );
}