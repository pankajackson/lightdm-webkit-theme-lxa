import React from "react"
import ReactDOM from "react-dom/client"
import App from "@/App"
import * as mockLightDM from "@/lightdm/mockLightDM"

const rootElement = document.getElementById("root")
if (!rootElement) {
  throw new Error("Root element not found")
}

if (window.lightdm === undefined) {
  window.config = mockLightDM.config
  window.greeterutil = mockLightDM.greeterutil
  window.lightdm = mockLightDM.lightdm
}

const root = ReactDOM.createRoot(rootElement)
root.render(<App initialLightDM={window.lightdm} />)
