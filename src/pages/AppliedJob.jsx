import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";




const AppliedJob = () => {
   
    //for pdf 

   
    



    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const [filter, setFilter] = useState('')
  
    const [appliedJob, setAppliedJob] = useState([])
  
    useEffect(() => {
      getData()
    }, [user , filter ])
  
    const getData = async () => {
      const { data } = await axiosSecure(`/myAppliedJob/${user?.email}?filter=${filter}`)

      setAppliedJob(data)

    }
    return (
        <>
        <div className=" my-8" >
             <div><h1 className=" text-center text-xl font-bold text-blue-500">My applied job section</h1></div>
             <div className=" my-5 m-5 lg:m-10">
              <select onChange={e=> {
                         setFilter(e.target.value)

                         }}
                         value={filter}
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
      <div className="overflow-x-auto m-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className=" text-[16px] text-blue-600 font-extrabold">Job Title</th>
        <th className=" text-[16px] text-blue-600 font-extrabold">Job Posting Date</th>
        <th className=" text-[16px] text-blue-600 font-extrabold">Application Deadline</th>
        <th className=" text-[16px] text-blue-600 font-extrabold">Salary Range</th>
        <th className=" text-[16px] text-blue-600 font-extrabold">Category</th>
        <th className=" text-[16px] text-blue-600 font-extrabold">Details</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        appliedJob?.map(job =>


            <tr key={job?._id} className=" bg-blue-100 text-black">
          <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={job?.job_banner_url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{job?.job_title}</div>
              <div className="text-sm opacity-50">Job Owner: {job?.job_owner?.name}</div>
            </div>
          </div>
        </td>
        <td>
          {new Date(job?.job_posting_date).toLocaleDateString()}
        </td>
        <td>
            {new Date(job?.application_deadline).toLocaleDateString()}
        </td>
        <td>
            {job?.salary_range}
        </td>
        <td className=" font-extrabold">
            {job?.job_category}
        </td>
        <td>
           
         
          
          
            <button className="btn bg-green-500 text-white">Download PDF</button>
           
        </td>
      </tr>
         )
      }

      

    </tbody>
  
    
  </table>
</div>
        </div>

        
        </>
    );
};

export default AppliedJob;