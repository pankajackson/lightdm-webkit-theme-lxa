import React, { useState } from "react"
import Title from "@/components/controls/Title"
import UserListDropDown from "@/components/controls/UserListDropDown"
import GreeterContainer from "@/components/controls/GreeterContainer"
import LogInForm from "@/components/LoginForm" // Assuming you place LogInForm in controls
import SessionListDropDown from "@/components/controls/SessionListDropDown"

interface Props {
  currentPassword: string
  isSubmitting: boolean
  onLogIn: () => void
  onPasswordChange: (newPassword: string) => void
  onUserSelect: (user: LightDMUser) => void
  user: null | LightDMUser
  users: LightDMUser[]
  session: LightDMSession | null | undefined
  sessions: LightDMSession[]
  onSessionSelect: (session: LightDMSession) => void
}

const Greeter: React.FC<Props> = ({
  currentPassword,
  isSubmitting,
  onPasswordChange,
  onLogIn,
  onUserSelect,
  user,
  users,
  session,
  sessions,
  onSessionSelect,
}) => {
  const [selectedUser, setSelectedUser] = useState<string>(user?.username || "")
  const [selectedSession, setSelectedSession] = useState<string>(
    user?.session?.key || session?.key || ""
  )

  const handleUserSelect = (newUser: string) => {
    setSelectedUser(newUser)
    const selected = users.find((u) => u.username === newUser)
    if (selected) {
      onUserSelect(selected)
    }
  }
  const handleSessionSelect = (newSession: string) => {
    setSelectedSession(newSession)
    const selected = sessions.find((s) => s.key === newSession)
    if (selected) {
      onSessionSelect(selected)
    }
  }

  const handleLoginSubmit = () => {
    onLogIn()
  }

  return (
    <GreeterContainer>
      <Title>Login</Title>
      <UserListDropDown
        users={users}
        defaultValue={selectedUser}
        id="ddlUsers"
        name="ddlUsers"
        onChange={(e) => handleUserSelect(e.target.value)}
      />
      <LogInForm
        currentPassword={currentPassword}
        isSubmitting={isSubmitting}
        onPasswordChange={onPasswordChange}
        onSubmit={handleLoginSubmit}
      />
      <SessionListDropDown
        sessions={sessions}
        defaultValue={selectedSession}
        id="ddlSessions"
        name="ddlSessions"
        onChange={(e) => handleSessionSelect(e.target.value)}
      />
    </GreeterContainer>
  )
}

export default Greeter
