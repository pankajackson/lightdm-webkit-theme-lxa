"use client" // Add this at the top

import React, { useState, useEffect } from "react"

const SessionSelector: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState("")
  const [isClient, setIsClient] = useState(false) // Track if we're on the client side

  useEffect(() => {
    // This ensures the code only runs on the client side
    setIsClient(true)
  }, [])

  const handleSessionChange = (session: string) => {
    if (isClient && window.lightdm) {
      setSelectedSession(session)
      window.lightdm.start_session(session)
    }
  }

  return (
    <select
      className="session-selector"
      value={selectedSession}
      onChange={(e) => handleSessionChange(e.target.value)}
    >
      {isClient &&
        window.lightdm?.get_sessions().map((session) => (
          <option key={session.key} value={session.key}>
            {session.name}
          </option>
        ))}
    </select>
  )
}

export default SessionSelector
