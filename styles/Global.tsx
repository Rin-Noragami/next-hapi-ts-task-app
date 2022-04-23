import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 600;
  font-family: 'Josefin Sans', sans-serif;
}
body{
    background-color: rgb(20, 20, 20);
}
`;

export default Global