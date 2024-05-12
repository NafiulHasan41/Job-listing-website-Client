import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div> 
            <div className=" bg-pink-200 ">
                <h1 className=" text-red-900 text-xl text-center">This is root</h1>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Root;