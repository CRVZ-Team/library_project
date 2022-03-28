import { Navigate } from 'react-router';
import { useUser } from './useUser';

export const PrivateRoute = ({children}) => {
    const user = useUser();
    return user ? children : <Navigate to="/login" />;
}