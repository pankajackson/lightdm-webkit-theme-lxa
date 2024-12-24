"use client"

import React, { useState, useEffect } from "react"

const SessionSelector: React.FC = () => {
  const [sessions, setSessions] = useState<{ name: string; key: string }[]>([])
  const [selectedSession, setSelectedSession] = useState("")

  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window !== "undefined" && window.lightdm) {
      setSessions(window.lightdm.get_sessions())
    }
  }, [])

  const handleSessionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSession(event.target.value)
  }

  return (
    <div
      style={{
        margin: "20px auto",
        maxWidth: "300px",
        textAlign: "left",
      }}
    >
      <select
        style={{
          display: "block",
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #444",
          backgroundColor: "#2a2a2a",
          color: "#fff",
          borderRadius: "4px",
        }}
        value={selectedSession}
        onChange={handleSessionChange}
      >
        <option value="">Select Session</option>
        {sessions.map((session) => (
          <option key={session.key} value={session.key}>
            {session.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SessionSelector
