import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    // background: papayawhip;
}
body{
    overflow-x:hidden;
    overflow-y:scroll;
    background: papayawhip;
    Arial, sans-serif;
    padding:0 0 8rem 0 !important;
    margin:0 !important;
}
`;

const Global = (props) => {
  const { children } = props;
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
export default Global;
