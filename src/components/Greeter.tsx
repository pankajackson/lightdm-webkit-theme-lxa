import React from "react"
import Title from "@/components/styled/Title"
import FormContainer from "@/components/styled/FormContainer"
import InputField from "@/components/styled/InputField"
import Button from "@/components/styled/Button"

const handleLogin = () => {
  console.log("Login clicked")
}

const Greeter: React.FC = () => {
  return (
    <>
      <FormContainer>
        <Title>Login</Title>
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <Button onClick={handleLogin} label="Log In" />
      </FormContainer>
    </>
  )
}

export default Greeter
