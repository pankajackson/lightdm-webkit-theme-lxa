import React, { useCallback, useEffect } from "react"
import styled from "styled-components"
import CircularButton from "@/components/controls/CircularButton"
import FormContainer from "@/components/controls/FormContainer"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Spinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

interface Props {
  currentPassword: string
  isSubmitting: boolean
  onPasswordChange: (newPassword: string) => void
  onSubmit: () => void
}

const LogInForm: React.FC<Props> = ({
  currentPassword,
  isSubmitting,
  onPasswordChange,
  onSubmit,
}) => {
  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onPasswordChange(e.target.value),
    [onPasswordChange]
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      onSubmit()
    },
    [onSubmit]
  )

  // Clear the password input when the form unmounts.
  useEffect(() => {
    return () => onPasswordChange("")
  }, [onPasswordChange])

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <InputWrapper>
          <StyledInput
            autoFocus={true}
            disabled={isSubmitting}
            id="password"
            name="password"
            onChange={handlePasswordChange}
            type="password"
            value={currentPassword}
            placeholder="Password"
          />
          <CircularButton disabled={isSubmitting} type="submit">
            {isSubmitting ? <Spinner /> : "→"}
          </CircularButton>
        </InputWrapper>
      </StyledForm>
    </FormContainer>
  )
}

export default LogInForm
