import React from 'react'

function Search() {
    return (
        <>
            <div className="w-full px-5 mt-10">
                <div className="max-w-7xl mx-auto">
                    <div className="basis-full border lg:py-7 md:py-5 py-4 rounded-[50px] shadow-[4px_4px_30px_6px_rgba(0,0,0,.09)]">
                        <div className="flex justify-between">
                            <input className='focus:outline-none ml-5 md:ml-10 md:text-xl basis-full ' type="text" placeholder='매장 또는 메뉴정보를 검색하세요.' />
                            <img onClick={()=>alert("개발중인 서비스입니다.")} src="./../Images/search.png" className='w-8 h-8 cursor-pointer mr-5 md:mr-10 md:w-10 md:h-10' alt="search" />
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Search