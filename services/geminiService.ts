import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { TourRequest, TourResponse } from "../types";

export const submitTourRequest = async (request: TourRequest): Promise<TourResponse> => {
  const prompt = `
    Act as the Event Coordinator for "White House Resort Inc.", a premier Victorian-style wedding and event venue in Wilmington, Delaware.
    A guest has submitted a tour request:
    - Name: ${request.fullName}
    - Date: ${request.date}
    - Party Size: ${request.partySize}
    - Special Requests: ${request.specialRequests || "None"}

    Process this request and return a JSON object:
    1. 'confirmationId': A unique mock ID.
    2. 'conciergeMessage': A warm, professional response inviting them to see the 3-story suite and landscaped grounds. Mention "where dreams come true".
    3. 'estimatedDuration': Estimate based on party size (approx 45-60 mins).
  `;

  try {
    // Use process.env.API_KEY directly as per guidelines. 
    // Initialization is now inside try/catch to handle missing keys gracefully.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    // Create a timeout promise that rejects after 10 seconds
    const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Request timed out")), 10000);
    });

    const aiPromise = ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            confirmationId: { type: Type.STRING },
            conciergeMessage: { type: Type.STRING },
            estimatedDuration: { type: Type.STRING },
          },
          required: ["confirmationId", "conciergeMessage", "estimatedDuration"],
        },
      },
    });

    // Race the AI request against the timeout
    const response = await Promise.race([aiPromise, timeoutPromise]) as GenerateContentResponse;

    const text = response.text;
    if (!text) throw new Error("No response from Concierge AI");
    
    return JSON.parse(text) as TourResponse;
  } catch (error) {
    console.warn("Tour request AI generation failed, using fallback:", error);
    // Fallback on error/timeout to ensure user sees success state
    return {
      confirmationId: "WHR-DIRECT-" + Math.floor(Math.random() * 10000),
      conciergeMessage: "Thank you for your interest in White House Resort. We have received your request and our event coordinator will contact you shortly to confirm the details of your visit to our Victorian estate.",
      estimatedDuration: "60 minutes",
    };
  }
};