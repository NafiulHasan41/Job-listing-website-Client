import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem] rounded-xl'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />
            <p className='mt-3 text-gray-300'>
                Search your desired <span className='font-medium text-blue-500'>Jobs</span> here and Post your job</p>

                 <Link
            to='/addAJob'
            className='w-full px-5 py-4 my-7 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform  rounded-md lg:w-auto focus:outline-none focus:bg-gray-500'
          >


                 <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
            Post Job & Hire Expert
            </motion.div>
                 
          </Link>

                 
         
        </div>
      </div>
    </div>
  )
}

export default Slide