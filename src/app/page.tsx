"use client";

import CityPicker from "@/components/CityPicker";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Card } from "@tremor/react";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [isResetPosition, setIsResetPosition] = useState(true);
    const [position, setPosition] = useState<number[]>();
    const [addressName, setAddressName] = useState("");
    const sideRef = useRef<any>(null);

    //메뉴 아이콘 토글 TODO
    const toggleSideMenu = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
        setIsOpen((prevState) => !prevState);
    };

    // 사이드메뉴 오픈시 바깥영역 클릭하면 닫힘
    useEffect(() => {
        function clickOutSide(e: MouseEvent) {
            if (sideRef.current && !sideRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", clickOutSide);
        return () => {
            document.removeEventListener("mousedown", clickOutSide);
        };
    }, [sideRef]);

    const getPosSuccess = (pos: GeolocationPosition) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
        setIsResetPosition(false);
    };
    //TODO
    const getPosError = () => {
        //허용 안되어있는 경우 default seoul
        const lat = 37.5326;
        const long = 127.024612;

        setPosition([lat, long]);
        setIsResetPosition(false);
        //위치 사용 on 안내
    };

    const getCurrentPositionWeather = useCallback(
        () =>
            isResetPosition &&
            navigator.geolocation.getCurrentPosition(getPosSuccess, getPosError, {
                enableHighAccuracy: false,
                maximumAge: 30000,
                timeout: 100,
            }),
        [isResetPosition],
    );

    useEffect(() => {
        getCurrentPositionWeather();
    }, [getCurrentPositionWeather]);

    const getKakaoAdress = (lat: number, long: number) => {
        const url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${long}&y=${lat}`;
        const adress = fetch(url, {
            headers: {
                Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error("KakaoApiError : ", error);
            });
        return adress;
    };

    useEffect(() => {
        if (position) {
            getKakaoAdress(position[0], position[1]).then((adress) => {
                setAddressName(adress.documents[0].region_2depth_name);
            });
            const weahter = fetch(`/api/getWeatherApi?lat=${position[0]}&long=${position[1]}`)
                .then((response) => response.json())
                .catch((error) => {
                    console.error("WeatherApiError : ", error);
                });
        }
    }, [position]);
    // weather api=> data

    //합쳐서 comp 전달

    return (
        <>
            <div
                className={`min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] ${
                    isOpen && `bg-[#0000004d]`
                } flex justify-center items-center`}
            >
                {/* side menu */}
                {/* 로그인 / 옵션(즐찾 추가/삭제, 로그아웃, 단위설정?) */}
                {/* 즐겨찾는 지역 */}
                {/* 최근검색 지역? */}
                {/* 지도로 위치 검색 */}
                {/* 배경색 , 영상 날씨에 따라 변경 */}
                {/* api 새로고침 버튼 */}
                {/* 지역명, 온도, 아이콘, 최저/고 온도 /체감온도 날짜 요일 시간 */}
                <div className="max-w-4xl mx-auto w-full">
                    {isOpen && (
                        <div className="absolute z-10 h-full w-2/5 bg-gray-600 p-10 self-start" ref={sideRef}>
                            <div className="pt-10 pb-5">
                                <p className="text-xs text-gray-400"></p>
                            </div>
                            <CityPicker />
                            <hr className="my-10" />
                            <div className="mt-5 flex items-center justify-between mb-5 space-x-10">
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
                            <hr className="my-8" />
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center justify-between space-x-10">
                                        <p className="text-5xl font-medium"></p>
                                        <p className="text-right font-extralight text-3xl"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2 py-5">
                                <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
                                    <div className="flex-1 flex justify-between items-center">
                                        <p className="font-extralight text-xl">Sunrise</p>
                                        <p className="uppercase text-2xl"></p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
                                    <div className="flex-1 flex justify-between items-center">
                                        <p className="font-extralight text-xl">Sunset</p>
                                        <p className="uppercase text-2xl"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="min-h-screen px-5 flex flex-col gap-8 relative justify-center">
                        <Image
                            className="absolute top-4 cursor-pointer dark:stroke-black hover:scale-125 z-10"
                            src={"/menu.svg"}
                            width={40}
                            height={40}
                            alt="menu"
                            onClick={(e) => {
                                toggleSideMenu(e);
                            }}
                        />

                        <div className="flex">
                            <div className="flex flex-col text-white gap-2 font-semibold w-1/2">
                                {/* <p className=" text-7xl">Seoul</p> */}
                                <p className=" text-4xl">{addressName}</p>
                                <div className="flex font-light text-6xl">
                                    <span>8</span>
                                    <span className="text-4xl">º</span>
                                </div>
                                <div className="text-sm">
                                    <p>12º / -2º 체감온도 5º</p>
                                    <p>12/19 화 12:26</p>
                                </div>
                            </div>
                            <div className="w-1/2 flex justify-center items-center relative">
                                <Image src={"/vercel.svg"} alt="testIcon" fill={true} priority={true} />
                            </div>
                        </div>
                        {/* 현재 시간기준 기온,날씨 그래프 (가로) */}
                        {/* <TempChart results={} /> */}
                        {/* 어제 포함 / 현재 요일기준 기온,날씨 그래프 (세로?) */}
                        {/* 미세먼지, 일출일몰, 자외선지수 ,습도 ,바람 카드*/}
                        <Card className="bg-[#ffffff3f]">
                            {/* <Badge
                        className="mb-5 cursor-pointer bg-blue-700 hover:bg-pink-300 text-white"
                        onClick={getCurrentPositionWeather}
                    >
                        Get Current Position Weather
                    </Badge> */}
                        </Card>
                        <Card className="bg-[#ffffff3f]"></Card>
                    </div>
                </div>
            </div>
        </>
    );
}
