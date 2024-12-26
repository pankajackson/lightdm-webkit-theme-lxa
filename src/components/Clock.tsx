import React, { useEffect, useState } from "react"
import styled from "styled-components"

const ClockContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  color: #efefef;
  font-family: "Lato", sans-serif;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5), 0px -1px 5px rgba(0, 0, 0, 0.1);
`

const TimeDisplay = styled.h1`
  font-size: 6rem;
  margin: 0;
`

const DateDisplay = styled.h2`
  font-size: 2.5rem;
  margin: 0;
`

// Custom padding function
const padStart = (
  str: string,
  targetLength: number,
  padString: string = "0"
): string => {
  while (str.length < targetLength) {
    str = padString + str
  }
  return str
}

// Utility functions
const formatTime = (time: Date, is24Hour: boolean) => {
  let hours = time.getHours()
  if (!is24Hour) {
    hours = hours % 12 || 12 // Convert to 12-hour format
  }

  const minutes = padStart(time.getMinutes().toString(), 2, "0")
  const formattedHours = padStart(hours.toString(), 2, "0")

  return `${formattedHours}:${minutes}${
    !is24Hour ? (time.getHours() >= 12 ? " PM" : " AM") : ""
  }`
}

const formatDate = (time: Date) => {
  return time.toLocaleString("default", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })
}

// Clock component
interface ClockProps {
  is24Hour?: boolean
}

const Clock: React.FC<ClockProps> = ({ is24Hour = true }) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  return (
    <ClockContainer>
      <TimeDisplay>{formatTime(time, is24Hour)}</TimeDisplay>
      <DateDisplay>{formatDate(time)}</DateDisplay>
    </ClockContainer>
  )
}

export default Clock
