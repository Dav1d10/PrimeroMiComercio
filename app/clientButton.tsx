"use client"

export function ClientButton() {
  return (
    <button onClick={() => (window.location.href = "chatbot.html")} className="btn-start">
      Empieza Ahora
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-2 h-4 w-4"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  )
}

