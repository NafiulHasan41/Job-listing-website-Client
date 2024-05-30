import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts/Root'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import PrivateRoute from './PrivateRoutes'
import JobDetails from '../components/JobDetails'
import Blog from '../pages/Blog'
import AllJobs from '../pages/AllJobs'
import AddJob from '../pages/AddJob'
import MyJobs from '../pages/MyJobs'
import JobUpdate from '../pages/JobUpdate'
import AppliedJob from '../pages/AppliedJob'
import Dashboard from '../pages/Dashboard/Dashboard'


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
            path: "/blogs",
            element: <Blog/>,
          },
          {
            path: "/allJobs",
            element: <AllJobs/>,
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
    {
      path: '/dashBoard',
      element: <Dashboard />,
      errorElement: <ErrorPage />,
      children:[
        {
          path: 'addAJob',
          element: (

              <PrivateRoute>
                  <AddJob/>
              </PrivateRoute>
          
          )
       
        },
        {
          path: 'myJobs',
          element: (

              <PrivateRoute>
                  <MyJobs/>
              </PrivateRoute>
          
          )
       
        },
        {
          path: 'myJobs/updateJob/:id',
          element: (
            <PrivateRoute>
              <JobUpdate />
            </PrivateRoute>
          )
        },
        {
          path: 'appliedJob',
          element: (

              <PrivateRoute>
                  <AppliedJob/>
              </PrivateRoute>
          
          )
       
        },
       

      ]
    }
  ])
  
  export default router
