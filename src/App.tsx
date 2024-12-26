import React from "react"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import Clock from "@/components/Clock"
import Greeter from "@/components/Greeter"

const App: React.FC = () => {
  if (!window.lightdm) {
    console.log("lightDM not loaded")
  } else {
    console.log(
      window.lightdm.users.forEach((user) => console.log(user.username))
    )
  }

  return (
    <>
      <BackgroundWrapper colors={{ color1: "#3498db", color2: "#2ecc71" }}>
        <Greeter />
        <Clock is24Hour={false} />
      </BackgroundWrapper>
    </>
  )
}

export default App
