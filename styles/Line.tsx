import styled from "styled-components";

const Line = styled.li`
  list-style: none;
  border: 1px solid ${(props) => props.theme.colors.BorColor};
  color: ${(props) => props.theme.colors.TextcolorButtCre};
  margin: 10px 0;
  padding: 10px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  word-break: break-word;
  .completed {
    text-decoration: line-through;
    opacity: 0.4;
  }
`;

export default Line;
