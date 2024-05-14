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


        </div>
    );
};

export default Home;