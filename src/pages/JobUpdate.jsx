import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SkeletonSingle from "../components/SkeletonSingle";
import { useQuery } from "@tanstack/react-query";
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const JobUpdate = () => {
  
    const navigate = useNavigate()
  
    const { user } = useAuth();

 const [ jobCategory , setJobCategory] = useState('');

 const [startDate, setStartDate] = useState(new Date());
  
   

    const id = useParams().id;

    

    const { data=[]  , isLoading , isError , error } = useQuery({
      queryFn: async () => {
           
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs/${id}`);

        return data;

      },
      queryKey: ['oneJob', id],
    })

     
    const {_id , job_banner_url, job_title,  job_category , salary_range, job_description, application_deadline , job_posting_date } 
    = data;
   const postingDate = job_posting_date;
  useEffect(() => {
    setJobCategory(job_category);
    setStartDate(application_deadline);
    
  
  },[])
      
 
    
   
    if(isLoading) return <SkeletonSingle/>

    if(isError) return <div> An error occured : {error.message}</div>


    const handleAddJob = async (e) => {
        e.preventDefault();
    
        if(!jobCategory){
            toast.error('Please select a job category')
            return;
        } 
    
        const form = e.target;
    
        const job_banner_url = form.url.value;
        const job_title = form.title.value;
        const name = form.name.value;
        const email = form.email.value;
        const salary_range = form.salaryRange.value;
        const job_description = form.description.value;
        const job_applicants_number = parseInt(form.applicationNumber.value);
        const job_posting_date = postingDate;
        const application_deadline = startDate;
        const job_category = jobCategory;
    
        const addData = {job_banner_url, job_title, job_owner : {name , email } , job_category , salary_range, job_description, job_posting_date ,
        application_deadline, job_applicants_number}
    
        console.log(addData);
    
        try {
            const { data } = await axios.put(
              `${import.meta.env.VITE_API_URL}/job/${_id}`,
              addData , { withCredentials: true}
            )
            console.log(data)
            toast.success('Job Data Updated Successfully!')
            navigate('/myJobs')
          } catch (err) {
            console.log(err)
            toast.error(err.message)
          }
    
    
        
    
    
    }

    

   
    



    return (
        <div className=" my-5 md:my-10 m-5">
        <div className=" flex-1 card shrink-0 w-full max-w-sm md:max-w-full shadow-2xl bg-[#a0c5c4]">
            <form onSubmit={handleAddJob}  className="card-body">
   
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#86664b] text-xl font-bold">Job Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Title" className="input input-bordered" defaultValue={job_title} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#86664b] text-xl font-bold">Job Banner URL</span>
                    </label>
                    <input type="url" name="url" placeholder="URL" className="input input-bordered" defaultValue={job_banner_url} required />
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-[#86664b] text-xl font-bold">User name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered"
                            defaultValue={user?.displayName} readOnly />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-[#86664b] text-xl font-bold">User Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered"
                            defaultValue={user?.email} readOnly />
                    </div>
                </div>
                <div className=" flex flex-col lg:flex-row gap-5 items-end">
   
                    <div className=" flex-1">
                        <select onChange={e=> {
                            setJobCategory(e.target.value)
   
                            }}
                            value={jobCategory}
                            name='sort'
                            id='sort'
                            className='border p-4 rounded-md text-white bg-blue-400 border-blue-400 w-full'
                            >
                            <option value=''>Job Category</option>
                            <option value='On Site'>On Site</option>
                            <option value='Remote'>Remote</option>
                            <option value='Hybrid'>Hybrid</option>
                            <option value='Part-Time'>Part-Time</option>
                        </select>
   
                    </div>
   
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-[#86664b] text-xl font-bold">Salary Range</span>
                        </label>
                        <input type="text" name="salaryRange" placeholder="20,000$ - 30,000$ per year " defaultValue={salary_range}
                            className="input input-bordered" required />
                    </div>
                </div>
   
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#86664b] text-xl font-bold">Job Description</span>
                    </label>
                    <input type="text" name="description" placeholder="Short description" className="input input-bordered" defaultValue={job_description}
                        required />
                </div>
   
                <div className="flex flex-col lg:flex-row gap-5 items-end">
                    <div className="form-control w-3/5">
                        <label className="label">
                            <span className="label-text text-[#86664b] text-xl font-bold">Job Application Number</span>
                        </label>
                        <input type="text" name="applicationNumber" placeholder="application Number"
                            className="input input-bordered" defaultValue={0} readOnly />
                    </div>
   
                    <div className="">
                        <div className='flex flex-col gap-2 '>
                            <label className="label">
                                <span className="label-text text-[#86664b] text-xl font-bold"> Posting Date </span>
                            </label>
   
                            {/* Date Picker Input Field */}
                            <DatePicker className='border p-2 rounded-md' selected={postingDate} readOnly />
                        </div>
                    </div>
   
                    <div className="">
                        <div className='flex flex-col gap-2 '>
                            <label className="label">
                                <span className="label-text text-[#86664b] text-xl font-bold"> Application Deadline</span>
                            </label>
   
                            {/* Date Picker Input Field */}
                            <DatePicker className='border p-2 rounded-md' selected={startDate} onChange={date=>
                                setStartDate(date)}
                                />
                        </div>
                    </div>
                </div>
   
                <div className="form-control mt-6">
                    <button className="btn   text-[#86664b] border-none text-xs md:text-xl">Update Job</button>
                </div>
            </form>
   
        </div>
        <ToastContainer/>
    </div>
    );
};

export default JobUpdate;