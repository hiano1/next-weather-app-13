"use client";

export const revalidate = 60;

type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    };
};

export default function WeatherPage({ params: { city, lat, long } }: Props) {
    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            <div className="flex-1 p-5 lg:p-10">
                <div className="p-5"></div>
            </div>
        </div>
    );
}
