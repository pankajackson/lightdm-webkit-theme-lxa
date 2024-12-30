import React, { useState, useEffect } from "react"
import styled from "styled-components"

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 16px;
  width: 100%;
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

interface DropdownInputFieldProps {
  options: { display_name: string; username: string }[]
  defaultValue?: string
  label: string
  id: string
  name: string
  onChange: (value: string) => void
}

const DropdownInputField: React.FC<DropdownInputFieldProps> = ({
  options,
  defaultValue,
  label,
  id,
  name,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue || "")

  useEffect(() => {
    if (defaultValue) {
      setSelectedValue(defaultValue)
      onChange(defaultValue)
    }
  }, [defaultValue, onChange])

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value
    setSelectedValue(selected)
    onChange(selected)
  }

  return (
    <StyledSelect
      id={id}
      name={name}
      value={selectedValue}
      onChange={handleSelectChange}
    >
      <StyledOption value="">{label}</StyledOption>
      {options.map((option, index) => (
        <StyledOption key={index} value={option.username}>
          {option.display_name}
        </StyledOption>
      ))}
    </StyledSelect>
  )
}

export default DropdownInputField
