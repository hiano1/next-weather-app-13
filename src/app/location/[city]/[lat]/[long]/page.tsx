"use client";

import CalloutCard from "@/components/CalloutCard";
import InformationPanel from "@/components/InformationPanel";
import RainChart from "@/components/RainChart";
import StatCard from "@/components/StatCard";
import TempChart from "@/components/TempChart";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { SunIcon } from "@heroicons/react/solid";

export const revalidate = 60;

type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    };
};

const query = gql`
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
`;

export default function WeatherPage({ params: { city, lat, long } }: Props) {
    const { loading, error, data } = useQuery(query, {
        variables: {
            current:
                "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover",
            hourly: "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,cloud_cover,visibility,uv_index,uv_index_clear_sky",
            daily: "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max",
            latitude: lat,
            longitude: long,
            models: "best_match",
            timezone: "Asia/Tokyo",
        },
    });

    if (loading)
        return (
            <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] min-h-screen flex flex-col items-center justify-center text-slate-500">
                <SunIcon className="h-24 w-24 animate-bounce text-yellow-500" color="yellow" />
                <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">Loading Information...</h1>
            </div>
        );
    if (error) {
        return <p>Something went wrong...</p>;
    }
    const result: Root = data.myQuery;
    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            <InformationPanel city={city} lat={lat} long={long} results={result} />
            <div className="flex-1 p-5 lg:p-10">
                <div className="p-5">
                    <div className="pb-5">
                        <h2 className="text-xl font-bold">Todays Overview</h2>
                        <p>
                            Last Updated at: {new Date(result.current.time).toLocaleString()}({result.timezone})
                        </p>
                    </div>
                    <div className="m-2 mb-10">
                        <CalloutCard message="This is Where GPT-4 Summary Will go!" warning={false} />
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
                        <StatCard
                            title="최대 기온"
                            metric={`${result.daily.temperature_2m_max[0].toFixed(1)}${
                                result.daily_units.temperature_2m_max
                            }`}
                            color="yellow"
                        />
                        <StatCard
                            title="최저 기온"
                            metric={`${result.daily.temperature_2m_min[0].toFixed(1)}${
                                result.daily_units.temperature_2m_min
                            }`}
                            color="green"
                        />
                        <div>
                            <StatCard
                                title="자외선 지수"
                                metric={`${result.daily.uv_index_max[0].toFixed(1)}${result.daily_units.uv_index_max}`}
                                color="rose"
                            />
                            {Number(result.daily.uv_index_max[0].toFixed(1)) > 5 && (
                                <CalloutCard message="자외선이 높습니다 활동에 주의하세요!" warning />
                            )}
                        </div>

                        <div className="flex space-x-3">
                            <StatCard
                                title="강수 확률"
                                metric={`${result.daily.precipitation_probability_max[0].toFixed(1)}${
                                    result.daily_units.precipitation_probability_max
                                }`}
                                color="cyan"
                            />
                            <StatCard
                                title="강수량"
                                metric={`${result.daily.precipitation_sum[0].toFixed(1)}${
                                    result.daily_units.precipitation_sum
                                }`}
                                color="violet"
                            />
                        </div>
                    </div>
                </div>
                <hr className="mb-5" />
                <div className="space-y-3">
                    <TempChart results={result} />
                    <RainChart results={result} />
                </div>
            </div>
        </div>
    );
}
