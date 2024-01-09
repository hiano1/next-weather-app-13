import React from "react";
import StatCard from "./StatCard";
import CalloutCard from "./CalloutCard";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { Card, Metric, Text } from "@tremor/react";
type Props = {
    result: Root;
};
function StatCardList({ result }: Props) {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            {/* sunrise */}
            <Card decoration="top" decorationColor={"gray"}>
                <Text>일출</Text>
                <Metric className="flex gap-2">
                    <SunIcon className="h-10 w-10 text-gray-400" />
                    {new Date(result.daily.sunrise[0]).toLocaleTimeString("en-GB", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                    })}
                </Metric>
            </Card>
            {/* sunset */}
            <Card decoration="top" decorationColor={"slate"}>
                <Text>일몰</Text>
                <Metric className="flex gap-2">
                    <MoonIcon className="h-10 w-10 text-gray-400" />
                    {new Date(result.daily.sunset[0]).toLocaleTimeString("en-GB", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                    })}
                </Metric>
            </Card>
            <StatCard
                title="최대 기온"
                metric={`${result.daily.temperature_2m_max[0].toFixed(1)}${result.daily_units.temperature_2m_max}`}
                color="yellow"
            />
            <StatCard
                title="최저 기온"
                metric={`${result.daily.temperature_2m_min[0].toFixed(1)}${result.daily_units.temperature_2m_min}`}
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
                    metric={`${result.daily.precipitation_sum[0].toFixed(1)}${result.daily_units.precipitation_sum}`}
                    color="violet"
                />
            </div>
        </div>
    );
}

export default StatCardList;
