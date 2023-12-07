import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "My API Key", // defaults to process.env["OPENAI_API_KEY"]
});

export async function POST(request: Request) {
    const { weatherData } = await request.json();
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            { role: "system", content: "Say this is a test" },
            { role: "user", content: `data : ${weatherData}` },
        ],
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
}
