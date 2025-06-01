import { GoogleGenAI } from "@google/genai";
import readlinesync from "readline-sync";
import dotenv from "dotenv";
dotenv.config();
const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_API}` })

const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history: []
})
console.log(response.text);


async function main() {
    const userQuestion = readlinesync.question("write prompt -->");
    await chat.sendMessage({
        message: userQuestion,
    });
    main();
}

main();