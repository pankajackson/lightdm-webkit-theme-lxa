import React, { useEffect, useState } from "react"
import styled from "styled-components"

const ClockContainer = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  color: #efefef;
  font-family: "Lato", sans-serif;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5), 0px -1px 5px rgba(0, 0, 0, 0.1);
`

const TimeDisplay = styled.h1`
  font-size: 8rem;
`

const DateDisplay = styled.h2`
  font-size: 2.5rem;
`

const formatTime = (time: Date) => {
  let hours = time.getHours().toString(10)
  if (hours.length === 1) {
    hours = "0" + hours
  }

  let minutes = time.getMinutes().toString(10)
  if (minutes.length === 1) {
    minutes = "0" + minutes
  }

  return `${hours}:${minutes}`
}

const formatDate = (time: Date) => {
  return time.toLocaleString("default", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })
}

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [setTime])

  return (
    <ClockContainer>
      <TimeDisplay>{formatTime(time)}</TimeDisplay>
      <DateDisplay>{formatDate(time)}</DateDisplay>
    </ClockContainer>
  )
}

export default Clock
