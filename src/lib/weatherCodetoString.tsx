const weatehrCodetoString: {
    [key: number]: {
        icon: string;
        label: string;
    };
} = {
    0: {
        icon: "c01d",
        label: "Clear sky",
    },
    1: {
        icon: "c02d",
        label: "Mainly clear",
    },
    2: {
        icon: "c03d",
        label: "partly cloudy",
    },
    3: {
        icon: "c04d",
        label: "overcast",
    },
    45: {
        icon: "s05d",
        label: "Fog",
    },
    48: {
        icon: "s05d",
        label: "depositing rime fog",
    },
    51: {
        icon: "d01d",
        label: "lightDrizzle",
    },
    53: {
        icon: "d01d",
        label: "moderateDrizzle",
    },
    55: {
        icon: "d01d",
        label: "lightFreezingDrizzle",
    },
    56: {
        icon: "d01d",
        label: "lightFreezingDrizzle",
    },
    57: {
        icon: "d01d",
        label: "moderateOrDenseFreezingDrizzle",
    },
    61: {
        icon: "r01d",
        label: "lightRain",
    },
    63: {
        icon: "r01d",
        label: "moderateRain",
    },
    65: {
        icon: "r01d",
        label: "heavyRain",
    },
    66: {
        icon: "f01d",
        label: "lightFreezingRain",
    },
    67: {
        icon: "f01d",
        label: "moderateOrHeavyFreezingRain",
    },
    71: {
        icon: "s02d",
        label: "slightSnowfall",
    },
    73: {
        icon: "s02d",
        label: "moderateSnowfall",
    },
    75: {
        icon: "s02d",
        label: "heavySnowfall",
    },
    77: {
        icon: "s02d",
        label: "snowGrains",
    },
    80: {
        icon: "r02d",
        label: "slightRainShowers",
    },
    81: {
        icon: "r02d",
        label: "moderateRainShowers",
    },
    82: {
        icon: "r02d",
        label: "heavyRainShowers",
    },
    85: {
        icon: "s01d",
        label: "slightSnowShowers",
    },
    86: {
        icon: "s01d",
        label: "heavySnowShowers",
    },
    95: {
        icon: "t04d",
        label: "thunderstormSlightOrModerate",
    },
    96: {
        icon: "t04d",
        label: "thunderstormStrong",
    },
    99: {
        icon: "t04d",
        label: "thunderstormHeavy",
    },
};
