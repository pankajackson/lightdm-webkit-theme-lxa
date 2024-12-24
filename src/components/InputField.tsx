import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  padding: 12px 20px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  border: 2px solid #1abc9c;
  border-radius: 5px;
  background-color: #ecf0f1;
  color: #34495e;

  &:focus {
    border-color: #16a085;
    outline: none;
  }
`

const InputField: React.FC<{ type: string; placeholder: string }> = ({
  type,
  placeholder,
}) => {
  return <StyledInput type={type} placeholder={placeholder} />
}

export default InputField
