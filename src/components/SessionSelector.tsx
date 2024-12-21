"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/styles/styled-components" // Import common Button component

const SessionSelector: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<string>("")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSessionChange = (session: string) => {
    if (isClient && window.lightdm) {
      setSelectedSession(session) // Set the selected session here
      window.lightdm.start_session(session)
    }
  }

  return (
    <div>
      {isClient &&
        window.lightdm?.get_sessions().map((session) => (
          <Button
            key={session.key}
            onClick={() => handleSessionChange(session.key)}
            style={{
              backgroundColor:
                selectedSession === session.key ? "#0056b3" : "#007bff",
            }}
          >
            {session.name}
          </Button>
        ))}
      {selectedSession && <div>Selected Session: {selectedSession}</div>}
    </div>
  )
}

export default SessionSelector
