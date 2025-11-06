import React, { useEffect, useState } from "react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const StudentFeed =()=>{
    const [feedbacks,setFeedbacks] = useState([]);


    useEffect(()=>{
        fetch("/student.json")
        .then((res)=>res.json())
        .then((data)=>setFeedbacks(data));
    },[]);




return(

    <div>

        <div>
            <h1 className="text-4xl font-bold text-center  mb-10">
                Students Feedback
            </h1>

        <Swiper
        modules={[Pagination, Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {feedbacks.map((feed)=>(

            <SwiperSlide key={feed.feedBackId}>

                <div className="flex flex-col justify-center items-center text-center border-2 p-10">
                <div className="">
                    <img
                    className="w-20 h-20 rounded-full border-2 mb-4"
                     src={feed.avatar} alt="" />
                </div>

                <h1 className="text-3xl font-bold mb-2 ">{feed.name}</h1>
                <p className="font-bold mb-2">{feed.course}</p>

                <p className="">{feed.comment}</p>
                </div>
            </SwiperSlide>
        ))}


      </Swiper>
    </div>

    </div>




)

}


export default StudentFeed;