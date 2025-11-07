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
        <div className="p-8 sm:p-30">
            <div><Toaster/></div>
            
            <div className="flex flex-col justify-center items-center p-4 border-2 mb-10">

                <img 
                className="min-w-[250px]" 
                src={image} alt="" />
                
                <div className="text-center mt-10 font-bold flex flex-col justify-center items-center">
                    <h1 className="text-3xl mb-2">{skillName}</h1>
                    
                    <div className="flex flex-col items-center justify-center p-2">
                     <p>Instractor Name : {providerName}</p>
                     <p>Email : {providerEmail}</p>
                   </div>

                    <p className="text-xl mt-5 mb-5 w-[200px] bg-amber-500 p-1 rounded-md">Slots Available : {slotsAvailable}</p>
                    
                    <div className="mb-4 flex flex-row justify-between gap-20 items-center mt-4 ">
                        <p className="w-12 bg-amber-500 rounded-md">${price}</p>
                        <p className="w-12 bg-amber-500 rounded-md">{rating}</p>
                    </div>

                    
                    <p className="">{description}</p>
                    
                </div>


                
            </div>


            <div className="flex flex-col justify-center items-center border-2 p-8">
                    <h1 className="text-2xl font-bold mb-4">Book Session</h1>

                    <div>
                        <form onSubmit={handleSubmit} action="">

                       <label >
                        <input 
                        type="text" 
                        placeholder="Type here" 
                        className="input w-70"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        required

                        />
                       </label>
                        
                        <label className="floating-label mt-2 mb-2">
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

                        <button className="btn  btn-primary w-70">Submit</button>

                        </form>

                    </div>
                </div>
            
        </div>
    )




}

export default AppDetails;