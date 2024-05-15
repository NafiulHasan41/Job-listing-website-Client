import axios from 'axios'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

const useAxiosSecure = () => {
  const { logOut , setLoading } = useAuth()
  const navigate = useNavigate()



  axiosSecure.interceptors.response.use(
    res => {
      return res
    },
    async error => {
      console.log('Error from axios interceptor', error.response)
      if (error.response.status === 401 || error.response.status === 403) {
        
        await logOut()
        setLoading(false)
        navigate('/login')
      }
      return Promise.reject(error)
    }
  )



  return axiosSecure
}

export default useAxiosSecure