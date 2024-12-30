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
  margin-bottom: 8px; /* Adjusted margin for spacing for "Back to list" button */
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`

const BackToListButton = styled.button`
  background: none;
  color: #3498db;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  margin-top: 4px;

  &:hover {
    color: #2980b9;
  }
`

interface DropdownInputFieldProps {
  options: string[]
  value: string
  label: string
  onChange: (value: string) => void
}

const DropdownInputField: React.FC<DropdownInputFieldProps> = ({
  options,
  value,
  label,
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
    <div>
      <StyledInput
        type="text"
        placeholder="Enter username"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <BackToListButton onClick={() => setIsCustomInput(false)}>
        Back to list
      </BackToListButton>
    </div>
  ) : (
    <StyledSelect value={value} onChange={handleSelectChange}>
      <option value="">{label}</option>
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
