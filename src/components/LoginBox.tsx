"use client"

import React, { useState, useEffect, useMemo } from "react"

const LoginBox: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [users, setUsers] = useState<
    { username: string; display_name: string }[]
  >([])

  useEffect(() => {
    if (typeof window !== "undefined" && window.lightdm) {
      setUsers(window.lightdm.users) // Fetch users from LightDM
    }
  }, [])

  const handleLogin = () => {
    if (typeof window !== "undefined" && window.lightdm) {
      window.lightdm.authenticate(username)
      window.lightdm.provide_secret(password)
      window.lightdm.start_session("default")
    }
  }

  return (
    <div
      style={{
        display: "block",
        margin: "0 auto",
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
        onChange={(e) => setUsername(e.target.value)}
      >
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.username} value={user.username}>
            {user.display_name}
          </option>
        ))}
      </select>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
      />
      <button
        onClick={handleLogin}
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          backgroundColor: "#0078d7",
          border: "none",
          color: "#fff",
          borderRadius: "4px",
          fontSize: "1rem",
        }}
      >
        Login
      </button>
    </div>
  )
}

export default LoginBox
