// This file handles communication with the Dialogflow API
import type { CoreMessage } from "ai"

// Interface for Dialogflow response
interface DialogflowResponse {
  queryResult: {
    fulfillmentText: string
    intent: {
      displayName: string
    }
  }
}

// Function to send messages to Dialogflow and get responses
export async function sendToDialogflow(message: string): Promise<string> {
  try {
    const response = await fetch("/api/dialogflow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        languageCode: "es",
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to communicate with Dialogflow")
    }

    const data = await response.json()

    // If your Dialogflow agent returns rich responses, you might need to handle them here
    // For example, if it returns multiple response types:
    if (data.richResponse) {
      // Handle rich responses (cards, suggestions, etc.)
      return data.richResponse.text || data.response
    }

    return data.response
  } catch (error) {
    console.error("Error communicating with Dialogflow:", error)
    return "Lo siento, hubo un error al procesar tu mensaje."
  }
}

// Convert AI SDK messages to Dialogflow format if needed
export function formatMessagesForDialogflow(messages: CoreMessage[]): string {
  // For simple implementation, just return the last user message
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user")
  return Array.isArray(lastUserMessage?.content) 
    ? lastUserMessage.content.map(part => part.toString()).join(" ") 
    : (lastUserMessage?.content || "")
}

