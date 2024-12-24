import React from "react"
import styled from "styled-components"
import FormContainer from "./components/FormContainer"
import InputField from "./components/InputField"
import Button from "./components/Button"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #3498db, #bf19a4);
  font-family: "Roboto", sans-serif;
`

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
`

const App: React.FC = () => {
  const handleLogin = () => {
    console.log("Login clicked")
  }

  return (
    <Wrapper>
      <FormContainer>
        <Title>Login</Title>
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <Button onClick={handleLogin} label="Log In" />
      </FormContainer>
    </Wrapper>
  )
}

export default App
