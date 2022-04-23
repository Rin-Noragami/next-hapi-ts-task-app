import styled from "styled-components";

const Inputstyle = styled.input`
  font-size: 0.9em;
  padding: 5px;
  background-color: ${(props) => props.theme.colors.BGcolorCard};
  border: none;
  outline: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.BorColor};
  color: ${(props) => props.theme.colors.TextcolorButtCre};
`;

export default Inputstyle