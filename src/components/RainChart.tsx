"use client";

import { AreaChart, Card, Title } from "@tremor/react";

type Props = {
    results: Root;
};

function RainChart({ results }: Props) {
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
        "강수 확률": results.hourly.precipitation_probability[i],
        습도: results.hourly.relative_humidity_2m[i],
    }));
    const dataFormatter = (number: number) => `${number}%`;

    return (
        <Card>
            <Title>강수 확률</Title>
            <AreaChart
                className="h-48 mt-4"
                data={data}
                showLegend
                index="시간"
                categories={["강수 확률", "습도"]}
                colors={["blue", "sky"]}
                minValue={0}
                maxValue={100}
                valueFormatter={dataFormatter}
                yAxisWidth={30}
            />
        </Card>
    );
}

export default RainChart;
