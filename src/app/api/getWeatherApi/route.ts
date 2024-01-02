import { gql } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { NextRequest, NextResponse } from "next/server";

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
type Props = {
    lat: number;
    long: number;
};

export async function GET(request: NextRequest, { lat, long }: Props) {
    // Provided by Vercel
    // if (request.geo) {
    //     const geo = {
    //         city: request.geo.city,
    //         cuntry: request.geo.country,
    //         region: request.geo.region,
    //         lat: request.geo.latitude,
    //         long: request.geo.longitude,
    //     };
    //     return NextResponse.json(geo);
    // }

    const defulatGeo = {
        city: "강남",
        cuntry: "서울",
        region: "한국",
        lat: 37.5326,
        long: 127.024612,
    };
    return NextResponse.json(lat);
}

// Self-hosting
// function getGeo(request: NextRequest) {
//     let ip = request.headers.get("X-Forwarded-For");
//     // Use a third-party service to lookup the geographic information
// }

// const { lat, long } = await req;
// const { error, data } = useQuery(query, {
//     variables: {
//         current:
//             "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover",
//         hourly: "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,cloud_cover,visibility,uv_index,uv_index_clear_sky",
//         daily: "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max",
//         latitude: lat,
//         longitude: long,
//         models: "best_match",
//         timezone: "Asia/Tokyo",
//     },
// });

// if (error) {
//     return "error!";
// }
// const result: Root = data.myQuery;
