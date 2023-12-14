const apiCodetoString: {
    [key: string]: {
        name: string;
        unit: string;
    };
} = {
    POP: {
        name: "강수확률",
        unit: "%",
    },
    PTY: {
        name: "강수형태",
        unit: "", //code
    },
    PCP: {
        name: "1시간 강수량",
        unit: "", //0 -> '강수없음' mm 붙어나옴
    },
    REH: {
        name: "습도",
        unit: "%",
    },
    SNO: {
        name: "1시간 신적설",
        unit: "",
    },
    SKY: {
        name: "하늘상태",
        unit: "", //code
    },
    TMP: {
        name: "1시간 기온",
        unit: "℃",
    },
    TMN: {
        name: "일 최저기온",
        unit: "℃",
    },
    TMX: {
        name: "일 최고기온",
        unit: "℃",
    },
    UUU: {
        name: "풍속(동서성분)",
        unit: "m/s",
    },
    VVV: {
        name: "풍속(남북성분)",
        unit: "m/s",
    },
    WAV: {
        name: "파고",
        unit: "M",
    },
    VEC: {
        name: "풍향",
        unit: "deg",
    },
    WSD: {
        name: "풍속",
        unit: "m/s",
    },
    T1H: {
        name: "기온",
        unit: "℃",
    },
    RN1: {
        name: "1시간 강수량",
        unit: "mm",
    },
};

export default apiCodetoString;
