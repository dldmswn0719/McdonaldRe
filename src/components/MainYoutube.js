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
             <div className="w-full px-5 my-10">
                <div className="max-w-7xl mx-auto">
                    <div>
                        <p className='text-3xl font-bold relative after:absolute after:w-72 after:h-1 after:bg-[#F9B900] after:left-0 after:-bottom-2 mb-10 '>McDonald’s Youtube</p>
                    </div>
                    <div className="w-full flex">
                        <div className="w-[30%]">
                            {/* FFE392 */}
                            {
                                YoutubeList.map((e, i) => (
                                    <div key={i} onClick={() => TitleClick(e.url ,i)} className={`h-16 text-white text-center flex items-center justify-center cursor-pointer ${selectedTitle === i ? 'bg-[#F9B900]' : 'bg-[#FFE392]'}`}>
                                        <ul>
                                            <li>{e.title}</li>
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="w-[70%]">
                            <iframe width="100%" height="320" src={YoutubeUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainYoutube