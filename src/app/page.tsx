"use client"

import React from "react"
import LoginBox from "../components/LoginBox"
import SessionSelector from "../components/SessionSelector"

export default function Home() {
  return (
    <main
      style={{
        textAlign: "center",
        marginTop: "10vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "16px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        Welcome to LightDM
      </h1>
      <LoginBox />
      <SessionSelector />
    </main>
  )
}
