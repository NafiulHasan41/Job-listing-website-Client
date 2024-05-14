import { Link , useLocation , useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {  useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

import { IoEye ,IoEyeOff } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";



const Login = () => {


    const { signIn , signInWithGoogle ,signInWithFacebook ,setLoading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
      

        signIn(email , password)
            .then(() => {

                   
             

                toast.success('User Logged in Successfully');

                  if( location.state === "/login")
                  {
                    navigate("/")
                  }
                  else
                  {
                    navigate(location?.state ? location.state.from : "/");
                  }
                 
               

            })
            .catch( (error) => {
              
                toast.error(error.message);
                setLoading(false);
               
                
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {

                toast.success('User Logged in Successfully');
                navigate(location?.state ? location.state.from : "/");
            })
            .catch(error => {
    
                toast(error.message);
                setLoading(false);
            })
    }

    const handleFacebookLogin = () => {

        signInWithFacebook()
        .then(() => {
            toast.success('User Logged in Successfully');
            navigate(location?.state ? location.state.from : "/");
        })
        .catch(error => {
            toast.error(error.message);
            setLoading(false);
        })
    };


     const [ pass , setPass] = useState(false);




    return (
        <div className="w-[95%] mx-auto mb-10">

          <Helmet>
            <title>CareerCanvas : Login</title>
        </Helmet>
       <div className="hero gap-1 md:min-h-[500px] bg-gradient-to-r from-cyan-500 to-cyan-200 rounded-3xl shadow-2xl shadow-cyan-500/70 text-red-500">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className=" text-xl md:text-3xl lg:text-5xl font-bold">Login now!</h1>
                <p className=" py-3 md:py-6 text-[16px]">Start your Journey  with us . We welcome you!</p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-b from-cyan-500 to-cyan-200 ">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-red-600 font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-red-600 font-bold">Password</span>
                            
                        </label>
                       <div className=" relative"> 

                       <input type={ pass? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                        <span  onClick={() => setPass(!pass)} className=" text-2xl absolute top-3 right-3">{ pass ? <IoEye/> : <IoEyeOff/> }</span>

                       </div>
                        
                       
                        
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-green-400 text-red-600 border-none text-xs md:text-xl ">Login</button>
                    </div>

                </form>

                <div className=" text-center">
                     <p className=" mb-2 text-center text-xl"> Login with </p>
                    <button onClick={handleGoogleLogin} className="btn border-none text-2xl mx-5">  <FcGoogle/> </button>
                    <button onClick={handleFacebookLogin} className="btn border-none text-2xl text-blue-600 font-extrabold">  <FaFacebook/> </button>
                </div>

                <label className="label text-center  justify-center text-xl">
                        <p className=" mx-3 font-bold"> New User ?</p>    <Link to="/register"  className="label-text-alt btn bg-rose-500 border-black  text-xl text-black"> Register</Link>
                        </label>
            </div>
        </div>
    </div>
    <ToastContainer />
</div>
    );
};


export default Login;