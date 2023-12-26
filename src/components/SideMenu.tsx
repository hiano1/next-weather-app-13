"use client";

import { useState } from "react";

function SideMenu() {
    const [searchValue, setSearchValue] = useState("");
    const getSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        console.log(e.target.value);
    };

    return (
        <>
            {/* 하단 */}
            <div className="h-full md:border-r-4 px-4 flex flex-col justify-between">
                {/* 상단 */}
                <div className="pt-4">
                    {/* 로그인 */}
                    {/* if login 
                        사진 이름 로그아웃
                        즐겨찾는 지역 / 추가
                    */}
                    {/* not login */}
                    <div className="flex justify-evenly items-center ">
                        <div className="text-2xl hover:bg-blue-100 rounded-full p-1">Google</div>
                        <div className="text-2xl hover:bg-blue-100 rounded-full p-1">KaKao</div>
                    </div>
                    <p className="text-xs pt-2">Login Now Save Your Location</p>
                    <hr className="my-3" />
                    {/* 검색창 / 지도로 검색*/}
                    <div className="flex flex-col justify-center min-h-[30%]">
                        <input
                            className="p-2 rounded-2xl"
                            type="text"
                            value={searchValue}
                            onChange={getSearchValue}
                            placeholder="Search Location"
                        />
                        {/* 최근검색 지역 검색시 사라짐 */}
                        {/* recent empty */}
                        {searchValue == "" ?? (
                            <div className="pt-3 text-sm min-h-[8rem]">
                                <p>Can not find resently</p>
                            </div>
                        )}
                    </div>
                    <hr className="my-3" />
                </div>
                {/* 하단 */}
                <div>
                    {/* TODO 시간 실시간으로 */}
                    {/* 요일 시간 */}
                    <div className="flex flex-col mb-5 ">
                        <div>
                            <p className="texl-xl">
                                {new Date().toLocaleDateString("Kr-ko", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                            <p className="font-extralight">
                                TimeZone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                            </p>
                        </div>
                        <p className="text-3xl font-bold uppercase">
                            {new Date().toLocaleTimeString("en-GB", {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                            })}
                        </p>
                    </div>
                    {/* 테마모드 */}
                    {/* white, 날씨별, black */}
                    {/* 3중 스위치 */}
                    {/* 언어 옵션 */}
                </div>
            </div>
        </>
    );
}

export default SideMenu;
