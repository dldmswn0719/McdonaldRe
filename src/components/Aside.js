import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Aside() {

    const MoveTop = () =>{
        window.scrollTo({
            top:0,behavior:'smooth'
        })
    } 

    return (
        <>
            <div className="fixed z-10 right-10 bottom-10 cursor-pointer" onClick={MoveTop}>
                <div className="bg-[#F9B900] w-14 h-14 rounded-full">
                    <FontAwesomeIcon className='text-white w-8 h-8 ml-3 mt-3' icon={faChevronUp} />
                </div>
            </div>
        </>
    )
}

export default Aside