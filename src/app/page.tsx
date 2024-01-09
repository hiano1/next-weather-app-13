"use client";
import { useEffect, useState } from "react";
import DefaultWeather from "@/app/view/ShowDefaultWeather";
import { SWRConfig } from "swr";
import { PlusCircleIcon } from "@heroicons/react/solid";
import SideMenu from "@/app/view/ShowSideMenu";
import { useSearchParams } from "next/navigation";

type Coordinates = { lat: number; long: number };

export default function Home() {
    const searchParams = useSearchParams();

    const x = searchParams.get("x");
    const y = searchParams.get("y");

    const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
    const [isResetPosition, setIsResetPosition] = useState(true);

    // set coordinates
    useEffect(() => {
        x &&
            y &&
            setCoordinates({
                lat: parseInt(y),
                long: parseInt(x),
            });
        setIsResetPosition(false);
    }, [x, y]);

    useEffect(() => {
        isResetPosition &&
            navigator.geolocation.getCurrentPosition(
                (pos: GeolocationPosition) => {
                    setCoordinates({
                        lat: pos.coords.latitude,
                        long: pos.coords.longitude,
                    });
                    setIsResetPosition(false);
                    console.log("set user location");
                },
                () => {
                    setCoordinates({
                        lat: 37.5326,
                        long: 127.024612,
                    });
                    setIsResetPosition(false);
                    console.log("set default location");
                    //위치 사용 on 안내 alert
                },
                {
                    enableHighAccuracy: false,
                    maximumAge: 30000,
                    timeout: 1000,
                },
            );
    }, [isResetPosition]);

    if (coordinates) {
        return (
            <>
                <SWRConfig
                    value={{
                        refreshInterval: 600000,
                        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
                    }}
                >
                    <div className="w-full flex-none md:w-72">
                        <SideMenu />
                    </div>
                    <div className="md:overflow-y-scroll w-full">
                        <DefaultWeather coordinates={coordinates} />
                    </div>
                </SWRConfig>
                {/* todo data binding */}
                {/* <div className="flex flex-col gap-8 justify-center"> */}
                {/* over view */}
                {/* 현재 시간기준 기온,날씨 그래프 (가로) */}
                {/* <TempChart results={} /> */}
                {/* 어제 포함 / 현재 요일기준 기온,날씨 그래프 (세로?) */}
                {/* 미세먼지, 일출일몰, 자외선지수 ,습도 ,바람 카드 */}
                {/* <Badge
                        className="mb-5 cursor-pointer bg-blue-700 hover:bg-pink-300 text-white"
                        onClick={getCurrentPositionWeather}
                    >
                        Get Current Position Weather
                    </Badge> */}
                {/* <Card className="bg-[#ffffff3f]">{data}</Card> */}
                {/* </div> */}
            </>
        );
    }
    return (
        <>
            <div className="w-full min-h-screen flex flex-col items-center justify-center text-slate-500">
                <PlusCircleIcon className="h-24 w-24 animate-spin text-yellow-500" color="yellow" />
                <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">Loading Page...</h1>
            </div>
        </>
    );
}
