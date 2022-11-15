import { useEffect } from "react";
import { useNavigate } from "react-router";

export const PleaseVerifyEmailPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }, [navigate]);

    return(
        <div className="content-container">
            <h1>Thanks for Signing up!</h1>
            <p>
                A verification email has been sent to the email address you provided.
                Please verify your email to unlock full site features.
            </p>
        </div>
    )
}