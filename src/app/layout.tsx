import React from "react"
import LoginBox from "@/components/LoginBox"
import SessionSelector from "@/components/SessionSelector"

const Page: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
        <title>Lock Screen</title>
      </head>
      <body>
        <div className="theme-container">
          <h1 className="theme-title">LightDM Theme</h1>
          <SessionSelector />
          <LoginBox />
        </div>
      </body>
    </html>
  )
}

export default Page
