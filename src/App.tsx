import React from "react"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import Clock from "@/components/Clock"
import Greeter from "@/components/Greeter"
import useLightDM from "@/lightdm/useLightDM"

interface Props {
  initialLightDM: LightDM
}

const App: React.FC<Props> = ({ initialLightDM }) => {
  const lightDM = useLightDM(initialLightDM)
  if (!window.lightdm) {
    console.log("lightDM not loaded")
  } else {
    console.log("lightDM loaded")
  }

  return (
    <>
      <BackgroundWrapper colors={{ color1: "#3498db", color2: "#2ecc71" }}>
        <Greeter
          currentPassword={lightDM.password}
          isSubmitting={lightDM.isAuthenticating}
          onLogIn={lightDM.authenticate}
          onPasswordChange={lightDM.setPassword}
          onUserSelect={lightDM.setUser}
          user={lightDM.user}
          users={lightDM.users}
          session={lightDM.session}
          onSessionSelect={lightDM.setSession}
          sessions={lightDM.sessions}
        />
        <Clock is24Hour={false} />
      </BackgroundWrapper>
    </>
  )
}

export default App
