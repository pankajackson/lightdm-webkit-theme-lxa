import React, { useState, useEffect } from "react"
import styled from "styled-components"

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  margin-top: 20px;
  width: 40%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`

const StyledOption = styled.option`
  font-size: 16px;
  padding: 10px;
`

interface SessionListDropDownProps {
  sessions: LightDMSession[]
  defaultValue?: string
  id: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SessionListDropDown: React.FC<SessionListDropDownProps> = ({
  sessions,
  defaultValue,
  id,
  name,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue || "")

  useEffect(() => {
    if (defaultValue) {
      setSelectedValue(defaultValue)
      const mockEvent = {
        target: { value: defaultValue },
      } as React.ChangeEvent<HTMLSelectElement>
      onChange(mockEvent)
    }
  }, [defaultValue, onChange])

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value)
    onChange(e)
  }

  return (
    <StyledSelect
      id={id}
      name={name}
      value={selectedValue}
      onChange={handleSelectChange}
    >
      {sessions.map((session, index) => (
        <StyledOption key={index} value={session.key}>
          {session.name}
        </StyledOption>
      ))}
    </StyledSelect>
  )
}

export default SessionListDropDown
