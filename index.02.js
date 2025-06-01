// manually giving context

import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_API}` })

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [
            {
                role: "user",
                parts: [{ text: "Hello My name is Sanskar" }]
            },
            {
                role: "model",
                parts: [{ text: "Hello Sanskar, it's nice to meet you! How can I help you today?" }]
            },
            {
                role: "user",
                parts: [{ text: "What is my name?" }]
            }
        ]
    })
    console.log(response.text);
}

main();