import React from "react"
import styled from "styled-components"

interface ColorProps {
  $color1: string
  $color2: string
}

const StyledBackgroundWrapper = styled.div<ColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100vh;
  background: linear-gradient(
    135deg,
    ${(props) => props.$color1},
    ${(props) => props.$color2}
  );
  font-family: "Roboto", sans-serif;
`

const BackgroundWrapper: React.FC<{
  colors: { color1: string; color2: string }
  children: React.ReactNode
}> = ({ colors, children }) => {
  return (
    <StyledBackgroundWrapper $color1={colors.color1} $color2={colors.color2}>
      {children}
    </StyledBackgroundWrapper>
  )
}

export default BackgroundWrapper
