"use client";

import CityPicker from "@/components/CityPicker";
import TempChart from "@/components/TempChart";
import { Card, Subtitle, Divider, Badge } from "@tremor/react";
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

    return (
        <>
            {/* side menu */}
            {/* 로그인 / 옵션(즐찾 추가/삭제, 로그아웃, 단위설정?) */}
            {/* 즐겨찾는 지역 */}
            {/* 최근검색 지역? */}
            {/* 지도로 위치 검색 */}
            <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E]p-10 flex flex-col justify-center items-center">
                {/* 배경색 , 영상 날씨에 따라 변경 */}
                {/* api 새로고침 버튼 */}
                {/* 지역명, 온도, 아이콘, 최저/고 온도 /체감온도 날짜 요일 시간 */}
                {/* PC/ mobile 만들기 귀찮으니까 pc를 모바일처럼 좁게 만들기 */}
                <div>
                    <div>아이콘</div>
                    <div>
                        <div>지역명</div>
                        <div>온도</div>
                        <div>최저 최대기온 체감온도</div>
                        <div>업데이트 시간(api)</div>
                    </div>
                </div>
                {/* 현재 시간기준 기온,날씨 그래프 (가로) */}
                <TempChart results={} />
                {/* 어제 포함 / 현재 요일기준 기온,날씨 그래프 (세로?) */}
                {/* 미세먼지, 일출일몰, 자외선지수 ,습도 ,바람 카드*/}

                <Card className="max-w-4xl mw-auto shadow-xl">
                    <p className="text-7xl font-bold text-center mb-6 dark:text-white">Todays Weather</p>
                    <Subtitle className="text-sm text-center">
                        Powered by OpenAI, Next.js, Tailwind CSS, Tremor, Vercel
                    </Subtitle>
                    <Divider className="my-5" />
                    <Badge
                        className="mb-5 cursor-pointer bg-blue-700 hover:bg-pink-300 text-white"
                        onClick={getCurrentPositionWeather}
                    >
                        Get Current Position Weather
                    </Badge>
                    <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
                        <CityPicker />
                    </Card>
                </Card>
            </div>
        </>
    );
}

export default MainView;
