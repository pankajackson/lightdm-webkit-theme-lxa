// src/styles/styled-components.ts
import styled from "styled-components"

// Common button style
export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

// Common input style
export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

// Common wrapper for forms or boxes
export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`
