import { useState } from "react"
import "@/styles/LoginBox.css"
import { User } from "@/lightdm/lightdm"

interface LoginBoxProps {
  users: User[]
  onLogin: (password: string) => void
  onUserChange: (username: string) => void
}

const LoginBox: React.FC<LoginBoxProps> = ({
  users,
  onLogin,
  onUserChange,
}) => {
  const [password, setPassword] = useState("")

  return (
    <div className="login-box">
      <select onChange={(e) => onUserChange(e.target.value)}>
        {users.map((user) => (
          <option key={user.username} value={user.username}>
            {user.display_name}
          </option>
        ))}
      </select>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => onLogin(password)}>Login</button>
    </div>
  )
}

export default LoginBox
