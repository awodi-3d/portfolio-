import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for "Awodi Abdulsamad", a premier 3D Product Artist with 4 years of professional experience.
Awodi specializes in photorealistic product animation, cinematic rendering, and high-end visualization.
Key technical expertise: Blender (modeling, lighting, geometry nodes) and DaVinci Resolve (color grading, compositing).
Your goal is to represent Awodi's professional brand, answer questions about his workflow, and guide potential clients towards booking a project or viewing his portfolio.
Keep responses minimal, sophisticated, and professional. 
The website email is awodi.3d@gmail.com and WhatsApp is +2347069377546.
`;

export const getAIResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text || "I'm currently rendering a complex scene. How can I assist you with Awodi's work?";
  } catch (error) {
    console.error("AI Response Error:", error);
    return "I'm offline for maintenance. Please reach out to Awodi directly via email.";
  }
};