const DEBUG_PASSWORD = "123"
const dummyUsers: LightDMUser[] = [
  {
    display_name: "Pankaj Jackson",
    username: "jackson",
  },
  {
    display_name: "Manish",
    username: "mann",
  },
]
const dummySessions: LightDMSession[] = [
  {
    name: "KDE 5",
    key: "plasma-shell",
  },
  {
    name: "Gnome 3",
    key: "gnome-shell",
  },
  {
    name: "XFCE 4",
    key: "xfce",
  },
  {
    name: "Cinnamon",
    key: "cinnamon",
  },
  {
    name: "i3wm",
    key: "i3",
  },
  {
    name: "awesome wm",
    key: "awesome",
  },
  {
    name: "xmonad",
    key: "xmonad",
  },
]

export const config = {
  get_str: () => "",
}

export const greeterutil = {
  dirlist: () => [],
}

export const lightdm: LightDM = {
  authentication_user: null,
  autologin_guest: false,
  autologin_timeout: 10,
  autologin_user: null,
  can_hibernate: true,
  can_restart: true,
  can_shutdown: true,
  can_suspend: true,
  default_session: null,
  has_guest_account: true,
  hide_users: false,
  hostname: "somewhere-in-the-cloud",
  in_authentication: false,
  is_authenticated: false,
  language: "American English",
  layout: "qwerty",
  layouts: [],
  num_users: 2,
  select_guest: false,
  select_user: dummyUsers[0].username,
  sessions: dummySessions,
  users: dummyUsers,

  authenticate: (username) => {
    console.log("Starting authentication for user:", username)
    window.lightdm.in_authentication = true
    window.lightdm.authentication_user = username

    window.show_prompt("Password: ", "password")
  },
  cancel_authentication: () => {
    console.log("Authentication cancelled.")
  },
  respond: (password) => {
    console.log("Password provided:", password)

    if (password === DEBUG_PASSWORD) {
      window.lightdm.is_authenticated = true
      window.lightdm.in_authentication = false
      window.authentication_complete()
      return
    }

    setTimeout(() => {
      window.lightdm.in_authentication = false
      window.lightdm.is_authenticated = false
      window.authentication_complete()
    }, 2000)
  },
  start_session_sync: (session) => {
    alert(
      `Logging in as '${window.lightdm.authentication_user}' (Session: '${session}')`
    )
  },

  // Stubs for power management
  hibernate: () => {
    alert("Hibernating!")
  },
  restart: () => {
    alert("Restarting!")
  },
  shutdown: () => {
    alert("Shutting down!")
  },
  suspend: () => {
    alert("Suspending!")
  },
}
