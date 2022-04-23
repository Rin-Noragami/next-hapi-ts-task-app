import styled from "styled-components";

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  min-width: 100px;
  max-width: 900px;
  text-align: center;
  padding-top: 0px;
  padding-bottom: 30px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.BorColor};
`;

export default Form