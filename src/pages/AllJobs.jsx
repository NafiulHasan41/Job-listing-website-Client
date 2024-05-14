import { useEffect, useState } from "react";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios";


const AllJobs = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    // For handling all sideBar action

    const [itemsPerPage, setItemsPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(0)
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')
  const [searchText, setSearchText] = useState('')
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/allJobs?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`
      )
      setJobs(data)
    }
    getData()
  }, [currentPage, filter, itemsPerPage, search, sort])


  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/jobsCount?filter=${filter}&search=${search}`
      )

      setCount(data.count)
    }
    getCount()
  }, [filter, search])

  console.log(count)
  const numberOfPages = Math.ceil(count / itemsPerPage)
  const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

  //  handle pagination button
  const handlePaginationButton = value => {
    console.log(value)
    setCurrentPage(value)
  }
  const handleReset = () => {
    setFilter('')
    setSort('')
    setSearch('')
    setSearchText('')
  }

  const handleSearch = e => {
    e.preventDefault()

    setSearch(searchText)
  }

  console.log("search",search)
  console.log(jobs);
  console.log("filter",filter);


    return (
        <div className=" flex flex-col lg:flex-row m-3 lg:m-10 lg:gap-8">
       <div className=" lg:w-1/4">
           <div>
               <nav className="  relative bg-[#a0c5c4] rounded-xl  shadow-xl ">
                   <div className="container px-3 py-3 mx-auto">
                       <div className="lg:flex lg:flex-col lg:items-center lg:justify-between">
                           <div className="flex flex-col items-end lg:items-center  lg:justify-between">
                               <form onSubmit={handleSearch} >
                                   <div className="flex m-2 flex-row justify-center">
                                       <input id="search" type="text"
                                           className="px-1 py-1 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                          
                                         onChange={e => setSearchText(e.target.value)}
                                         value={searchText}
                                         name='search'
                                        placeholder='Enter Job Title'
                                         aria-label='Enter Job Title' />

                                       <button
                                           className=" px-2 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-400 font-bold rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                           Search
                                       </button>
                                   </div>
                               </form>

                               {/* Mobile menu button */}
                               <div className="flex lg:hidden">
                                   <p className=" font-semibold text-blue-500">Filter</p>
                                   <button onClick={toggleMenu} type="button"
                                       className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                       aria-label="toggle menu">
                                       {!isOpen ? (

                                       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                           viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                           <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                       </svg>
                                       ) : (
                                       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                           viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                           <path strokeLinecap="round" strokeLinejoin="round"
                                               d="M6 18L18 6M6 6l12 12" />
                                       </svg>
                                       )}
                                   </button>
                               </div>
                           </div>

                           {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                           <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300
                               ease-in-out bg-[#a0c5c4] lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-full
                               lg:opacity-100 lg:translate-x-0 flex flex-col-reverse lg:flex lg:flex-row lg:items-start
                               ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full' }`}>
                               <div
                                   className="flex flex-col my-5 ml-2 space-y-2 lg:space-y-8  min-h-[calc(100vh-50px)]">

                                   <div>
                                       <button onClick={handleReset}
                                           className='btn hover:scale-[1.1] bg-blue-400 border-blue-400 text-white'>
                                           Reset
                                       </button>
                                   </div>

                                   <div>
                                   <select
              onChange={e => {
               setSort(e.target.value)
                setCurrentPage(1)
              }}
              value={sort}
              name='sort'
              id='sort'
              className='border p-4 rounded-md text-white bg-blue-400 border-blue-400'
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
 

                                   </div>


                                 
                        

                                   <div className=" text-white">
                                    {/* if problem happen for this class in MUI then I will change it */}
                                       <FormControl>
                                           <FormLabel id="demo-radio-buttons-group-label">Filter By Category</FormLabel>
                                           <RadioGroup 
                                             value={filter}
                                            onChange={e => {
                                                setFilter(e.target.value)
                                                  setCurrentPage(1)
                                            }}
                                                  aria-labelledby="demo-radio-buttons-group-label"
                                              name="radio-buttons-group" class=" grid grid-cols-2 ">
                                               <FormControlLabel  value='' control={<Radio />} label="None" />
                                               <FormControlLabel value='On Site' control={<Radio />} label="On Site" />
                                               <FormControlLabel value='Remote' control={<Radio />} label="Remote" />
                                               <FormControlLabel value='Hybrid' control={<Radio />} label="Hybrid" />
                                               <FormControlLabel value='Part-Time' control={<Radio />} label="Part-Time" />
                                           </RadioGroup>
                                       </FormControl>
                                   </div>

                               </div>

                           </div>
                       </div>
                   </div>
               </nav>
           </div>
       </div>
       <div className="lg:w-3/4">
           this is job card list
       </div>
   </div>
    );
};

export default AllJobs;