"use client";

import CityPicker from "@/components/CityPicker";
import TempChart from "@/components/TempChart";
import { Card, Subtitle, Divider, Badge } from "@tremor/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function MainView() {
    const router = useRouter();

    const getPosSuccess = (pos: GeolocationPosition) => {
        router.push(`/location/YourPosition/${pos.coords.latitude}/${pos.coords.longitude}`);
    };

    const getPosError = () => {
        alert("위치사용을 허용하시면 더 정확한 정보 제공이 가능합니다.");
    };
    const getCurrentPositionWeather = () => {
        navigator.geolocation.getCurrentPosition(getPosSuccess, getPosError, {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000,
        });
    };
    //좌표 없는경우 언어 기준 수도로 default 설정?
    //좌표 받아서 kakao api => 주소 / weather api=> data
    //합쳐서 comp 전달

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
            {/* side menu */}
            {/* 로그인 / 옵션(즐찾 추가/삭제, 로그아웃, 단위설정?) */}
            {/* 즐겨찾는 지역 */}
            {/* 최근검색 지역? */}
            {/* 지도로 위치 검색 */}
            {/* 배경색 , 영상 날씨에 따라 변경 */}
            {/* api 새로고침 버튼 */}
            {/* 지역명, 온도, 아이콘, 최저/고 온도 /체감온도 날짜 요일 시간 */}
            {/* PC/ mobile 만들기 귀찮으니까 pc를 모바일처럼 좁게 만들기 */}
            <div className="max-w-3xl mx-auto w-full flex flex-col gap-8">
                <div className="flex">
                    <div className="flex flex-col text-white gap-2 font-semibold w-1/2">
                        <p className=" text-7xl">Seoul</p>
                        <div className="flex font-light text-6xl">
                            <span>8</span>
                            <span className="text-4xl">º</span>
                        </div>
                        <div className="text-sm">
                            <p>12º / -2º 체감온도 5º</p>
                            <p>12/19 화 12:26</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <Image src={"/vercel.svg"} alt="testIcon" width={120} height={120} />
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
    );
}

export default MainView;
