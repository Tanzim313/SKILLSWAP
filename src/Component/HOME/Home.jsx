import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { MdStarOutline } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link, useRouteLoaderData } from "react-router";
import AppDetails from "../APP/AppDetails";
import { CgBrowse } from "react-icons/cg";
import { SiCodementor } from "react-icons/si";
import { FaAddressBook } from "react-icons/fa";
import { SiGreatlearning } from "react-icons/si";
import StudentFeed from "../studentFeed";
import { FaRegHandPointRight } from "react-icons/fa";

const Home =()=>{


    const data = useRouteLoaderData('home-loader');
    console.log("data:",data);

    
    


    return(

        <div>
         
            <div className="mt-30 mb-30">
                <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {data.map((skill)=>(
            <SwiperSlide className="" key={skill.skillId}>
                
                <img 
                className="w-[400px] h-[400px]" 
                src={skill.image} 
                alt={skill.skillName} />
                
            </SwiperSlide>
        ))}
    
    </Swiper>

            </div>


        <div>
            <h1 className="text-center text-4xl font-bold mb-20 mt-20">Popular Skills</h1>
             
            <div className="grid grid-cols-3 gap-5">
            {data.map((skillData)=>(
                <div key={skillData.skillId} className="">
                    
                    <div className="border-2">
                        <div className="p-4 flex flex-col items-center text-center">
                        
                        <img className="w-[300px] h-[400px] mt-10" src={skillData.image} alt="" />

                            <h1 className="mt-10 font-bold">{skillData.skillName}</h1>
                        <div className="flex flex-row gap-x-15 mt-4 mb-4 items-center">
                            <p className="flex items-center gap-1"><MdStarOutline className="size-6" />{skillData.rating}</p>
                            <p>${skillData.price}</p>
                        </div>

                        <button className="mb-10 font-bold btn btn-primary ">
                            
                           <Link to={`/appDetails/${skillData.skillId}`}>
                                 View Details
                           </Link>
                            
                        </button>

                        </div>

                    </div> 


                </div>
            ))}
        </div>

        </div>


        
        <div>
            <h1 className="mt-20 text-5xl font-bold text-center">Extra Sections</h1>

            <div>
                <div>
                    <h1 className="mt-20 text-center text-xl font-bold">Top Rated Providers</h1>


                   <div className="grid grid-cols-3 p-20 gap-4">
                    {data
                    .filter(skill=>skill.rating>=4.8)
                    .slice(0,3)
                    .map(skill=>(

                        <div className="border-2 flex flex-col items-center p-5" key={skill.skillId}>
                             
                            <img 
                            className="w-50" 
                            src={skill.image} alt="" />

                            <div className="text-center mt-5 mb-5">
                                <h1 className="text-2xl font-bold mb-3">{skill.providerName}</h1>
                                <p className="font-bold mb-4">{skill.skillName}</p>
                                <p className=" flex gap-1 items-center justify-center text-xl font-bold text-yellow-600"><MdStarOutline className="size-6 " /> {skill.rating}</p>
                            </div>
                            
                        </div>

                    ))

                    
                    }
                   </div>


                   <div className="gap-y-12 mb-20 mt-20 flex flex-col items-center justify-center text-center">
                       <div>
                         
                        <h1 className="text-3xl font-bold mb-5">How the magic happens</h1>
                        <p>We make it super easy to find your perfect skill-swap buddy and start learning together!</p>

                       </div>
                    <div className="p-12 flex flex-col items-center justify-center text-xl border-2 w-100 h-50">
                        <h1 className="font-bold flex flex-col items-center"><CgBrowse className="size-20" />Browse Skills</h1>
                        <p>Explore skills from verified trainers</p>
                    </div>
                    <div className="p-10 flex flex-col justify-center items-center border-2 w-100 h-50 text-xl">
                        <h1 className="font-bold flex flex-col items-center"><SiCodementor className="size-20" />Choose Your Mentor</h1>
                        <p>Compare ratings,prices and reviews before booking</p>
                    </div>

                    <div className="p-12 border-2 w-100 h-50 flex flex-col justify-center items-center text-xl">
                        <h1 className="font-bold flex flex-col justify-center items-center"><FaAddressBook className="size-20 mb-4" />Book Session</h1>
                        <p>Select a time and confirm your booking instantly</p>
                    </div>
                    

                    <div className="p-12 text-xl flex flex-col justify-center items-center border-2 w-100 h-50">
                        <h1 className="font-bold flex flex-col justify-center items-center"><SiGreatlearning className="size-20 mb-4"/>Start Learning</h1>
                        <p>Join The Live Or Recorded Session And Grow Your Skill</p>
                    </div>
                   </div>

                </div>

                <div>





                    
                    
                </div>



            </div>

        </div>



            <div className="p-20">

                <StudentFeed></StudentFeed>


            </div>

            <div className="p-20">
            <div className="border-2 p-10 flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl font-bold mb-10">Why Choose Us</h1>

                <div className="mb-20">
                    <ul className="">
                        <li className="mb-4 rounded-md w-80 h-10 flex gap-4 justify-center items-center font-bold text-xl bg-cyan-500 shadow text-white">
                            <FaRegHandPointRight />
                            Expert Mentors
                        </li>
                        <li className="mb-4 rounded-md w-80 h-10 flex gap-4 justify-center items-center font-bold text-xl bg-cyan-500 shadow text-white">
                            <FaRegHandPointRight />
                            Affordable Pricing
                            </li>
                        <li className="mb-4 rounded-md w-80 h-10 flex gap-4 justify-center items-center font-bold text-xl bg-cyan-500 shadow text-white">
                            <FaRegHandPointRight />
                            24 Hours Support Session</li>
                        <li className="mb-4 rounded-md w-80 h-10 flex gap-4 justify-center items-center font-bold text-xl bg-cyan-500 shadow text-white">
                            <FaRegHandPointRight />
                            Real Project Experience</li>
                        <li className="rounded-md w-80 h-10 flex gap-4 justify-center items-center font-bold text-xl bg-cyan-500 shadow text-white">
                            <FaRegHandPointRight />
                            Certificate On Completion</li>
                    </ul>
                </div>
            </div>

            </div>


        


        
        </div>

    )

}

export default Home;