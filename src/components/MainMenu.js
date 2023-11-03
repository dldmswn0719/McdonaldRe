import React from 'react'

function MainMenu() {

    const Category = ["버거" ,"맥런치" ,"맥모닝" ,"해피스낵"];
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

    return (
        <>
            <div className="w-full px-5 py-20">
                <div className="max-w-7xl mx-auto">
                    <div>
                        <p className='text-3xl font-bold relative after:absolute after:w-20 after:h-1 after:bg-[#F9B900] after:left-0 after:-bottom-2'>Menu</p>
                    </div>
                    <div className="mt-10">
                        <ul className='flex'>
                            {
                                Category.map((e,i)=>{
                                    return(
                                        <li className='mr-3 text-xl' key={i}>{e}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="mt-10 flex flex-wrap justify-between">
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