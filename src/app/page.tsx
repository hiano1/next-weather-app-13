import CityPicker from "@/components/CityPicker";
import { Card, Subtitle, Divider } from "@tremor/react";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E]p-10 flex flex-col justify-center items-center">
            <Card className="max-w-4xl mw-auto">
                {/* <p className="text-6xl font-bold text-center mb-10">GPT-4 Weather App</p>
                <Subtitle className="text-xl text-center">Powered by OpenAI, Next.js, Tailwind CSS, Tremor</Subtitle> */}
                <Divider className="my-10" />
                <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
                    <CityPicker />
                </Card>
            </Card>
        </div>
    );
}
