import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div> 
            <div >
                 <NavBar/>
            </div>
            <div className='min-h-[calc(100vh-250px)]'>
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Root;