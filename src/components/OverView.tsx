"use client";

import Image from "next/image";

type Props = {
    addressName: string;
};

function OverView({ addressName }: Props) {
    return (
        <div className="flex gap-6">
            <div className="flex flex-col text-white gap-4 font-semibold ">
                <p className="text-6xl">{addressName}</p>
                <div className="flex font-light text-6xl">
                    <span>8</span>
                    <span className="text-4xl">º</span>
                </div>
                <div className="font-light text-sm">
                    <p>12º / -2º 체감온도 5º</p>
                    <p>UPDATE : 12/19 화 12:26</p>
                </div>
            </div>
            {/* todo add var img */}
            <div className="w-1/3 flex justify-center items-center relative">
                <Image src={"/vercel.svg"} alt="testIcon" fill={true} priority={true} />
            </div>
        </div>
    );
}

export default OverView;
