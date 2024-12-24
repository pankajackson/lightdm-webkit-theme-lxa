export interface User {
  username: string
  display_name: string
}

export interface LightDM {
  users: User[]
  authenticate: (username: string) => void
  start_authentication: (username: string) => void
  cancel_authentication: () => void
  provide_secret: (password: string) => void
  start_session: (session: string) => void
  get_sessions: () => { name: string; key: string }[]
}

declare global {
  interface Window {
    lightdm: LightDM
  }
}

const lightdm: LightDM = {
  users: [
    { username: "user1", display_name: "User One" },
    { username: "user2", display_name: "User Two" },
  ],
  authenticate: (username: string) =>
    console.log(`Authenticating: ${username}`),
  start_authentication: (username: string) =>
    console.log(`Start authentication: ${username}`),
  cancel_authentication: () => console.log("Cancel authentication"),
  provide_secret: (password: string) =>
    console.log(`Providing password: ${password}`),
  start_session: (session: string) =>
    console.log(`Starting session: ${session}`),
  get_sessions: () => [
    { name: "Plasma", key: "plasma" },
    { name: "GNOME", key: "gnome" },
  ],
}

if (typeof window !== "undefined") {
  window.lightdm = lightdm
}
