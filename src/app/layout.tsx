import React from "react"
import LoginBox from "@/components/LoginBox"
import SessionSelector from "@/components/SessionSelector"
import "@/static/css/styles.css"

const Page: React.FC = () => {
  return (
    <div className="theme-container">
      <h1 className="theme-title">LightDM Theme</h1>
      <SessionSelector />
      <LoginBox />
    </div>
  )
}

export default Page
