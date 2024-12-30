import React, { useState } from "react"
import Title from "@/components/styled/Title"
import FormContainer from "@/components/styled/FormContainer"
import InputField from "@/components/styled/InputField"
import DropdownInputField from "@/components/styled/DropDownInputField"
import Button from "@/components/styled/Button"
import { users, defaultUser } from "@/dummyData"

const Greeter: React.FC = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      console.log("Please fill in all fields")
      return
    }
    console.log("Login submitted with:", { username, password })
    // Add login logic here
  }

  return (
    <FormContainer>
      <Title>Login</Title>
      <DropdownInputField
        options={users}
        defaultValue={defaultUser}
        label="Select username"
        id="ddlUsers"
        name="ddUsers"
        onChange={setUsername}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} label="Log In" />
    </FormContainer>
  )
}

export default Greeter
