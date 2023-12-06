"use client";

import CalloutCard from "@/components/CalloutCard";
import InformationPanel from "@/components/InformationPanel";
import StatCard from "@/components/StatCard";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    };
};

const query = gql`
    query myQuery($current: String, $hourly: String, $latitude: String, $longitude: String, $timezone: String) {
        myQuery(current: $current, hourly: $hourly, latitude: $latitude, longitude: $longitude, timezone: $timezone) {
            current {
                interval
                relative_humidity_2m
                temperature_2m
                time
            }
            current_units {
                interval
                relative_humidity_2m
                temperature_2m
                time
            }
            elevation
            generationtime_ms
            hourly {
                apparent_temperature
                dew_point_2m
                relative_humidity_2m
                temperature_2m
                time
            }
            hourly_units {
                apparent_temperature
                dew_point_2m
                relative_humidity_2m
                temperature_2m
                time
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
            current: "temperature_2m,relative_humidity_2m",
            hourly: "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature",
            latitude: lat,
            longitude: long,
            timezone: "Asia/Tokyo",
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) {
        return <p>Something went wrong...</p>;
    }
    const result: Root = data.myQuery;
    console.log(result);
    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            <InformationPanel city={city} lat={lat} long={long} results={result} />
            <div className="flex-1 p-5 lg:p-10">
                <div className="p-5">
                    <div className="pb-5">
                        <h2 className="text-xl font-bold">Todays Overview</h2>
                        <p>
                            Last Updated at: {new Date().toLocaleString()}({result.timezone})
                        </p>
                    </div>
                    <div className="m-2 mb-10">
                        <CalloutCard message="This is Where GPT-4 Summary Will go!" warning={false} />
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
                        <StatCard
                            title="This is Where GPT-4 Summary Will go!"
                            metric={result.current_units.temperature_2m}
                        />
                    </div>

                    <hr className="mb-5" />
                    <div className="space-y-3">
                        {/*  */}
                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
    );
}
