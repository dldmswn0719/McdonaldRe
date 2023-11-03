import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation , Pagination } from "swiper/modules";

function MainLive() {
    const LiveImg = [
        {
            "img" : "./../Images/live1.jpg",
            "desc" : "스리차차 마요"
        },
        {
            "img" : "./../Images/live2.jpg",
            "desc" : "토마토 치킨 스낵랩,칠리치즈후라이"
        },
        {
            "img" : "./../Images/live3.jpg",
            "desc" : "해피스낵"
        },
        {
            "img" : "./../Images/live4.jpg",
            "desc" : "M오더"
        },
        {
            "img" : "./../Images/live5.jpg",
            "desc" : "맥크리스피"
        },
        {
            "img" : "./../Images/live6.jpg",
            "desc" : "베이컨 토마토 에그 머핀"
        },
        {
            "img" : "./../Images/live7.jpg",
            "desc" : "칠러"
        },
        {
            "img" : "./../Images/live8.jpg",
            "desc" : "크루,매니저알아보기"
        },
        {
            "img" : "./../Images/live9.jpg",
            "desc" : "맥도날드 리워드"
        },
        {
            "img" : "./../Images/live10.png",
            "desc" : "맥도날드 품질 이야기"
        },
        {
            "img" : "./../Images/live11.jpg",
            "desc" : "맥카페"
        },
        {
            "img" : "./../Images/live12.jpg",
            "desc" : "맥도날드어린이축구교실"
        },
        {
            "img" : "./../Images/live13.png",
            "desc" : "임차의뢰 신청"
        }
    ]
    return (
        <>
            <div className="w-full px-5">
                <div className="max-w-7xl mx-auto">
                    <div>
                        <p className='text-3xl font-bold relative after:absolute after:w-60 after:h-1 after:bg-[#F9B900] after:left-0 after:-bottom-2 mb-10 '>McDonald’s LIVE</p>
                    </div>
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    navigation={{clickable: true}}
                    pagination={{clickable: true}}
                    modules={[Autoplay, Navigation ,Pagination]}
                    id='swiper'
                    >
                        {
                            LiveImg.map((e,i)=>{
                                return (
                                    <SwiperSlide key={i} className='relative'>
                                        <img className='w-full rounded-[30px]' src={e.img} alt={e.desc} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default MainLive