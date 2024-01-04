"use client";

import Image from "next/image";

type Props = {
    coordinates: { lat: number; long: number };
};

function OverView({ coordinates }: Props) {
    // const { data, error, isLoading } = useSWR("", (url: string) => fetch(url).then((res) => res.json()));

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

    // function exPromiseAll() {
    //     let arr = [1, 2, 3, 4, 5]

    //     const result = arr.map(async(i) => {
    //         await fetch('url', {
    //             method: "PUT"
    //             headers,
    //             body
    //         })
    //     }

    //     Promise.all((result).then(() => {await get비동기함수))
    // }

    return (
        <div className="flex gap-6">
            <div className="flex flex-col gap-4 font-semibold">
                <p className="text-6xl">{coordinates.lat}</p>
                <div className="flex font-light text-6xl">
                    <span>8</span>
                    <span className="text-4xl">º</span>
                </div>
                <div className="font-light text-sm">
                    <p>12º / -2º 체감온도 5º</p>
                    <p>UPDATE : 12/19 화 12:26</p>
                </div>
            </div>
            {/* todo add var img */}
            <div className="w-1/3 flex justify-center items-center relative">
                <Image src={"/vercel.svg"} alt="testIcon" fill={true} priority={true} />
            </div>
        </div>
    );
}

export default OverView;
