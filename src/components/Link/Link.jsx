import Global from "../Global/Global"
import styled from "styled-components";

const Base = styled.a`
  font-weight: 700;
  padding: 1rem;
  // display: block;
  background:#dfb2f4;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  border-radius: 4px;
  display :inline-block;
  text-decoration : none;
  text-align:center;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  color: ${(props) => (props.disabled ? "#999" : "#222")};
  cursor:${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover { 
   background: ${(props) => (props.disabled ? "#dfb2f4" : "#c45baa")};
  }
  &:active {
    background: ${(props) => (props.disabled ? "#dfb2f4" : "#999")};

`;

const Link = (props) => {
  const { children, disabled, url, fullWidth } = props;
  return (
    <Base
      fullWidth={fullWidth}
      href={disabled ? undefined : url}
      disabled={disabled}
    >
      {children}
    </Base>
  );
};
export default Link;
