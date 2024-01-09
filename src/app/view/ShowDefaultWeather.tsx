"use client";

import useSWR from "swr";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import RainChart from "../../components/RainChart";
import TempChart from "../../components/TempChart";
import { SunIcon } from "@heroicons/react/solid";
import InformationPanel from "../../components/InformationPanel";
import StatCardList from "@/components/StatCardList";

type Props = {
    coordinates: { lat: number; long: number };
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

export default function ShowDefaultWeather({ coordinates }: Props) {
    const { data: adress } = useSWR<KaKaoAdress>(`/api/getKakaoAdress?lat=${coordinates.lat}&long=${coordinates.long}`);
    const { data: weather } = useQuery(
        gql`
            query myQuery(
                $current: String
                $daily: String
                $hourly: String
                $latitude: String
                $longitude: String
                $models: String
                $timezone: String
            ) {
                myQuery(
                    current: $current
                    daily: $daily
                    hourly: $hourly
                    latitude: $latitude
                    longitude: $longitude
                    models: $models
                    timezone: $timezone
                ) {
                    current {
                        apparent_temperature
                        cloud_cover
                        interval
                        is_day
                        precipitation
                        rain
                        relative_humidity_2m
                        showers
                        snowfall
                        temperature_2m
                        time
                        weather_code
                    }
                    current_units {
                        apparent_temperature
                        cloud_cover
                        interval
                        is_day
                        precipitation
                        rain
                        relative_humidity_2m
                        showers
                        snowfall
                        temperature_2m
                        time
                        weather_code
                    }
                    daily {
                        apparent_temperature_max
                        apparent_temperature_min
                        daylight_duration
                        precipitation_hours
                        precipitation_probability_max
                        precipitation_sum
                        rain_sum
                        showers_sum
                        snowfall_sum
                        sunrise
                        sunset
                        sunshine_duration
                        temperature_2m_max
                        temperature_2m_min
                        time
                        uv_index_clear_sky_max
                        uv_index_max
                        weather_code
                    }
                    daily_units {
                        apparent_temperature_max
                        apparent_temperature_min
                        daylight_duration
                        precipitation_hours
                        precipitation_probability_max
                        precipitation_sum
                        rain_sum
                        showers_sum
                        snowfall_sum
                        sunrise
                        sunset
                        sunshine_duration
                        temperature_2m_max
                        temperature_2m_min
                        time
                        uv_index_clear_sky_max
                        uv_index_max
                        weather_code
                    }
                    elevation
                    generationtime_ms
                    hourly {
                        apparent_temperature
                        cloud_cover
                        dew_point_2m
                        precipitation
                        precipitation_probability
                        rain
                        relative_humidity_2m
                        showers
                        snow_depth
                        snowfall
                        temperature_2m
                        time
                        uv_index
                        uv_index_clear_sky
                        visibility
                        weather_code
                    }
                    hourly_units {
                        apparent_temperature
                        cloud_cover
                        dew_point_2m
                        precipitation
                        precipitation_probability
                        rain
                        relative_humidity_2m
                        showers
                        snow_depth
                        snowfall
                        temperature_2m
                        time
                        uv_index
                        uv_index_clear_sky
                        visibility
                        weather_code
                    }
                    latitude
                    longitude
                    timezone
                    timezone_abbreviation
                    utc_offset_seconds
                }
            }
        `,
        {
            variables: {
                current:
                    "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover",
                hourly: "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,cloud_cover,visibility,uv_index,uv_index_clear_sky",
                daily: "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max",
                latitude: coordinates.lat,
                longitude: coordinates.long,
                models: "best_match",
                timezone: "Asia/Tokyo",
            },
        },
    );

    if (!weather || !adress) {
        return (
            <div className="bg-[#3a3a3a] min-h-screen flex flex-col items-center justify-center text-slate-500">
                <SunIcon className="h-24 w-24 animate-bounce text-yellow-500" color="yellow" />
                <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">Loading Weather...</h1>
            </div>
        );
    }

    const result: Root = weather.myQuery;

    return (
        <>
            <div className="text-white p-8 flex flex-col gap-6">
                <InformationPanel results={result} adress={adress} />
                <StatCardList result={result} />
                <RainChart results={result} />
                <TempChart results={result} />
            </div>
        </>
    );
}
