"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useChat } from "ai/react"
import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { AutoResizeTextarea } from "@/components/autoresize-textarea"
import { HackathonInfo } from "@/components/HackathonInfo"
import { useState } from "react"
import { sendToDialogflow } from "@/app/lib/dialogflow"

export function ChatForm({ className, ...props }: React.ComponentProps<"form">) {
  const [useDialogflow, setUseDialogflow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { messages, input, setInput, append, setMessages } = useChat({
    api: "/api/chat",
    onFinish: () => {
      setIsLoading(false)
    },
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message to chat
    const userMessage = { content: input, role: "user" as const }

    if (useDialogflow) {
      setIsLoading(true)
      // Handle Dialogflow flow
      try {
        // Add user message to UI
        const updatedMessages = [...messages, userMessage]
        setMessages(updatedMessages)

        // Clear input
        setInput("")

        // Send to Dialogflow and get response
        const response = await sendToDialogflow(input)

        // Add Dialogflow response to chat
        setMessages([
          ...updatedMessages,
          {
            content: response,
            role: "assistant" as const,
          },
        ])
      } catch (error) {
        console.error("Error with Dialogflow:", error)
      } finally {
        setIsLoading(false)
      }
    } else {
      // Use the default OpenAI flow
      void append(userMessage)
      setInput("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  }

  const header = (
    <header className="m-auto flex max-w-96 flex-col gap-5 text-center">
      <h1 className="text-2xl font-semibold leading-none tracking-tight">AI Chatbot with Dialogflow Integration</h1>
      <p className="text-muted-foreground text-sm">
        This is an AI chatbot app template built with <span className="text-foreground">Next.js</span>, the{" "}
        <span className="text-foreground">Vercel AI SDK</span>, and{" "}
        <span className="text-foreground">Google Dialogflow</span>.
      </p>
      <div className="flex justify-center mt-4">
        <Button variant={useDialogflow ? "default" : "outline"} onClick={() => setUseDialogflow(true)} className="mr-2">
          Dialogflow (Costo y Rentabilidad)
        </Button>
        <Button variant={!useDialogflow ? "default" : "outline"} onClick={() => setUseDialogflow(false)}>
          OpenAI
        </Button>
      </div>
    </header>
  )

  const messageList = (
    <div className="my-4 flex h-fit min-h-full flex-col gap-4">
      {messages.map((message, index) => {
        const showHackathonInfo =
          !useDialogflow &&
          message.role === "assistant" &&
          message.toolInvocations?.some((t) => t.toolName === "getHackathonInfo" && t.state === "result")

        return (
          <div key={index} className={cn("flex flex-col", message.role === "user" ? "items-end" : "items-start")}>
            {message.content && (
              <div
                data-role={message.role}
                className="max-w-[80%] rounded-2xl px-4 py-2.5 text-base data-[role=assistant]:bg-gray-50 data-[role=user]:bg-blue-500 data-[role=assistant]:text-black data-[role=user]:text-white"
              >
                {message.content}
              </div>
            )}
            {showHackathonInfo && (
              <div className="my-4 w-full">
                <HackathonInfo attendees={1000} />
              </div>
            )}
          </div>
        )
      })}
      {isLoading && (
        <div className="flex items-start">
          <div className="max-w-[80%] rounded-2xl px-4 py-2.5 text-base bg-gray-50 text-black">
            <div className="flex space-x-2">
              <div className="h-2 w-2 rounded-full bg-gray-300 animate-bounce"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <TooltipProvider>
      <main
        className={cn(
          "ring-none mx-auto flex h-svh max-h-svh w-full max-w-[35rem] flex-col items-stretch border-none",
          className,
        )}
        {...props}
      >
        <div className="flex-1 content-center overflow-y-auto px-6">
          {messages.length ? messageList : header}
          {messages.length > 0 && (
            <div className="flex justify-center mb-4">
              <Button
                variant={useDialogflow ? "default" : "outline"}
                onClick={() => setUseDialogflow(true)}
                size="sm"
                className="mr-2"
              >
                Dialogflow
              </Button>
              <Button
                variant={!useDialogflow ? "default" : "outline"}
                onClick={() => setUseDialogflow(false)}
                size="sm"
              >
                OpenAI
              </Button>
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="border-input bg-background focus-within:ring-ring/10 relative mx-6 mb-6 flex items-center rounded-[16px] border px-3 py-1.5 pr-8 text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0"
        >
          <AutoResizeTextarea
            onKeyDown={handleKeyDown}
            onChange={(v) => setInput(v)}
            value={input}
            placeholder={useDialogflow ? "Pregunta sobre costo y rentabilidad..." : "Enter a message"}
            className="placeholder:text-muted-foreground flex-1 bg-transparent focus:outline-none"
            disabled={isLoading}
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="absolute bottom-1 right-1 size-6 rounded-full"
                disabled={isLoading}
              >
                <ArrowUpIcon size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={12}>Submit</TooltipContent>
          </Tooltip>
        </form>
      </main>
    </TooltipProvider>
  )
}

