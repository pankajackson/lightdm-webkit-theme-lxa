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
  options: { value: string; label: string }[] // Accept both value and label
  value: string
  label: string
  id: string // Add id for HTML output
  name: string // Add name for HTML output
  onChange: (value: string) => void
}

const DropdownInputField: React.FC<DropdownInputFieldProps> = ({
  options,
  value,
  label,
  id,
  name,
  onChange,
}) => {
  return (
    <StyledSelect
      id={id}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <StyledOption value="">{label}</StyledOption>
      {options.map((option, index) => (
        <StyledOption key={index} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  )
}

export default DropdownInputField
