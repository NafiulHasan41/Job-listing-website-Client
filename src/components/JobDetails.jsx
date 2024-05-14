import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { useParams } from "react-router-dom";
import SkeletonSingle from "./SkeletonSingle";


const JobDetails = () => {


    const id = useParams().id;
   

    const { data, isLoading , isError , error } = useQuery({
      queryFn: async () => {
           
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs/${id}`);

        return data;

      },
      queryKey: ['oneJob', id],
    })
     
   
    if(isLoading) return <SkeletonSingle/>

    if(isError) return <div> An error occured : {error.message}</div>


    
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
                    
                        <span className="mx-2">Salary Range :</span> <span className=" badge bg-red-500 text-[#273c3b]"> {data?.salary_range}</span>
                    </p>
                    <p className="flex items-center mx-2 text-blue-700 justify-start ">
                    
                        <span className="mx-2">Number of Application :</span> <span className=" text-[#a9cac9]"> {data?.job_applicants_number}</span>
                    </p>

                    
                    <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-400 font-bold rounded-lg lg:w-auto  hover:bg-blue-300 hover:scale-[1.1] focus:outline-none focus:bg-blue-500">
                          Apply
                        </button>
                  
                </div>
            </div>

        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={data?.job_banner_url} alt="glasses photo"/>
        </div>
    </div>

        </div>
    );
};

export default JobDetails;