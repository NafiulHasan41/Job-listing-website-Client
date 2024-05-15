import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";


const MyJobs = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [jobs, setJobs] = useState([])


    useEffect(() => {
        getData()
      }, [user])

    const getData = async () => {
        const { data } = await axiosSecure(`/job/${user?.email}`)
        setJobs(data)
      }

    
    // handle delete 
    const handleDelete = async id => {

        Swal.fire({
            title: 'Are you sure want to delete it?',
            text: "You won't be able to undo this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( async (result) => {
            if (result.isConfirmed) {
             
                try {
                     await axiosSecure.delete(`/job/${id}`)
                    toast.success('Delete Successful')
                 //up-to-date data
                    getData()
                  } catch (err) {
                    console.log(err.message)
                    toast.error(err.message)
                  }
                }
             
            }
        )





        

    }


    return (
        <div className=" my-5 m-5 rounded-xl">
            <div><h1 className=" text-center text-xl font-bold text-blue-500">My job section</h1></div>

            <div className=" my-5 lg:my-10">
            <div className="overflow-x-auto">
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
        jobs?.map(job =>


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
           
          <button onClick={() => handleDelete(job._id)} className="btn bg-red-500 text-white">Delete</button>
          
            <Link to={`/updateJob/${job?._id}`}>
            <button className="btn bg-green-500 text-white">Update</button>
           </Link>
        </td>
      </tr>
         )
      }

      

    </tbody>
  
    
  </table>
</div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default MyJobs;