import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import {NavLink, Link, useLocation} from 'react-router-dom';

const ListContainer = styled.ul`
  ${tw`
            flex
            list-none
        `};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
        text-xs
        md: text-base
        text-black
        font-medium
        mr-1
        md: mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-500
    `};
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
        text-white
        text-xl
        mb-3
        focus: text-white
        `}
    `}
`;

const DropdownItem = styled.li<{ menu?: any }>`
  ${tw`
        text-xs
        md: text-base
        text-black
        font-medium
        mr-1
        md: mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-500
    `};
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
        text-white
        text-xl
        mb-3
        focus: text-white
        `}
    `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const [open, setOpen] = React.useState(false);

  const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

  const handleDropdown = () => {
    setOpen(!open);
  };

  const active = {
    // backgroundColor: "#9fc5e8",
    padding: '6px',
    borderBottom: "3px solid #D85052"
  };

  const activeTest = {
    // backgroundColor: "#9fc5e8",
    // padding: '6px',
    borderBottom: "3px solid #D85052"
  };

  const normal = {
    backgroundColor: "white",
  }


  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="/"> Home </a>
          </NavItem>
          <NavItem menu>
            <a href="/courses"> Courses </a>
          </NavItem>
          <NavItem menu>
            <a href="Pareekshan1"> Pareekshan 1.0 </a>
          </NavItem>
          <NavItem menu>
            <a href="Pareekshan2"> Pareekshan 2.0 </a>
          </NavItem>
          <NavItem menu>
            <a href="PYQ"> PYQ </a>
          </NavItem>
          <NavItem menu>
            <a href="ContactUs"> Contact Us </a>
          </NavItem>
          <NavItem menu>
            <a href="DAW"> Daily Answer Writing </a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }
  return (
    <ListContainer>
      <NavItem>
        <a href="/" style={splitLocation[1] === "" ? active : normal }> Home </a>
      </NavItem>
      <NavItem>
        <a href="courses" style={splitLocation[1] === "courses" ? active : normal }> Courses </a>
      </NavItem>
      <NavItem>
        <button type="button" onClick={handleDropdown} style={splitLocation[1] === "Pareekshan1" && "Pareekshan2" ? activeTest : normal }>
          TestSeries
        </button>
        {open && (
          <div
            style={{
              position: "absolute",
              top: "50",
              left: "50",
              border: "1px solid rgba(0, 0, 0, 0.04)",
              zIndex: 2,
            }}
          >
            <ul>
              <DropdownItem>
                <li style={{ padding: "4px 12px" }}>
                  <a href="Pareekshan1"> Pareekshan 1.0 </a>
                </li>
              </DropdownItem>
              <DropdownItem>
                <li style={{ padding: "8px 12px" }}>
                  <a href="Pareekshan2"> Pareekshan 2.0 </a>
                </li>
              </DropdownItem>
            </ul>
          </div>
        )}

        {/* <a href="TestSeries"> Test Series </a> */}
      </NavItem>
      <NavItem>
        <a href="PYQ" style={splitLocation[1] === "PYQ" ? active : normal}> PYQ </a>
      </NavItem>
      <NavItem>
        <a href="ContactUs" style={splitLocation[1] === "ContactUs" ? active : normal }> Contact Us </a>
      </NavItem>
      <NavItem>
        <a href="DAW" style={splitLocation[1] === "DAW" ? active : normal }> Daily Answer Writing </a>
      </NavItem>
    </ListContainer>
  );
}
