import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const JobCard = ( {job} ) => {


    return (
        <div className="w-full max-w-sm px-4 py-3  rounded-md shadow-xl shadow-blue-300 hover:scale-[1.1] space-y-5 bg-[#a0c5c4] ">
    <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-blue-600 dark:text-gray-400">{job?.job_owner?.name} </span>
        <span className="px-3 py-1 text-xs text-black  bg-red-500 rounded-full ">Deadline :{job?.application_deadline} </span>
    </div>

    <div>
        <h1 className="mt-2 text-lg font-bold text-gray-800 dark:text-white">{job?.job_title}</h1>
       
    </div>

    <div>
       
       <div className="  gap-3">
       <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">Posting date :<span className='text-sm font-semibold text-blue-600'> {job?.job_posting_date}</span> </h1>
       <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white"><span className='text-sm font-semibold text-blue-600'> {job?.salary_range} </span></h1>
          
       </div>

        
    </div>

    <div>
    <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">Applicants Number : <span className='text-sm font-semibold text-blue-600'> {job?.job_applicants_number} </span></h1>
    </div>
    <div>
        <Link to={`/job/${job?._id}`}>
    <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-400 font-bold rounded-lg lg:w-auto  hover:bg-blue-300 focus:outline-none focus:bg-blue-500">
                          View Details
                        </button>
                        </Link>
    </div>
</div>
    );
};

JobCard.propTypes = {
    job: PropTypes.object,
};

export default JobCard;