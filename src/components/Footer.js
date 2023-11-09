import React from "react";
import { Link } from "react-router-dom";

function Footer() {

  const Txt = ["개인정보 처리방침" , "위치정보" ,"이용약관" ,"사이트맵" ,"임차문의" ,"고객문의" ,"인재채용"]

  const SnsIcon = [
    {
      "img" : "./../Images/facebook.png",
      "desc" : "facebook",
      "site" : "https://www.facebook.com/McDonaldsKorea"
    },
    {
      "img" : "./../Images/instagram.png",
      "desc" : "instagram",
      "site" : "https://www.instagram.com/mcdonalds_kr/"
    },
    {
      "img" : "./../Images/youtube.png",
      "desc" : "youtube",
      "site" : "https://www.youtube.com/user/McDonaldsKor"
    },
    {
      "img" : "./../Images/kakaostory.png",
      "desc" : "kakaostory",
      "site" : "https://story.kakao.com/ch/mcdonalds/feed"
    }
  ]

  return (
    <>
      <div className="w-full bg-[#292929] px-5 pt-10 pb-5">
        <div className="max-w-7xl mx-auto flex justify-center">
          <ul className="flex flex-wrap basis-4/5 justify-center text-white space-x-3">
            {
              Txt.map((e,i)=>{
                return(
                  <li key={i} className="first:text-[#ffff00] ">{e}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="max-w-7xl mx-auto flex justify-center mt-5">
          <ul className="flex justify-center items-center space-x-4">
            {
              SnsIcon.map((e,i)=>{
                return(
                  <li key={i}>
                    <Link to={e.site} target="_blank">
                      <img className={`${e.desc === 'instagram' ? 'w-12 h-12' : 'w-10 h-10'}`} src={e.img} alt={e.desc} />
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="flex flex-wrap md:justify-between justify-center">
          <div className="text-[#ddd] my-5 md:text-sm text-xs">
            <p>한국 맥도날드(유) 대표이사: 김기원 사업자등록번호: 101-81-26409 전화주문: 1600-5252</p>
            <p>COPYRIGHT © 2019 ALL RIGHTS RESERVED BY McDonald's.</p>
          </div>
          <div className="ml-10 md:mt-0">
            <Link to="http://kwacc.or.kr/CertificationSite/WA/1664/Detail?page=1" target="_blank">
              <img className="w-24" src="./../Images/web_accessibility.png" alt="web_accessibility" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
