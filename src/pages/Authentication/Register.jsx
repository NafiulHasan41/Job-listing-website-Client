import {  useState } from "react"; import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { IoEye ,IoEyeOff } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";



const Register = () => {

    const [ pass , setPass] = useState(false);

    const navigate = useNavigate();
    const { createUser , logOut } = useAuth();

    const handleRegister = e => {

        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photoUrl = form.get('url');

        if(password.length < 6){
            toast.error('Password must be at least 6 characters');
            return;
        }
        else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[a-zA-Z]).{8,}$/.test(password)){
            
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character');
            return;
        }


     

      
        createUser(email, password)
            .then(result => {
                
             
                updateProfile(result.user, { 
                    displayName: name,
                    photoURL: photoUrl
                  }).then(() => {

                    
                    toast.success('User Created Successfully');
                    logOut().then( () => {
                        
                        navigate('/login');
                    
                    })
                    .catch((error) => {
                    
                        toast.error(error.message);
    
                      });

                  }).catch((error) => {
                    
                    toast.error(error.message);

                  });
              
               
            })
            .catch(error => {
                toast.error(error.message);
            })


        }









    return (
        <div className="w-[95%] mx-auto mt-10 mb-10">
             <Helmet>
            <title>CareerCanvas : Register</title>
        </Helmet>
       <div className="hero gap-1 md:min-h-[500px]  rounded-3xl ">
        <div className="hero-content  w-full flex-col lg:flex-row">
            <div className="flex-1 text-center lg:text-left">
            <img className=" rounded-xl" src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt="" />
            </div>
            <div className=" flex-1 card shrink-0 w-full max-w-sm md:max-w-full shadow-2xl bg-[#a0c5c4]">
                <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#86664b] text-xl font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#86664b] text-xl font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#86664b] text-xl font-bold">Password</span>
                        </label>
                        <div className=" relative">

                       <input type={ pass? "text" : "password" } name="password" placeholder="password"
                           className="input input-bordered w-full" required />
                       <span onClick={()=> setPass(!pass)} className=" text-2xl absolute top-3 right-3">{ pass ?
                           <IoEye /> :
                           <IoEyeOff /> }</span>

                   </div>

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#86664b] text-xl font-bold">Image URL</span>
                        </label>
                        <input type="url" name="url" placeholder="URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn   text-[#86664b] border-none text-xs md:text-xl">Register</button>
                    </div>
                </form>

                <label className="label text-center  justify-center text-[16px]">
                    <p className=" mx-1 font-bold text-[#86664b]"> Already have an account ?</p>
                    <Link to="/login" className="label-text-alt btn  border-none  text-[16px] text-[#86664b]">
                    Login</Link>
                </label>
            </div>
        </div>
    </div>
    <ToastContainer />
</div>
    );
};

export default Register;