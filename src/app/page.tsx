"use client"

import { useState, useEffect } from "react"
import LoginBox from "@/components/LoginBox"
import SessionSelector from "@/components/SessionSelector"
import "@/styles/global.css"

export default function Home() {
  const lightdm = typeof window !== "undefined" ? window.lightdm : undefined

  const [users, setUsers] = useState(lightdm?.users || [])
  const [sessions, setSessions] = useState(lightdm?.get_sessions() || [])
  const [selectedUser, setSelectedUser] = useState(users[0]?.username || "")
  const [selectedSession, setSelectedSession] = useState(sessions[0]?.key || "")

  useEffect(() => {
    if (lightdm) {
      setUsers(lightdm.users)
      setSessions(lightdm.get_sessions())
      setSelectedUser(lightdm.users[0]?.username || "")
      setSelectedSession(lightdm.get_sessions()[0]?.key || "")
    }
  }, [lightdm])

  const handleLogin = (password: string) => {
    if (!lightdm) return
    lightdm.start_authentication(selectedUser)
    lightdm.provide_secret(password)
    lightdm.start_session(selectedSession)
  }

  return (
    <main>
      <h1>LightDM Login</h1>
      <LoginBox
        users={users}
        onLogin={handleLogin}
        onUserChange={setSelectedUser}
      />
      <SessionSelector sessions={sessions} onSelect={setSelectedSession} />
    </main>
  )
}
