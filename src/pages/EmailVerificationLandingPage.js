import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useToken } from "../auth/useToken";
import { EmailVerificationSuccess } from "../components/EmailVerificationSuccess"; 
import { EmailVerificationFail } from "../components/EmailVerificationFail"; 

export const EmailVerificationLandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const { verificationString } = useParams();
    const [,setToken] = useToken();

    useEffect(() => {
        const loadVerification = async () => {
            try {
                const response = await axios.put('http://127.0.0.1:8000/api/verify-email', { verificationString });
                const { token } = response;
                setToken(token);
                setIsSuccess(true);
                setIsLoading(false);
            }catch (e) {
                setIsLoading(false);
                setIsSuccess(false);
            }   
        };
        loadVerification();
        
    }, [setToken, verificationString]);

    if (isLoading) return <p>Loading...</p>;
    if (!isSuccess) return <EmailVerificationFail />
    return <EmailVerificationSuccess />
}