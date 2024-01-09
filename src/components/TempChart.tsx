"use client";

import { AreaChart, Card, Title } from "@tremor/react";

type Props = {
    results: Root;
};

function TempChart({ results }: Props) {
    const hourly = results.hourly.time
        .map((time) =>
            new Date(time).toLocaleString("en-GB", {
                hour: "numeric",
                hour12: false,
            }),
        )
        .slice(0, 24);
    const data = hourly.map((hour, i) => ({
        시간: hour,
        "자외선 수치": results.hourly.uv_index[i],
        "기온 (C)": results.hourly.temperature_2m[i],
    }));
    const dataFormatter = (number: number) => `${number}°C`;

    return (
        <Card>
            <Title>기온 & 자외선</Title>
            <AreaChart
                className="h-48 mt-4"
                data={data}
                showLegend
                index="시간"
                categories={["기온 (C)", "자외선 수치"]}
                colors={["yellow", "rose"]}
                minValue={0}
                valueFormatter={dataFormatter}
                yAxisWidth={30}
            />
        </Card>
    );
}

export default TempChart;
