import React, { useState } from 'react'

function MainMenu() {
    const [isActive,setIsActive] = useState(0);

    const Category = ["버거" ,"맥모닝" ,"해피스낵" , "맥카페&음료"];

    const MenuItems = {
        "버거" : [
            {
                "img" : "./../Images/menu1.svg",
                "desc" : "맥크리스피™ 스리라차 마요"
            },
            {
                "img" : "./../Images/menu2.svg",
                "desc" : "빅맥®"
            },
            {
                "img" : "./../Images/menu3.svg",
                "desc" : "더블 불고기 버거"
            },
            {
                "img" : "./../Images/menu4.svg",
                "desc" : "맥크리스피™ 디럭스 버거"
            }
        ],
        "맥모닝" : [
            {
                "img" : "./../Images/morning1.svg",
                "desc" : "베이컨 토마토 에그 머핀"
            },
            {
                "img" : "./../Images/morning2.svg",
                "desc" : "에그 맥머핀"
            },
            {
                "img" : "./../Images/morning3.svg",
                "desc" : "소시지 에그 맥머핀"
            },
            {
                "img" : "./../Images/morning4.svg",
                "desc" : "베이컨 에그 맥머핀"
            }
        ],
        "해피스낵" : [
            {
                "img" : "./../Images/happy1.svg",
                "desc" : "소시지 스낵랩"
            },
            {
                "img" : "./../Images/happy2.svg",
                "desc" : "타로 파이"
            },
            {
                "img" : "./../Images/happy3.svg",
                "desc" : "골든 모짜렐라 치즈스틱 2조각"
            },
            {
                "img" : "./../Images/happy4.svg",
                "desc" : "맥스파이시® 치킨 텐더 2조각"
            }
        ],
        "맥카페&음료" : [
            {
                "img" : "./../Images/cafe1.svg",
                "desc" : "자두 천도복숭아 칠러"
            },
            {
                "img" : "./../Images/cafe2.svg",
                "desc" : "제주 한라봉 칠러"
            },
            {
                "img" : "./../Images/cafe3.svg",
                "desc" : "아이스 바닐라 라떼"
            },
            {
                "img" : "./../Images/cafe4.svg",
                "desc" : "아이스 아메리카노"
            }
        ]

    }

    const [selectMenu, setSelectMenu] = useState(MenuItems[Category[isActive]]);

    const handleCategoryClick = (i) => {
        setIsActive(i);
        setSelectMenu(MenuItems[Category[i]]);
    };

    return (
        <>
            <div className="w-full py-10">
                <div className="max-w-7xl px-[3%] mx-auto">
                    <p className='md:text-3xl text-2xl font-bold relative after:absolute md:after:w-20 after:w-16 after:h-1 after:bg-[#F9B900] after:left-0 after:-bottom-2'>Menu</p>
                    <div className="lg:mt-10 md:mt-8 mt-5">
                        <ul className='flex flex-wrap'>
                            {
                                Category.map((e,i)=>{
                                    return(
                                        <li onClick={()=>{handleCategoryClick(i)}}  className={`mr-3 md:text-xl cursor-pointer ${isActive === i ? 'text-[#F9B900]' : 'text-black'}`} key={i}>{e}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="lg:mt-10 flex flex-wrap justify-between">
                        {
                            selectMenu.map((e,i)=>{
                                return(
                                    <div key={i} className="cursor-pointer border rounded-3xl lg:basis-[23%] md:basis-[49%] basis-full h-auto mt-5 lg:mt-0">
                                        <img className='w-full' src={e.img} alt={e.desc} />
                                        <div className="bg-[#FFDD79] py-5 rounded-[0px_0px_24px_24px]">
                                            <p className='text-white text-center text-lg font-medium'>{e.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainMenu