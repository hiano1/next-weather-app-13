"use client";

import { Card } from "@tremor/react";
import { useCallback, useEffect, useState } from "react";
import OverView from "@/components/OverView";
import useSWR from "swr";

function Home() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const [isResetPosition, setIsResetPosition] = useState(true);
    const [addressName, setAddressName] = useState("");
    const [url, setUrl] = useState("");

    //날씨는 그냥 api로

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

    const getCurrentPositionWeather = () => {
        isResetPosition &&
            navigator.geolocation.getCurrentPosition(
                (pos: GeolocationPosition) => {
                    setUrl(`/api/getWeatherApi?lat=${pos.coords.latitude}&long=${pos.coords.longitude}`);

                    setIsResetPosition(false);
                },
                () => {
                    setUrl(`/api/getWeatherApi?lat=${37.5326}&long=${127.024612}`);

                    setIsResetPosition(false);
                    //위치 사용 on 안내 alert
                },
                {
                    enableHighAccuracy: false,
                    maximumAge: 30000,
                    timeout: 100,
                },
            );
    };

    if (isResetPosition) {
    } else {
    }
    // 그냥 이부분을 comp로 이동시키고 use suspense
    // const { data, error, isLoading } = useSWR(url, fetcher);

    // getCurrentPositionWeather();

    // const getKakaoAdress = (lat: number, long: number) => {
    //     const url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${long}&y=${lat}`;
    //     const adress = fetch(url, {
    //         headers: {
    //             Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
    //         },
    //     })
    //         .then((response) => response.json())
    //         .catch((error) => {
    //             console.error("KakaoApiError : ", error);
    //         });
    //     return adress;
    // };

    // useEffect(() => {
    //     if (position) {
    //         getKakaoAdress(position[0], position[1]).then((adress) => {
    //             setAddressName(adress.documents[0].region_2depth_name);
    //         });
    //         const weahter = fetch(`/api/getWeatherApi?lat=${position[0]}&long=${position[1]}`)
    //             .then((response) => response.json())
    //             .catch((error) => {
    //                 console.error("WeatherApiError : ", error);
    //             });
    //     }
    // }, [position]);
    // weather api=> data

    //합쳐서 comp 전달

    return (
        <>
            {/* todo data binding */}
            <div className="flex flex-col gap-8 justify-center">
                {/* over view */}
                {/* need Suspense? */}
                {/* <OverView addressName={addressName} /> */}
                {/* 현재 시간기준 기온,날씨 그래프 (가로) */}
                {/* <TempChart results={} /> */}
                {/* 어제 포함 / 현재 요일기준 기온,날씨 그래프 (세로?) */}
                {/* 미세먼지, 일출일몰, 자외선지수 ,습도 ,바람 카드 */}
                <Card className="bg-[#ffffff3f]">
                    {/* <Badge
                        className="mb-5 cursor-pointer bg-blue-700 hover:bg-pink-300 text-white"
                        onClick={getCurrentPositionWeather}
                    >
                        Get Current Position Weather
                    </Badge> */}
                </Card>
                {/* <Card className="bg-[#ffffff3f]">{data}</Card> */}
            </div>
        </>
    );
}

export default Home;
