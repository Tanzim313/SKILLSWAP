import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams, useRouteLoaderData } from "react-router";


const AppDetails =()=>{

    const {id} = useParams();
    const skillId = parseInt(id);

    

    const data = useRouteLoaderData('app-loader');


    const skillData = data?data.find(skill=>skill.skillId === skillId):null;

    console.log("skillApp:",skillData)

    console.log("appData:",data,skillId);


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");


    const handleSubmit=(event)=>{

        event.preventDefault();
        toast.success('Successfully Submission!');

        setName("");
        setEmail("");


    };


    const{

        image,
        skillName,
        providerName,
        providerEmail,
        price,
        slotsAvailable,
        description,
        rating,
        category

    }=skillData

    return(
        <div className="p-25">
            <div><Toaster/></div>
            
            <div className="flex flex-col justify-center items-center p-10 border-2">

                <img 
                className="max-w-100" 
                src={image} alt="" />
                
                <div className="text-center mt-10 font-bold">
                    <h1 className="text-3xl mb-2">{skillName}</h1>
                    
                    <div className="flex flex-row justify-around items-center mt-4">
                        <p>${price}</p>
                        <p>{rating}</p>
                    </div>

                    <div className="flex flex-col items-center justify-center p-2">
                     <p>Instractor Name : {providerName}</p>
                     <p>Instractor Email : {providerEmail}</p>
                   </div>

                    <p className="text-xl mt-10 mb-5">Slots Available : {slotsAvailable}</p>
                    <p>{description}</p>
                    
                </div>


                
            </div>


            <div>
                    <h1>Book Session</h1>

                    <div>
                        <form onSubmit={handleSubmit} action="">

                       <label >
                        <input 
                        type="text" 
                        placeholder="Type here" 
                        className="input"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        required

                        />
                       </label>
                        
                        <label className="floating-label">
                            <span>Your Email</span>
                            <input 
                            type="email" 
                            placeholder="mail@site.com" 
                            className="input input-md" 
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required
                            
                            />
                        </label>

                        <button className="btn  btn-primary">Submit</button>

                        </form>

                    </div>
                </div>
            
        </div>
    )




}

export default AppDetails;