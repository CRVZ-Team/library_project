import { useState, useEffect } from "react";
import { useToken } from "./useToken";
import jwt_decode from "jwt-decode";

export const useUser = () => {
    const [token] = useToken();

    const getPayloadFromToken = token => {
        const encodedPayload = token.split('.')[1];
        console.log(encodedPayload);
        return JSON.parse(jwt_decode(encodedPayload));
    }

    const [user,setUser] = useState(() => {
        if (!token) return null;
        return getPayloadFromToken(token);
    });

    useEffect(() => {
        if (!token) {
            setUser(null);
        } else {
            setUser(getPayloadFromToken(token));
        }
    }, [token]);

    return user;
}