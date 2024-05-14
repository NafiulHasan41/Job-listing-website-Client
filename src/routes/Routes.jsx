import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts/Root'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import PrivateRoute from './PrivateRoutes'
import JobDetails from '../components/JobDetails'


const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children:[
        {
            index: true,
            element:<Home/>
        },
        {
            path: "/login",
            element: <Login/>,
          },
          {
            path: "/register",
            element: <Register/>,
          },
          {
            path: '/job/:id',
            element: (

                <PrivateRoute>
                    <JobDetails/>
                </PrivateRoute>
            
            )
         
          },
      ]
    
    },
  ])
  
  export default router
