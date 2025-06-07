import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_API}` })

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "my girlfriend left me",
        config: {
            systemInstruction: `You are an ecommerce platforms chat support AI. We sell snickers. 
            help any customer who comes with their queries.
            
            if someone asks anything else unrelated to our platform like order details, which sneaker to choose, etc
            
            politely tell him that you can help with that.`,
        },
    });
    console.log(response.text);
}

await main();
