import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 16px; /* Adds space below the input field */
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`

const InputField: React.FC<{ type: string; placeholder: string }> = ({
  type,
  placeholder,
}) => {
  return <StyledInput type={type} placeholder={placeholder} />
}

export default InputField
