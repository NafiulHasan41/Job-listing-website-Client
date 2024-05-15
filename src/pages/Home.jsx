import Banner from "../components/Banner";
import homeImage from "../assets/homeImage.jpeg"
import { motion } from "framer-motion";
import TabCategories from "../components/TabCategories";




const Home = () => {

    

    return (
        <div>  
             <Banner/>

             <div>

             </div>
           {/* used framer-motion */}
             <div className="example-container my-5 rounded-2xl  md:my-10 mx-auto w-[70%]">
                 <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                 <img className="rounded-2xl" src={homeImage} alt="" />
                 </motion.div>
                 
             </div>

             <div>
                <TabCategories/>
             </div>
                 
                 
        
               
                <div>
                <div className=" mt-5 ">
            <h1 className="text-xl md:text-4xl text-cyan-500 text-center">Contact Us</h1>
         <div className="mx-auto  rounded-3xl p-4 md:p-10 shadow-2xl ">
            <div className=" md:w-[50%] mx-auto">
            <label className="input input-bordered flex items-center my-2 md:my-5">
           Name
           <input type="text" className="grow" placeholder="" />
       </label>
       <label className="input input-bordered flex items-center my-2 md:my-5">
           Email
           <input type="email" className="grow" placeholder="" />
       </label>
            </div>

            <div className=" text-center md:w-[50%] mx-auto">
            <textarea placeholder="Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
            </div>

            <div className="md:w-[50%] mx-auto my-5">
            <button className="btn btn-primary w-full ">Submit</button>
            </div>
      
   </div>
         </div>
                </div>


        </div>
    );
};

export default Home;