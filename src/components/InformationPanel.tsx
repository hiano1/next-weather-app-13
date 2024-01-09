import Image from "next/image";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import weatehrCodetoString from "@/lib/weatherCodetoString";

type Props = {
    results: Root;
    adress: KaKaoAdress;
};
type KaKaoAdress = {
    address_name: string;
    code: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    region_4depth_name: string;
    region_type: string;
    x: number;
    y: number;
};

function InformationPanel({ results, adress }: Props) {
    // console.log(results.hourly.time);
    return (
        <div className="">
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex flex-col justify-between gap-4">
                        <p className="text-3xl">{adress.address_name}</p>
                        <p className="text-5xl font-medium">
                            {results.current.temperature_2m.toFixed(1)}
                            {results.current_units.temperature_2m}
                        </p>
                        <p className="font-extralight text-3xl">
                            {weatehrCodetoString[results.current.weather_code].label}
                        </p>
                    </div>
                </div>
                <Image
                    src={`https://www.weatherbit.io/static/img/icons/${
                        weatehrCodetoString[results.current.weather_code].icon
                    }.png`}
                    alt={weatehrCodetoString[results.current.weather_code].label}
                    width={150}
                    height={150}
                />
            </div>
        </div>
    );
}

export default InformationPanel;
