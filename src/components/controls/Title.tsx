import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
`

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default Title
