import React from "react";
import styled from "styled-components";
import Link from "../Link/Link";
import Global from "../Global/Global";

const Header = styled.header`
  background: #7d387d;
  color: white;
  text-align: center;
  padding: 0.1rem;
  width: 100%;
`;

const Title = styled.h1`
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
`;
const Footer = styled.footer`
  background: #dfb2f4;
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  left: 0;
`;
const List = styled.ul`
  list-style: none;
  font-family: Arial, sans-sarif;
  display: flex;
  width: 100%;
  padding :0:
  margin:0;
`;
const LinkWrap = styled.li`
  width: 50%;
`;
// changing the title of the pages ,
const PAGE_TITLE_MAP = {
  home: "To-Do List",
  add: "Adding Item",
  edit: "Editing Item",
};

const Layout = (props) => {
  //by default active page is home
  const { children, activePage } = props;
  return (
    <div>
      <Header>
        {/* mapping through the active page, telling it to display a specific title at an activePage*/}
        <Title>{PAGE_TITLE_MAP[activePage]}</Title>
      </Header>
      {children}
      <Footer>
        <nav>
          <List>
            <LinkWrap>
              <Global>
                {/* When on home Home button must be disabledd */}
                <Link fullWidth disabled={activePage === "home"}>
                  Back to home
                </Link>
              </Global>
            </LinkWrap>
            <LinkWrap>
              <Global>
                <Link fullWidth disabled={activePage === "add"}>
                  Add new item
                </Link>
              </Global>
            </LinkWrap>
          </List>
        </nav>
      </Footer>
    </div>
  );
};

export default Layout;
