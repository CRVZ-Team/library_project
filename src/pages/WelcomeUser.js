import { useUser } from "../auth/useUser";

export const WelcomeUser = () => {
    const user = useUser();
    const {email} = user;

    return(
        <div>
            Welcome! Your email is {email}.
        </div>
    )
}