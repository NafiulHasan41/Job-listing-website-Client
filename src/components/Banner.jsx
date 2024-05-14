import Carousel from "../components/Carousel";




const Banner = () => {
    return (
        <header className=" bg-bannerImg mb-5 rounded-b-3xl shadow-xl  ">

      <div className=" px-6 mx-auto w-full rounded-b-3xl bg-gray-900/30  shadow-xl">
        <div className="items-center lg:flex w-full">
            <div className="flex-1 w-full ">
                <div className="lg:max-w-lg lg:w-[90%] mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">We are the best <span className="text-blue-400"> job providers</span></h1>

                    <p className="mt-3 font-bold text-gray-300 dark:text-gray-400">Search your desired   <span className="font-medium text-blue-400">Jobs</span> here and Post your job</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row justify-center">
                        <input id="search" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Job search"/>

                        <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-400 font-bold rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1 items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 rounded-xl">
                <Carousel/>
            </div>
        </div>
    </div>
</header>
    );
};

export default Banner;