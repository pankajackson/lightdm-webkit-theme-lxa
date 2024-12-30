import styled from "styled-components"

const CircularButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007BFF")};
  color: #fff;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }
`

export default CircularButton
