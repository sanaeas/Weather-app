"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Text, Divider, Subtitle } from "@tremor/react";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
            <Card className="max-w-4xl mx-auto">
                <Text className="text-6xl font-bold text-center mb-10">
                    Weather AI
                </Text>
                <Subtitle className="text-xl text-center">
                    Powered by Next.js 13.5, Tailwind CSS, Tremor 2.0, and More!
                </Subtitle>

                <Divider className="my-10" />

                <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
                    <CityPicker />
                </Card>
            </Card>
        </main>
    );
}
