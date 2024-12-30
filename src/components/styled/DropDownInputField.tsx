import React, { useState } from "react"
import styled from "styled-components"

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 16px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 16px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`

interface DropdownInputFieldProps {
  options: string[]
  value: string
  onChange: (value: string) => void
}

const DropdownInputField: React.FC<DropdownInputFieldProps> = ({
  options,
  value,
  onChange,
}) => {
  const [isCustomInput, setIsCustomInput] = useState(false)

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    if (selectedValue === "custom") {
      setIsCustomInput(true)
      onChange("")
    } else {
      setIsCustomInput(false)
      onChange(selectedValue)
    }
  }

  return isCustomInput ? (
    <StyledInput
      type="text"
      placeholder="Enter username"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ) : (
    <StyledSelect value={value} onChange={handleSelectChange}>
      <option value="">Select username</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
      <option value="custom">Other (Enter manually)</option>
    </StyledSelect>
  )
}

export default DropdownInputField
