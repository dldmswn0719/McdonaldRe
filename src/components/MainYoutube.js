import React, { useState } from 'react'

function MainYoutube() {

    const YoutubeList = [
        { title: '매콤빠삭하게 레벨 업! 맥크리스피 스리라차 마요', url: "https://www.youtube.com/embed/bdWM4GO6Hz0?si=0nUsj4pUlPegInxV" },
        { title: '맥도날드 M오더 출시', url: "https://www.youtube.com/embed/0dX4PXoQ9nI?si=GZdni5kIUJnAdK6B" },
        { title: '어서와, 제주 근무는 처음이지 워킹홀리데이 in 제주', url: "https://www.youtube.com/embed/e_LkIs6prWg?si=yGlYIjKD1DktegU7" },
        { title: '갓성비 간식 맛집 해피 스낵!', url: "https://www.youtube.com/embed/k6r5Ixj_MC4?si=oUieUHmjhcfuSKEP" },
        { title: '[맥도날드x뉴진스] 뉴진스와 함께 Chicken Dance!', url: "https://www.youtube.com/embed/NDfh8m20dy4?si=ng4OZtL9UZmJ34co" },
    ]

    const [YoutubeUrl, setYoutubeUrl] = useState(YoutubeList[0].url);

    const [selectedTitle, setSelectedTitle] = useState(0);

    const TitleClick = (url, index) => {
        setYoutubeUrl(url);
        setSelectedTitle(index);
    };

    return (
        <>
             <div className="w-full my-10">
                <div className="max-w-7xl px-[3%] mx-auto">
                    <p className='md:text-3xl text-2xl font-bold relative after:absolute md:after:w-72 after:w-56 after:h-1 after:bg-[#F9B900] after:left-0 after:-bottom-2 mb-10 '>McDonald’s Youtube</p>
                    <div className="w-full flex flex-wrap">
                        <div className="basis-[30%] hidden md:block">
                            {
                                YoutubeList.map((e, i) => (
                                    <div key={i} onClick={() => TitleClick(e.url ,i)} className={`h-16 text-white text-center flex items-center justify-center cursor-pointer px-1 ${selectedTitle === i ? 'bg-[#F9B900]' : 'bg-[#FFE392]'}`}>
                                        <ul>
                                            <li>{e.title}</li>
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="basis-full md:hidden">
                            {
                                YoutubeList.map((e,i)=>{
                                    return(
                                        <div key={i} onClick={() => TitleClick(e.url ,i)} className={`h-14 text-white text-center flex items-center justify-center cursor-pointer p-1 ${selectedTitle === i ? 'bg-[#F9B900]' : 'bg-[#FFE392]'}`}>
                                            <ul>
                                                <li>{e.title}</li>
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="md:basis-[70%] basis-full">
                            <iframe width="100%" height="320" src={YoutubeUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainYoutube