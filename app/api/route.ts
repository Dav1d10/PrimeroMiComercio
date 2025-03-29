import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message, languageCode } = await req.json()

    // These values come from your Dialogflow configuration
    const projectId = "calm-library-455021-c0"
    const agentId = "4c1f12bd-bab8-41dc-aaae-384812c7b1b6"

    // For production, you should use the Dialogflow API client
    // This is a simplified implementation using fetch
    const sessionId = Math.random().toString(36).substring(2, 15) // Generate a session ID

    const dialogflowResponse = await fetch(
      `https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/${sessionId}:detectIntent`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GOOGLE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          queryInput: {
            text: {
              text: message,
              languageCode,
            },
          },
        }),
      },
    )

    if (!dialogflowResponse.ok) {
      const errorData = await dialogflowResponse.json()
      console.error("Dialogflow API error:", errorData)
      throw new Error("Dialogflow API error")
    }

    const data = await dialogflowResponse.json()

    // Extract the fulfillment text from the Dialogflow response
    const responseText = data.queryResult?.fulfillmentText || "No pude obtener una respuesta clara."

    return NextResponse.json({ response: responseText })
  } catch (error) {
    console.error("Error in Dialogflow API route:", error)
    return NextResponse.json(
      { error: "Failed to process request", response: "Lo siento, ocurrió un error al procesar tu solicitud." },
      { status: 500 },
    )
  }
}

