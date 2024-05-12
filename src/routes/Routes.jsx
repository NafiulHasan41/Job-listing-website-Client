import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts/Root'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children:[
        {
            index: true,
            element:<Home/>
        }
      ]
    
    },
  ])
  
  export default router
