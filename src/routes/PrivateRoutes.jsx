import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

import { Navigate ,useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';




const PrivateRoute = ({children}) => {
    
    const { user, loading } = useContext(AuthContext);
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
 
     

    return  <div>
         {
               Swal.fire({
                title: 'Are you sure want to delete it?',
                text: "You won't be able to undo this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
        
                    <Navigate to="/login" state={{ from: location.pathname }} />;
                }
            })
         }
    </div>
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
export default PrivateRoute;