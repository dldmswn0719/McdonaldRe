import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full bg-[#292929] px-5 py-10">
        <div className="max-w-7xl mx-auto flex justify-center">
            <ul className="flex text-white space-x-3">
                <li className="text-[#ffff00]">개인정보 처리방침</li>
                <li>위치정보</li>
                <li>이용약관</li>
                <li>사이트맵</li>
                <li>임차문의</li>
                <li>고객문의</li>
                <li>인재채용</li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
