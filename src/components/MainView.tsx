"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Subtitle, Divider, Badge } from "@tremor/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function MainView() {
    const router = useRouter();

    const getPosSuccess = (pos: GeolocationPosition) => {
        router.push(`/location/YourPosition/${pos.coords.latitude}/${pos.coords.longitude}`);
    };

    const getPosError = () => {
        alert("위치사용 옵션을 켜주세요.");
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
            <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E]p-10 flex flex-col justify-center items-center">
                <Image
                    className="w-full h-full absolute"
                    src={"/snow.gif"}
                    width={100}
                    height={100}
                    alt="mainBackGround"
                />
                {/* <div className="w-12 h-12 rounded-full fixed bg-red-200 top-4 right-4">btn</div> */}

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
