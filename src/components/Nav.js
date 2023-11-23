import { faChevronDown, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Nav() {

    const NavItems = ["Menu", "Store", "What’s New", "Story"];
    const NavSubItems = [
        ["버거", "맥런치", "맥모닝", "해피 스낵", "사이드 & 디저트", "맥카페 & 음료", "해피밀"],
        ["매장찾기","맥딜리버리","맥드라이브","임차문의"],
        ["프로모션","새로운 소식","이달의 해피밀"],
        ["브랜드 소개","사회적 책임과 지원","맥도날드 품질 이야기","맥도날드 사람들"]
    ];

    const [menuActive,setMenuActive] = useState(false);
    const [isSubActive,setIsSubActive] = useState(false);
    const [mnavActive,setMnavActive] = useState(false)
    
    const [subActive,setSubActive] = useState(NavItems.map(()=>false))

    const toggleSubMenu = (i) => {
        const newSubActive = subActive.map((active, index) => index === i ? !active : false);
        setSubActive(newSubActive);
    };

    const toggleMenu = () =>{
        setMenuActive(!menuActive)
    };

    return (
        <>
            <div className="w-full px-5 sticky top-0 bg-white py-4 z-50 border-b border-[#F9B900]">
                <div className="max-w-7xl mx-auto hidden md:block">
                    <ul className='flex justify-end pt-2'>
                        <li className='cursor-pointer pl-3'>
                            <p>임차문의</p>
                        </li>
                        <li className='cursor-pointer pl-3'>
                            <p>RECRUIT</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEarthAmericas} className='cursor-pointer pl-3 text-lg' />
                        </li>
                    </ul>
                </div>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <img src="./../Images/logo.png" alt="logo" className='md:w-20 md:h-20 w-12 h-12' />
                    <div className="basis-4/5 hidden md:block">
                        <ul className='flex justify-between'>
                            {
                                NavItems.map((e,i)=>{
                                    return(
                                        <li onMouseOver={()=>setIsSubActive(true)} className="text-lg cursor-pointer relative hover:font-bold after:absolute after:w-full after:h-0.5 after:bg-[#F9B900] after:-bottom-1 after:left-0 after:transition-all after:duration-500 after:scale-x-0 hover:after:scale-x-100" key={i}>{e}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                {
                    isSubActive &&
                    <div onMouseLeave={()=>setIsSubActive(false)} className="w-full left-0 absolute bg-white">
                        <div className="flex max-w-5xl mx-auto">
                            {
                                NavSubItems.map((e, i) => {
                                    return(
                                        <ul key={i} className="basis-[80%]">
                                            {
                                                e.map((el, index) => {
                                                    return(
                                                        <li key={index} className="hover:text-[#ffbc0d] hover:font-bold cursor-pointer py-3 text-[#808080]">{el}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>

            {/* 모바일 햄버거버튼 */}
            <div onClick={toggleMenu} className="fixed right-5 top-6 z-[51] cursor-pointer md:hidden">
                <div className={`w-[30px] h-[5px] bg-[#F9B900] rounded m-[5px] transition-all duration-500 ${menuActive && `rotate-45 translate-y-[10px]`}`}></div>
                <div className={`w-[30px] h-[5px] bg-[#F9B900] rounded m-[5px] transition-all duration-500 ${menuActive && `opacity-0 -translate-x-8`}`}></div>
                <div className={`w-[30px] h-[5px] bg-[#F9B900] rounded m-[5px] transition-all duration-500 ${menuActive && `-rotate-45 -translate-y-[10px]`}`}></div>
            </div>
            <div className={`w-full h-full fixed bg-white top-0 z-50 p-12 box-border transition-all duration-500 md:hidden ${menuActive ? 'left-0' : 'left-full'}`}>
                <ul>
                    <li>
                        <img src="./../Images/logo.png" alt="logo" className='w-16 h-16' />
                    </li>
                    {
                        NavItems.map((e,i)=>{
                            return(
                                <li className={`cursor-pointer border-b py-5 ${mnavActive === i ? 'text-[#ffbc0d]' : 'text-black'}`} key={i} onClick={()=>{toggleSubMenu(i);setMnavActive(i);}}>
                                    {e}
                                    {
                                        subActive[i] && NavSubItems[i].map((el, index) => {
                                            return(
                                                <p key={index} className="hover:text-[#ffbc0d] mt-1 hover:font-bold cursor-pointer py-3 text-[#808080]">{el}</p>
                                            )
                                        })
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Nav