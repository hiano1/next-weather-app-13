type Current = {
    interval: number;
    relative_humidity_2m: number;
    temperature_2m: number;
    time: Date;
};

type CurrentUnits = {
    interval: string;
    relative_humidity_2m: string;
    temperature_2m: string;
    time: string;
};

type Hourly = {
    apparent_temperature: [number];
    dew_point_2m: [number];
    relative_humidity_2m: [number];
    temperature_2m: [number];
    time: [Date];
};

type HourlyUnits = {
    apparent_temperature: string;
    dew_point_2m: string;
    relative_humidity_2m: string;
    temperature_2m: string;
    time: string;
};

type Root = {
    current: Current;
    current_units: CurrentUnits;
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
