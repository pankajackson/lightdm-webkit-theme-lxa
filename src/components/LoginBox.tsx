"use client"

import React, { useState, useEffect } from "react"
import { BoxWrapper, Input, Button } from "@/styles/styled-components" // Import from the common styled-components file

const LoginBox: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleLogin = () => {
    if (isClient && window.lightdm) {
      try {
        window.lightdm.start_authentication(username)
        window.lightdm.provide_secret(password)

        // Optionally, add a success callback or event listener
        // For example, you could listen to a success or failure event here
      } catch (error) {
        console.error("Authentication failed:", error)
        alert("Login failed. Please check your credentials and try again.")
      }
    } else {
      console.error(
        "LightDM is not available or client-side rendering is not ready."
      )
      alert("Unable to initialize authentication. Please try again later.")
    }
  }

  return (
    <BoxWrapper>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </BoxWrapper>
  )
}

export default LoginBox
