"use client";

import CityPicker from "../../components/CityPicker";
import { ArrowRightIcon } from "@heroicons/react/solid";
import SearchAdress from "@/components/AdressSearchBox";
import LiveClock from "@/components/LiveClock";
import Image from "next/image";
import ThemeSwitch from "@/components/ThemeSwitch";

function SideMenu() {
    return (
        <>
            <div className="h-full md:border-r-4 px-4 flex flex-col justify-between">
                {/* 상단 */}
                <div className="pt-4 flex flex-col gap-2">
                    {/* logo */}
                    <div className="w-full h-28 relative">
                        <Image src={"/logo.svg"} alt="testIcon" fill className="object-contain" />
                    </div>
                    {/* 로그인 */}
                    {/* if login 
                        사진 이름 로그아웃
                        즐겨찾는 지역 / 추가
                    */}
                    {/* not login */}
                    <div className="flex justify-center items-center gap-2 cursor-pointer text-sm font-semibold">
                        <p>Login Now Save Your Location</p>
                        <ArrowRightIcon width={20} />
                    </div>
                    <hr className="my-3" />
                    <SearchAdress />
                </div>
                {/* 하단 */}
                <div>
                    <LiveClock />
                    <hr className="py-2" />
                    <ThemeSwitch />
                </div>
            </div>
        </>
    );
}

export default SideMenu;
