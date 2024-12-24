import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: #34495e;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`

const FormContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Container>{children}</Container>
}

export default FormContainer
