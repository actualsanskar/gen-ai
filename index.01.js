// no previous context

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_API}` })

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "What is my name?",
    });
    console.log(response.text);
}

main();
