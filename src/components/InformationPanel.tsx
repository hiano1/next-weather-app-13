import CityPicker from "./CityPicker";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import weatehrCodetoString from "@/lib/weatherCodetoString";

type Props = {
    city: string;
    lat: string;
    long: string;
    results: Root;
};

function InformationPanel({ city, lat, long, results }: Props) {
    // console.log(results.hourly.time);
    return (
        <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] text-white p-6">
            <div className="pb-5">
                <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
                <p className="text-xs text-gray-400">
                    Lat/Long: {lat}, {long}
                </p>
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
                    <p className="font-extralight">TimeZone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
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
                <Image
                    src={`https://www.weatherbit.io/static/img/icons/${
                        weatehrCodetoString[results.current.weather_code].icon
                    }.png`}
                    alt={weatehrCodetoString[results.current.weather_code].label}
                    width={75}
                    height={75}
                />
                <div>
                    <div className="flex items-center justify-between space-x-10">
                        <p className="text-5xl font-medium">
                            {results.current.temperature_2m.toFixed(1)}
                            {results.current_units.temperature_2m}
                        </p>
                        <p className="text-right font-extralight text-3xl">
                            {weatehrCodetoString[results.current.weather_code].label}
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-2 py-5">
                <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
                    <SunIcon className="h-10 w-10 text-gray-400" />
                    <div className="flex-1 flex justify-between items-center">
                        <p className="font-extralight text-xl">Sunrise</p>
                        <p className="uppercase text-2xl">
                            {new Date(results.daily.sunrise[0]).toLocaleTimeString("en-GB", {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                            })}
                        </p>
                    </div>
                </div>

                <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
                    <MoonIcon className="h-10 w-10 text-gray-400" />
                    <div className="flex-1 flex justify-between items-center">
                        <p className="font-extralight text-xl">Sunset</p>
                        <p className="uppercase text-2xl">
                            {new Date(results.daily.sunset[0]).toLocaleTimeString("en-GB", {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformationPanel;
