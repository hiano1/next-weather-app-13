"use client";

import { useState } from "react";
import CityPicker from "./CityPicker";
import Clock from "react-live-clock";
import { ArrowRightIcon, MoonIcon } from "@heroicons/react/solid";
import Image from "next/image";

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
                    <div className="w-full h-12 relative my-2">
                        <Image src={"/vercel.svg"} alt="testIcon" fill={true} priority={true} />
                    </div>
                    {/* 로그인 */}
                    {/* if login 
                        사진 이름 로그아웃
                        즐겨찾는 지역 / 추가
                    */}
                    {/* not login */}
                    <div className="flex justify-center items-center gap-2 cursor-pointer text-sm font-semibold">
                        {/* <div className="text-2xl hover:bg-blue-100 rounded-full p-1">Google</div>
                        <div className="text-2xl hover:bg-blue-100 rounded-full p-1">KaKao</div> */}
                        <p>Login Now Save Your Location</p>
                        <ArrowRightIcon width={20} />
                    </div>
                    <hr className="my-3" />
                    {/* 검색창 / 지도로 검색*/}
                    {/* <div className="flex flex-col justify-center min-h-[30%]">
                        <input
                            className="p-2 rounded-2xl"
                            type="text"
                            value={searchValue}
                            onChange={getSearchValue}
                            placeholder="Search Location"
                        />
                        {searchValue == "" ?? (
                            <div className="pt-3 text-sm min-h-[8rem]">
                                <p>Can not find resently</p>
                            </div>
                        )}
                    </div> */}
                    <CityPicker />
                    <hr className="my-3" />
                </div>
                {/* 하단 */}
                <div>
                    {/* 시간 */}
                    <div className="flex flex-col mb-2">
                        <p className="texl-xl">
                            {new Date().toLocaleDateString("Kr-ko", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        <p className="text-4xl font-bold uppercase">
                            <Clock format="hh:mm a" timezone={Intl.DateTimeFormat().resolvedOptions().timeZone} />
                        </p>
                        <p className="font-extralight">TimeZone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
                    </div>
                    <hr className="py-2" />
                    {/* 테마모드 */}
                    <div className="w-full bg-blue-400 mb-4 rounded-full flex justify-between overflow-hidden">
                        <input className="w-1/3 bg-white" type="button" value={"Light"} />
                        <input className="w-1/3 bg-blue-200" type="button" value={"Weather"} />
                        {/* <input className="w-1/3 bg-gray-700 text-white" type="button" value={"Dark"} /> */}
                        <div className="w-1/3 bg-gray-700 text-white flex justify-center gap-1 cursor-pointer hover:font-semibold">
                            <MoonIcon width={18} />
                            <p>Dark</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideMenu;
