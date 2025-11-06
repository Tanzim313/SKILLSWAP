import React, { use, useState } from "react";
import { AuthContext } from "../../Authprovider/AuthContext";
import { useNavigate } from "react-router";



const Profile =()=>{

    const {user,updateUser}=use(AuthContext);

    const[edit,setEdit] = useState(false);
    const [name,setName] = useState(user?.displayName || "");
    const [photo,setPhoto] = useState(user?.photoURL||"");
    const [message,setMessage] = useState("");


    const handleUpdate = (e) =>{
        e.preventDefault();
        updateUser({displayName:name,photoURL:photo})
        .then(()=>{
            setMessage("profile updated successfully!");
            setEdit(false);
        })
        .catch(()=> setMessage("error updating profile"));
    };

    if(!user) return null;




    return(
        <div>
             {
                user ?
                <div className="p-10 flex flex-col items-center ">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center mt-10 mb-10">My Profile</h1>
                <div className="min-w-[300px] flex flex-col sm:flex-row gap-y-10 sm:gap-x-10 p-4 sm:p-10 items-center justify-center mb-20 border-2">
                    <div className="mt-10 sm:mt-0">
                        <img className=" w-[200px] h-[200px] rounded-full border-4 border-b-cyan-700 border-e-amber-500 border-l-emerald-600 border-t-fuchsia-700" src={user.photoURL} alt="" />
                    </div>
                    {!edit?(
                        <div className="mb-10 sm:mb-0">
                        <h1 className="text-3xl font-bold">Name:{user.displayName}</h1>
                        <p className="font-bold">Email:{user.email}</p>
                    
                        <button  
                        className="btn btn-primary mt-5 font-bold"
                        onClick={()=>setEdit(true)}>
                            Update Profile Button
                        </button>
                        {message&& <p className="text-green-700 mt-2"></p>}

                        </div>)
                        :
                        (
                            <form onSubmit={handleUpdate} className="flex flex-col gap-3">
                                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="input input-bordered" />
                                <input value={photo} onChange={(e)=>setPhoto(e.target.value)} type="text" className="input input-bordered" />
                                <button type="submit" className="btn btn-success">save</button>
                                <button type="button" className="btn btn-warning" onClick={()=>setEdit(false)}>Cancel</button>
                            </form>

                        )
                    }
                    
                </div>

                </div>
                : <div></div>
            }
        </div>

    )
}

export default Profile;