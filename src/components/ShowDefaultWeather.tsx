"use client";

import Image from "next/image";
import useSWR from "swr";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import RainChart from "./RainChart";
import TempChart from "./TempChart";
import { Card } from "@tremor/react";

type Props = {
    coordinates: { lat: number; long: number };
};

export default function ShowDefaultWeather({ coordinates }: Props) {
    const { data: adress } = useSWR(`/api/getKakaoAdress?lat=${coordinates.lat}&long=${coordinates.long}`);
    const { data: weather, error } = useQuery(
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

    if (!weather) {
        return "error!";
    }
    const result: Root = weather.myQuery;
    if (!adress) return "loading...";
    return (
        <>
            <Card className="bg-[#ffffff3f] flex gap-6">
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
            </Card>

            {/* todo add var img */}
            <div className="w-1/3 flex justify-center items-center relative">
                <Image src={"/vercel.svg"} alt="testIcon" fill={true} priority={true} />
            </div>
            {/* <p>adress : {adress.toString}</p> */}
            <RainChart results={result} />
            <TempChart results={result} />
        </>
    );
}
