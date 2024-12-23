"use client" // Ensures compatibility with hooks

import LoginBox from "@/components/LoginBox"
import SessionSelector from "@/components/SessionSelector"
import { useState } from "react"

const sessions = ["GNOME", "KDE", "XFCE", "i3"] // Replace with LightDM sessions

export default function Home() {
  const [selectedSession, setSelectedSession] = useState(sessions[0])

  const handleSessionSelect = (session: string) => {
    setSelectedSession(session)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900">
      <h1 className="text-3xl font-bold mb-6">Welcome to LightDM</h1>
      <LoginBox />
      <div className="mt-4 w-full max-w-md">
        <SessionSelector sessions={sessions} onSelect={handleSessionSelect} />
      </div>
      <p className="mt-4 text-sm text-gray-400">
        Selected Session: <span className="text-white">{selectedSession}</span>
      </p>
    </main>
  )
}
