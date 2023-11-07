import React from 'react'

function MainYoutube() {
    return (
        <>
             <div className="w-full px-5 my-10">
                <div className="max-w-7xl mx-auto">
                    <div>
                        <p className='text-3xl font-bold relative after:absolute after:w-72 after:h-1 after:bg-[#F9B900] after:left-0 after:-bottom-2 mb-10 '>McDonald’s  Youtube</p>
                    </div>
                    <div className="w-full flex">
                        <div className="w-[30%]">
                            <div className="h-16 bg-[#F9B900] text-white text-center flex items-center justify-center">
                                <ul>
                                    <li>매콤빠삭하게 레벨 업!</li>
                                    <li>맥크리스피 스리라차 마요</li>
                                </ul>
                            </div>
                            <div className="h-16 bg-[#FFE392] border-b border-[#F9B900] text-white text-center flex items-center justify-center">
                                <p>맥도날드 M오더 출시</p>
                            </div>
                            <div className="h-16 bg-[#FFE392] border-b border-[#F9B900] text-white text-center flex items-center justify-center">
                                <ul>
                                    <li>어서와, 제주 근무는 처음이지</li>
                                    <li>워킹홀리데이 in 제주</li>
                                </ul>
                            </div>
                            <div className="h-16 bg-[#FFE392] border-b border-[#F9B900] text-white text-center flex items-center justify-center">
                                <p>갓성비 간식 맛집 해피 스낵!</p>
                            </div>
                            <div className="h-16 bg-[#FFE392] text-white text-center flex items-center justify-center">
                                <ul>
                                    <li>[맥도날드x뉴진스]</li>
                                    <li>뉴진스와 함께 Chicken Dance!</li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="w-[70%]">
                            <iframe width="100%" height="320" src="https://www.youtube.com/embed/NDfh8m20dy4?si=ng4OZtL9UZmJ34co" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainYoutube