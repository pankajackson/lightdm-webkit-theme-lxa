import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #1abc9c;
  color: white;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #16a085;
  }
`

const Button: React.FC<{ onClick: () => void; label: string }> = ({
  onClick,
  label,
}) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>
}

export default Button
