import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


const Root = () => {
    return (
        <div> 
            <div className=" bg-pink-200 ">
                 <NavBar/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Root;