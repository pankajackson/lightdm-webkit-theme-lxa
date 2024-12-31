import { useCallback, useEffect, useState } from "react"

const localStorageUserKey = "lastSelectedUser"
const localStorageSessionKey = "lastSelectedSession"

const findDefaultUser = (lightDM: LightDM): null | LightDMUser => {
  const { select_user, users } = lightDM
  if (users.length === 1) {
    return users[0]
  }

  // Use the default username as decided by LightDM or the most recently
  // selected user, with LightDM having precedence.
  let defaultUsername = select_user || localStorage.getItem(localStorageUserKey)
  if (!defaultUsername) {
    return null
  }

  const user = users.find((u) => u.username === defaultUsername)
  if (!user) {
    return null
  }

  return user
}

const getSession = (initialLightDM: LightDM) => {
  const { sessions } = initialLightDM
  if (sessions.length === 1) {
    return sessions[0]
  }
  let defaultSession =
    initialLightDM.default_session ||
    localStorage.getItem(localStorageSessionKey) ||
    initialLightDM.sessions[0].key

  if (!defaultSession) {
    return null
  }

  const session = sessions.find((s) => s.key === defaultSession)
  if (!session) {
    return null
  }
  return session
}

const useLightDM = (initialLightDM: LightDM) => {
  const [isAuthenticating, setAuthenticating] = useState(
    initialLightDM.in_authentication
  )
  const [password, setPassword] = useState("")
  const [user, setStateUser] = useState(findDefaultUser(initialLightDM))
  const [users, setUsers] = useState(initialLightDM.users)
  const [session, setStateSession] = useState(getSession(initialLightDM))
  const [sessions, setSessions] = useState(initialLightDM.sessions)

  const refreshFromLightDM = useCallback(() => {
    setAuthenticating(window.lightdm.in_authentication)
    setUsers(window.lightdm.users)
  }, [setAuthenticating])

  const authenticate = useCallback(() => {
    if (user !== null) {
      window.lightdm.authenticate(user.username)
      refreshFromLightDM()
    }
  }, [refreshFromLightDM, user])

  const cancelAuthentication = useCallback(() => {
    window.lightdm.cancel_authentication()
    refreshFromLightDM()
  }, [refreshFromLightDM])

  const respondToPrompt = useCallback(
    (text: string) => {
      window.lightdm.respond(text)
      refreshFromLightDM()
    },
    [refreshFromLightDM]
  )

  const setUser = useCallback(
    (user: LightDMUser) => {
      localStorage.setItem(localStorageUserKey, user.username)
      setStateUser(user)
    },
    [setStateUser]
  )

  const setSession = useCallback(
    (session: LightDMSession) => {
      localStorage.setItem(localStorageSessionKey, session.key)
      setStateSession(session)
    },
    [setStateSession]
  )

  useEffect(() => {
    window.authentication_complete = () => {
      if (window.lightdm.is_authenticated) {
        const session = getSession(initialLightDM)
        window.lightdm.start_session_sync(session?.key)
      } else {
        alert("Authentication failed!")
      }

      refreshFromLightDM()
    }

    return () => {
      window.authentication_complete = () => {}
    }
  }, [refreshFromLightDM])

  useEffect(() => {
    window.autologin_timer_expired = () => {
      cancelAuthentication()
    }

    return () => {
      window.autologin_timer_expired = () => {}
    }
  }, [cancelAuthentication])

  useEffect(() => {
    window.show_message = (text, type) => {
      alert(type.toUpperCase() + ": " + text)
    }

    return () => {
      window.show_message = () => {}
    }
  })

  useEffect(() => {
    window.show_prompt = (text, type) => {
      if (type === "password") {
        respondToPrompt(password)
      } else {
        respondToPrompt(prompt(text) || "")
      }
    }

    return () => {
      window.show_prompt = () => {}
    }
  }, [password, respondToPrompt])

  return {
    authenticate,
    cancelAuthentication,
    isAuthenticating,
    password,
    setPassword,
    setUser,
    user,
    users,
    session,
    setSession,
    sessions,
    setSessions,
  }
}

export default useLightDM
