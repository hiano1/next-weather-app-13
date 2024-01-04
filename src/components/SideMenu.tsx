"use client";

import { useState } from "react";
import CityPicker from "./CityPicker";
import Clock from "react-live-clock";
import { ArrowRightIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Switch, TextInput } from "@tremor/react";

//메뉴 아이콘 토글 TODO
// const toggleSideMenu = (e: React.MouseEvent<HTMLImageElement>) => {
//     e.stopPropagation();
//     setIsOpen((prevState) => !prevState);
// };

// 사이드메뉴 오픈시 바깥영역 클릭하면 닫힘
// useEffect(() => {
//     function clickOutSide(e: MouseEvent) {
//         if (sideRef.current && !sideRef.current.contains(e.target)) {
//             setIsOpen(false);
//         }
//     }
//     document.addEventListener("mousedown", clickOutSide);
//     return () => {
//         document.removeEventListener("mousedown", clickOutSide);
//     };
// }, [sideRef]);

function SideMenu() {
    const [searchValue, setSearchValue] = useState("");
    const getSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        console.log(e.target.value);
    };

    const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
    const handleSwitchChange = (value: boolean) => {
        setIsSwitchOn(value);
    };

    return (
        <>
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
                        <p>Login Now Save Your Location</p>
                        <ArrowRightIcon width={20} />
                    </div>
                    <hr className="my-3" />
                    {/* 검색창 / 지도로 검색*/}
                    <TextInput
                        className="my-4"
                        placeholder="Search Location"
                        value={searchValue}
                        onChange={getSearchValue}
                    />
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
                        <p className="text-4xl font-bold uppercase static">
                            <Clock
                                format="hh:mm:ss a"
                                timezone={Intl.DateTimeFormat().resolvedOptions().timeZone}
                                noSsr
                                ticking
                            />
                        </p>
                        <p className="font-extralight">TimeZone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
                    </div>
                    <hr className="py-2" />
                    {/* 테마모드 */}
                    <div className="flex justify-end pb-2 gap-2 text-white">
                        <SunIcon width={24} />
                        <Switch
                            id="switch"
                            name="switch"
                            className="flex items-center"
                            color={"#ffffff"}
                            checked={isSwitchOn}
                            onChange={handleSwitchChange}
                        />
                        <MoonIcon width={24} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideMenu;
