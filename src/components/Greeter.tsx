import React, { useState } from "react"
import Title from "@/components/controls/Title"
import UserListDropDown from "@/components/controls/UserListDropDown"
import GreeterContainer from "@/components/controls/GreeterContainer"
import LogInForm from "@/components/LoginForm" // Assuming you place LogInForm in controls

interface LightDMUser {
  username: string
  display_name: string
}

interface Props {
  currentPassword: string
  isSubmitting: boolean
  onLogIn: () => void
  onPasswordChange: (newPassword: string) => void
  onUserSelect: (user: LightDMUser) => void
  user: null | LightDMUser
  users: LightDMUser[]
}

const Greeter: React.FC<Props> = ({
  currentPassword,
  isSubmitting,
  onPasswordChange,
  onLogIn,
  onUserSelect,
  user,
  users,
}) => {
  const [selectedUser, setSelectedUser] = useState<string>(user?.username || "")

  const handleUserSelect = (newUser: string) => {
    setSelectedUser(newUser)
    const selected = users.find((u) => u.username === newUser)
    if (selected) {
      onUserSelect(selected)
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
    </GreeterContainer>
  )
}

export default Greeter
