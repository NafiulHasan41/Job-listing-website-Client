import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import SkeletonSingle from "./SkeletonSingle";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure"



const JobDetails = () => {

    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
   
    
    const { user } = useAuth();

    const id = useParams().id;

    

    const { data , isLoading , isError , error } = useQuery({
      queryFn: async () => {
           
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs/${id}`);

        return data;

      },
      queryKey: ['oneJob', id],
    })
      
 
    
   
    if(isLoading) return <SkeletonSingle/>

    if(isError) return <div> An error occured : {error.message}</div>


   


    const currentDate = new Date(Date.now());
    const deadlineDate = new Date(data?.application_deadline);
    
    // Convert dates to milliseconds
    const currentTime = currentDate.getTime();
    const deadlineTime = deadlineDate.getTime();

    const handleApply = async (e) => {
        e.preventDefault();
        if(user?.email === data?.job_owner?.email)
        {
            return toast.error('You cannot apply to your own job');
        }

        if(currentTime > deadlineTime)
        {
            return toast.error('Application deadline has passed');
        }
        const form = e.target;
        const Cv_Url = form.cv_url.value;
        const applyDate = new Date(Date.now()).toLocaleDateString();

      
        

         const{ application_deadline , job_applicants_number , job_banner_url , job_description , job_owner , job_title , salary_range , job_category , job_posting_date } = data;
         const applyJobId = data?._id;
         
          
         const applicant = { name: user?.displayName , email: user?.email , applyDate  : applyDate , Cv_Url: Cv_Url };

         
       const applyData = { applyJobId , application_deadline , job_applicants_number , job_banner_url , job_description , job_owner , job_title , salary_range , job_category , job_posting_date , applicant};
          
      
        
       try {

        await axiosSecure.post(`/apply`, applyData)
       
        toast.success('Applied job Successfully!')
        e.target.reset();
        navigate('/');

       
      } catch (err) {

        toast.success(err.response.data)
        e.target.reset()
       
      }

       



    }



    
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        
    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center bg-white rounded-xl my-5">
        <div className="w-full lg:w-1/2 ">
            <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold tracking-wide text-blue-600 dark:text-white lg:text-4xl">
                    {data?.job_title}
                </h1>

                <div className="mt-8 space-y-5">
                    <p className="flex items-center mx-2 text-blue-700 ">
                    
                        <span className="mx-2">{data?.job_description}</span> 
                    </p>

                    <p className="flex items-center mx-2 text-blue-700 justify-start ">
                    
                        <span className="mx-2">Salary Range :</span> <span className="  text-[#273c3b]"> {data?.salary_range}</span>
                    </p>
                    <p className="flex items-center mx-2 text-blue-700 justify-start ">
                    
                        <span className="mx-2">Number of Application :</span> <span className=" text-black"> {data?.job_applicants_number}</span>
                    </p>
                    <p className="flex items-center mx-2 text-blue-700 justify-start ">
                    
                        <span className="mx-2">Job Owner :</span> <span className=" text-black"> Name: {data?.job_owner?.name} <br />
                        Email: {data?.job_owner?.email} <br />
                        </span>
                    </p>

                    
                    <button onClick={()=>document.getElementById('my_modal_5').showModal()}  className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-400 font-bold rounded-lg lg:w-auto  hover:bg-blue-300 hover:scale-[1.1] focus:outline-none focus:bg-blue-500">
                          Apply
                        </button>
                  
                </div>
            </div>

        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={data?.job_banner_url} alt="glasses photo"/>
        </div>
    </div>
    {/* modal dialog */}

    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
       <div className="modal-box bg-[#a0c5c4]">
           <form onSubmit={handleApply} >
           <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#86664b] text-xl font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" defaultValue={user?.displayName} readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#86664b] text-xl font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" defaultValue={user?.email} readOnly />
                    </div>


                <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#86664b] text-xl font-bold">CV URL</span>
                        </label>
                        <input type="url"  name="cv_url" placeholder="CV-URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn   text-black bg-blue-400 hover:scale-[1.05] border-none text-xs md:text-xl">Apply</button>
                    </div>
           </form>
           <div className="modal-action">
               <form method="dialog">
                   <button className="btn">Close</button>
               </form>
           </div>
       </div>
   </dialog>

   <ToastContainer />

</div>
    );
};

export default JobDetails;