import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useToken } from "../auth/useToken";
import { useUser } from "../auth/useUser";

export const WelcomeUser = () => {
    const user = useUser();
    const [token, setToken] = useToken();

    const { id, email, info} = user;
    const navigate = useNavigate();

    return(
        <div>
            Welcome! Your email is {email}.
        </div>
    )
}