import React, { useState } from "react"

const LoginBox: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    console.log(`Logging in as ${username}`)
    // Replace with LightDM login logic
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-md shadow-lg">
      <input
        type="text"
        placeholder="Username"
        className="mb-4 w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-4 w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default LoginBox
