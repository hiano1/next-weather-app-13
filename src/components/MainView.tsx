"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Subtitle, Divider } from "@tremor/react";
import { RequestData } from "next/dist/server/web/types";
import Image from "next/image";
import { useParams } from "next/navigation";

export const getServerSideProps = ({ query }: any) => ({
    props: query,
});

function MainView(props: any) {
    console.log(props.city);

    const route = useParams();
    console.log(route);
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E]p-10 flex flex-col justify-center items-center">
                <Image className="w-full h-full absolute" src={""} alt="mainBackGround" />
                <Card className="max-w-4xl mw-auto shadow-xl">
                    <p className="text-7xl font-bold text-center mb-6">Todays Weather</p>
                    <Subtitle className="text-sm text-center">
                        Powered by OpenAI, Next.js, Tailwind CSS, Tremor, Vercel
                    </Subtitle>
                    <Divider className="my-10" />
                    <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
                        <CityPicker />
                    </Card>
                </Card>
            </div>
        </>
    );
}

export default MainView;
