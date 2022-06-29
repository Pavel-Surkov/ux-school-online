import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./constant/Link";
import MobileMenu from "./Menu";
import Container from "./constant/Container";
import Image from "@frontity/components/image";
import logo from "../assets/images/svg/Logo.svg";
import whiteLogo from "../assets/images/svg/Logo-white.svg";
import { flex } from "./base/functions";

const Header = ({ state, actions }) => {
  const theme = state.theme.headerTheme;

  useEffect(() => {
    actions.theme.setHeaderTheme();
  }, []);

  return (
    <>
      <HeaderContainer>
        <StyledLink link="/">
          <Image src={theme === "white" ? whiteLogo : logo} alt="logo" />
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </HeaderContainer>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const HeaderContainer = styled(Container)`
  ${flex("row", "center")}
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
