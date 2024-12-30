import React from "react"
import styled from "styled-components"

const StyledRectButton = styled.button`
  color: white;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007BFF")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }
`

const RectButton: React.FC<{
  disabled: boolean
  onClick?: () => void
  label: string | React.JSX.Element
  type: "submit" | "reset"
}> = ({ disabled, onClick, label, type }) => {
  return (
    <StyledRectButton onClick={onClick} disabled={disabled} type={type}>
      {label}
    </StyledRectButton>
  )
}

export default RectButton
