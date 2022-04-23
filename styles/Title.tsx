import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.BorColor};
  padding-bottom:10px;
`;

export default Title