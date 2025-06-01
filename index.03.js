// maintaing context through array

import { GoogleGenAI } from "@google/genai";
import readlinesync from "readline-sync";
import dotenv from "dotenv";
dotenv.config();
const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_API}` })

const history = []

async function chat(question) {
    history.push({
        role: "user",
        parts: [{text: question}]
    })
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: history
    })

    history.push({
        role: "model",
        parts: [{text: response.text}]
    })

    console.log(response.text);
}

async function main(){
    const userQuestion = readlinesync.question("write prompt -->");
    await chat(userQuestion);
    main();
}

main();