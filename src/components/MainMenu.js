import React, { useState } from 'react'

function MainMenu() {
    const [isActive,setIsActive] = useState(0);

    const Category = ["버거" ,"맥모닝" ,"해피스낵" , "맥카페&음료"];
    const MenuItems = [
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
    ]

    // const MenuItems = [
    //     {
    //         "img" : "./../Images/morning1.png",
    //         "desc" : "맥크리스피™ 스리라차 마요"
    //     },
    //     {
    //         "img" : "./../Images/menu2.svg",
    //         "desc" : "빅맥®"
    //     },
    //     {
    //         "img" : "./../Images/menu3.svg",
    //         "desc" : "더블 불고기 버거"
    //     },
    //     {
    //         "img" : "./../Images/menu4.svg",
    //         "desc" : "맥크리스피™ 디럭스 버거"
    //     }
    // ]

    return (
        <>
            <div className="w-full px-5 py-10">
                <div className="max-w-7xl mx-auto">
                    <div>
                        <p className='text-3xl font-bold relative after:absolute after:w-20 after:h-1 after:bg-[#F9B900] after:left-0 after:-bottom-2'>Menu</p>
                    </div>
                    <div className="lg:mt-10 md:mt-8 mt-5">
                        <ul className='flex'>
                            {
                                Category.map((e,i)=>{
                                    return(
                                        <li onClick={()=>{setIsActive(i)}} className={`mr-3 text-xl cursor-pointer ${isActive === i ? 'text-[#F9B900]' : 'text-black'}`} key={i}>{e}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="lg:mt-10 flex flex-wrap justify-between">
                        {
                            MenuItems.map((e,i)=>{
                                return(
                                    <div key={i} className="cursor-pointer border rounded-[30px] lg:basis-[23%] md:basis-[49%] basis-full h-auto mt-5 lg:mt-0">
                                        <img className='w-full' src={e.img} alt={e.desc} />
                                        <div className="bg-[#FFDD79] py-5 rounded-[0px_0px_30px_30px]">
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