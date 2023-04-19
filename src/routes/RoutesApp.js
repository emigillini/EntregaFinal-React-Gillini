
import { BrowserRouter} from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';


export const RoutesApp=()=>{

    const { user } = useContext(LoginContext)
    console.log(user)

    return (
    <BrowserRouter>
    {
    user.logged
    ? <PrivateRoutes/>
    : <PublicRoutes/>
    }
    </BrowserRouter>
    )

}