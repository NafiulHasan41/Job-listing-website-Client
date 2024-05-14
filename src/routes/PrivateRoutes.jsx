import PropTypes from 'prop-types';


import { Navigate ,useLocation } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';




const PrivateRoute = ({children}) => {
    
    const { user, loading } = useAuth();
    const location = useLocation();


    if (loading) {
        return (<div className=' text-center items-center justify-center mx-auto mt-20 min-h-screen'>
    <span className="loading loading-spinner text-primary"></span>
    <span className="loading loading-spinner text-secondary"></span>
    <span className="loading loading-spinner text-accent"></span>
    <span className="loading loading-spinner text-neutral"></span>
    <span className="loading loading-spinner text-info"></span>
    <span className="loading loading-spinner text-success"></span>
    <span className="loading loading-spinner text-warning"></span>
    <span className="loading loading-spinner text-error"></span>
</div>);
    }

    if (user) {

        return children;
    }
 
     
    return <>
    { toast.error('You need to login first') }
     <Navigate to="/login" state={{ from: location.pathname }} />; 
     <ToastContainer />
     </>

   
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
export default PrivateRoute;