type Current = {
    apparent_temperature: number;
    cloud_cover: number;
    interval: number;
    is_day: number;
    precipitation: number;
    rain: number;
    relative_humidity_2m: number;
    showers: number;
    snowfall: number;
    temperature_2m: number;
    time: string;
    weather_code: number;
};

type CurrentUnits = {
    apparent_temperature: string;
    cloud_cover: string;
    interval: string;
    is_day: string;
    precipitation: string;
    rain: string;
    relative_humidity_2m: string;
    showers: string;
    snowfall: string;
    temperature_2m: string;
    time: string;
    weather_code: string;
};

type Daily = {
    apparent_temperature_max: [number];
    apparent_temperature_min: [number];
    daylight_duration: [number];
    precipitation_hours: [number];
    precipitation_probability_max: [number];
    precipitation_sum: [number];
    rain_sum: [number];
    showers_sum: [number];
    snowfall_sum: [number];
    sunrise: [string];
    sunset: [string];
    sunshine_duration: [number];
    temperature_2m_max: [number];
    temperature_2m_min: [number];
    time: [string];
    uv_index_clear_sky_max: [number];
    uv_index_max: [number];
    weather_code: [number];
};

type DailyUnits = {
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    daylight_duration: string;
    precipitation_hours: string;
    precipitation_probability_max: string;
    precipitation_sum: string;
    rain_sum: string;
    showers_sum: string;
    snowfall_sum: string;
    sunrise: string;
    sunset: string;
    sunshine_duration: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    time: string;
    uv_index_clear_sky_max: string;
    uv_index_max: string;
    weather_code: string;
};

type Hourly = {
    apparent_temperature: [number];
    cloud_cover: [number];
    dew_point_2m: [number];
    precipitation: [number];
    precipitation_probability: [number];
    rain: [number];
    relative_humidity_2m: [number];
    showers: [number];
    snow_depth: [number];
    snowfall: [number];
    temperature_2m: [number];
    time: [string];
    uv_index: [number];
    uv_index_clear_sky: [number];
    visibility: [number];
    weather_code: [number];
};

type HourlyUnits = {
    apparent_temperature: string;
    cloud_cover: string;
    dew_point_2m: string;
    precipitation: string;
    precipitation_probability: string;
    rain: string;
    relative_humidity_2m: string;
    showers: string;
    snow_depth: string;
    snowfall: string;
    temperature_2m: string;
    time: string;
    uv_index: string;
    uv_index_clear_sky: string;
    visibility: string;
    weather_code: string;
};

type Root = {
    current: Current;
    current_units: CurrentUnits;
    daily: Daily;
    daily_units: DailyUnits;
    elevation: number;
    generationtime_ms: number;
    hourly: Hourly;
    hourly_units: HourlyUnits;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
};
