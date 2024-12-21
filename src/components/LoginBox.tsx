"use client" // Add this at the top

import React, { useState, useEffect } from "react"

const LoginBox: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isClient, setIsClient] = useState(false) // Track if we're on the client side

  useEffect(() => {
    // This ensures the code only runs on the client side
    setIsClient(true)
  }, [])

  const handleLogin = () => {
    if (isClient && window.lightdm) {
      window.lightdm.start_authentication(username)
      window.lightdm.provide_secret(password)
    }
  }

  return (
    <div className="login-box">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginBox
