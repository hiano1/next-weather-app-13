const weatehrCodetoString: {
    [key: number]: {
        icon: string;
        label: string;
    };
} = {
    0: {
        icon: "c01d",
        label: "맑음",
    },
    1: {
        icon: "c02d",
        label: "대체로 맑음",
    },
    2: {
        icon: "c03d",
        label: "조금 흐림",
    },
    3: {
        icon: "c04d",
        label: "많이 흐림",
    },
    45: {
        icon: "s05d",
        label: "안개",
    },
    48: {
        icon: "s05d",
        label: "서리 안개",
    },
    51: {
        icon: "d01d",
        label: "약한 이슬비",
    },
    53: {
        icon: "d01d",
        label: "이슬비",
    },
    55: {
        icon: "d01d",
        label: "센 이슬비",
    },
    56: {
        icon: "d01d",
        label: "약한 이슬비",
    },
    57: {
        icon: "d01d",
        label: "moderateOrDenseFreezingDrizzle",
    },
    61: {
        icon: "r01d",
        label: "약한 비",
    },
    63: {
        icon: "r01d",
        label: "비",
    },
    65: {
        icon: "r01d",
        label: "폭우",
    },
    66: {
        icon: "f01d",
        label: "약한 비",
    },
    67: {
        icon: "f01d",
        label: "비",
    },
    71: {
        icon: "s02d",
        label: "약한 눈",
    },
    73: {
        icon: "s02d",
        label: "눈",
    },
    75: {
        icon: "s02d",
        label: "폭설",
    },
    77: {
        icon: "s02d",
        label: "싸락눈",
    },
    80: {
        icon: "r02d",
        label: "약한 소나기",
    },
    81: {
        icon: "r02d",
        label: "소나기",
    },
    82: {
        icon: "r02d",
        label: "센 소나기",
    },
    85: {
        icon: "s01d",
        label: "약한 눈보라",
    },
    86: {
        icon: "s01d",
        label: "강한 눈보라",
    },
    95: {
        icon: "t04d",
        label: "뇌우",
    },
    96: {
        icon: "t04d",
        label: "천둥",
    },
    99: {
        icon: "t04d",
        label: "폭풍",
    },
};

export default weatehrCodetoString;
