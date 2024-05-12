import { useState } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateList = ( ) => {

    const navigate = useNavigate();

    const spot= useLoaderData();
 

    const [country, setCountry] = useState("");

    const handleCountryChange = (value) => {
      setCountry(value);
   
    };



// handle update operation 
    const handleUpdateCoffee = (e ) => {
       
        

        e.preventDefault();
    
        const form = e.target;
        const imageURL = form.url.value;
        const touristSpotName = form.touristSpotName.value;
        const location = form.location.value;
        const description = form.description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorPerYear = form.TotalVisitorPerYear.value;
     
    
        const updatedSpot = { imageURL, touristSpotName, location, description, average_cost, seasonality, travel_time, totalVisitorPerYear , country };
       
    
     
    
        // send data to the server
        fetch(`https://tour-guide-server-green.vercel.app/touristSpots/${spot._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist Spot Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      
                    })

                    navigate("/myList");
                }
            })
    }
    return (
        <div>
               <h1 className=" text-cyan-500 drop-shadow-2xl text-xl md:text-4xl font-bold text-center my-5 md:my-20">Update Your Tourist Spot</h1>
                              <form  onSubmit={(e) => handleUpdateCoffee(e)}
                                  className=" bg-gradient-to-b from-cyan-500 to-cyan-200 rounded-2xl p-3 md:p-7 shadow-2xl shadow-cyan-500/70">
                                  <div>
                                      <label className="label">
                                          <span className="label-text text-red-500 text-xl font-bold">
                                              Image URL
                                          </span>
                                      </label>
                                      <input type="url" name="url" placeholder="URL"
                                          className="input input-bordered w-full" defaultValue={spot.imageURL} required />
                                  </div>
                                  <div className=" flex flex-col md:items-end md:flex-row gap-5 my-5">
                                      <div className=" flex-1">
                                          <label className="label">
                                              <span className="label-text text-red-500 text-xl font-bold">
                                                  Tourist Spot Name
                                              </span>
                                          </label>
                                          <input type="text" name="touristSpotName" placeholder="Name"
                                              className="input input-bordered w-full" defaultValue={spot.touristSpotName} required />
                                      </div>
                                      <div className=" flex-1">
                                          <div className=" text-center mt-5">
                                              <label className="label">
                                                  <span className="label-text text-red-500 text-xl font-bold">
                                                      Country Name
                                                  </span>
                                              </label>
                                              <select className="select select-bordered w-full  "  required
                                                  onChange={(event)=>
                                                  handleCountryChange(event.target.value)}
                                                  defaultValue={spot.country}
                                                  >
                                                  <option value="default" disabled>
                                                      Country Name
                                                  </option>
                                                  <option value="bangladesh">Bangladesh</option>
                                                  <option value="thailand">Thailand</option>
                                                  <option value="indonesia">Indonesia</option>
                                                  <option value="malaysia">Malaysia</option>
                                                  <option value="vietnam">Vietnam</option>
                                                  <option value="cambodia">Cambodia</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>

                                  <div>
                                      <label className="label">
                                          <span className="label-text text-red-500 text-xl font-bold">
                                              Location:
                                          </span>
                                      </label>
                                      <input type="text" name="location" placeholder="Location"
                                          className="input input-bordered w-full" defaultValue={spot.location} required />
                                  </div>
                                  <div>
                                      <label className="label">
                                          <span className="label-text text-red-500 text-xl font-bold">
                                              Short Description:
                                          </span>
                                      </label>
                                      <input type="text" name="description" placeholder="Short Description"
                                          className="textarea textarea-bordered textarea-lg w-full" defaultValue={spot.description} required />
                                  </div>
                                  <div className=" ">
                                      <div className="flex-1">
                                          <label className="label">
                                              <span className="label-text text-red-500 text-xl font-bold">
                                                  Average Cost:
                                              </span>
                                          </label>
                                          <input type="number" name="average_cost" placeholder="Average_cost"
                                              className="input input-bordered w-full" defaultValue={spot.average_cost} required />
                                      </div>
                                      <div className="flex-1">
                                          <label className="label">
                                              <span className="label-text text-red-500 text-xl font-bold">
                                                  Seasonality:
                                              </span>
                                          </label>
                                          <input type="text" name="seasonality"
                                              placeholder="Seasonality-like summer , winter"
                                              className="input input-bordered w-full" defaultValue={spot.seasonality} required />
                                      </div>
                                      <div className="flex-1">
                                          <label className="label">
                                              <span className="label-text text-red-500 text-xl font-bold">
                                                  Travel Time:
                                              </span>
                                          </label>
                                          <input type="text" name="travel_time" placeholder="Travel_time like-7days"
                                              className="input input-bordered w-full" defaultValue={spot.travel_time} required />
                                      </div>
                                      <div className="flex-1">
                                          <label className="label">
                                              <span className="label-text text-red-500 text-xl font-bold">
                                                  TotalVisitorPerYear:
                                              </span>
                                          </label>
                                          <input type="number" name="TotalVisitorPerYear"
                                              placeholder="TotalVisitorPerYear" className="input input-bordered w-full"
                                              defaultValue={spot.totalVisitorPerYear}
                                              required />
                                      </div>

                                  </div>

                                  <div className="my-3">
                                      <button  className="btn bg-rose-500 border-black w-full ">Update</button>
                                  </div>
                              </form>
                             
        </div>
    );
};

export default UpdateList;