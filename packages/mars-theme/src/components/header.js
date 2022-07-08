import { connect, styled, useConnect, css } from "frontity";
import Link from "./constant/Link";
import MobileMenu from "./Menu";
import Container from "./constant/Container";
import Image from "@frontity/components/image";
import DropdownModal from "./constant/DropdownModal";
import logo from "../assets/images/svg/Logo.svg";
import whiteLogo from "../assets/images/svg/Logo-white.svg";
import { flex, font, whiteRgba, grayRgba } from "./base/functions";
import drop from "../assets/images/svg/drop.svg";
import whiteDrop from "../assets/images/svg/drop-white.svg";
import { ListButton } from "./constant/Button";

const Header = ({ theme }) => {
  const { state, actions } = useConnect();
  const { menu, courseModalOpened } = state.theme;

  return (
    <HeaderWrapper theme={theme}>
      <HeaderContainer>
        <StyledLink link="/">
          <Image src={theme === "white" ? whiteLogo : logo} alt="logo" />
        </StyledLink>
        <div
          css={css`
            margin-right: 30px;
            position: relative;
          `}
        >
          <CourseButton
            theme={theme}
            rotation={"down"}
            onClick={() => actions.theme.toggleCourseModal()}
          >
            Онлайн-курсы
          </CourseButton>
          {courseModalOpened && (
            <CourseModal>
              <DropdownModal>
                <CourseListButton
                  onClick={() => actions.theme.closeCourseModal()}
                >
                  Онлайн-курсы
                </CourseListButton>
                <CourseListButton
                  onClick={() =>
                    (window.location.href = "https://ux-school.by/")
                  }
                >
                  Занятия в классе
                </CourseListButton>
              </DropdownModal>
            </CourseModal>
          )}
        </div>
        <nav
          css={css`
            margin-left: auto;
          `}
        >
          <ul
            css={css`
              ${flex("row", "center")}
              color: ${theme === "white" ? "var(--white)" : "var(--black-900)"};
            `}
          >
            {menu &&
              menu.map(([text, link]) => {
                return (
                  <NavLink theme key={link}>
                    <Link link={link}>{text}</Link>
                  </NavLink>
                );
              })}
          </ul>
        </nav>
        <MobileMenu />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const CourseModal = styled.div`
  position: absolute;
  left: 50%;
  top: calc(100% + 10px);
  transform: translateX(-50%);
  width: 100vw;
  max-width: 184px;
`;

const HeaderWrapper = styled.div`
  border-bottom: 1px solid rgba(var(--white), 0.1);
  position: ${({ theme }) => (theme === "white" ? "absolute" : "relative")};
  top: 0;
  left: 0;
  width: 100%;
  color: ${({ theme }) =>
    theme === "white" ? "var(--white)" : "var(--black-900)"};

  /* TODO: Remove */
  background: orangered;
`;

const CourseListButton = styled(ListButton)`
  padding: 8px 16px;
  ${font(16, 24)}
  border-bottom: 1px solid var(--gray-100);
  width: 100%;
  text-align: left;
  &:first-of-type {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-of-type {
    border: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const CourseButton = styled.button`
  position: relative;
  ${font(16, 24)}
  padding: .5em 1em;
  padding-right: 46px;
  background: transparent;
  border-radius: 8px;
  border: 1px solid ${whiteRgba(0.2)};
  color: ${({ theme }) =>
    theme === "white" ? "var(--white)" : "var(--black-900)"};
  &::after {
    content: "";
    position: absolute;
    right: 16px;
    top: 50%;
    transform: ${({ rotation }) =>
      rotation === "up"
        ? "translateY(-50%) rotate(180deg)"
        : "translateY(-50%)"};
    width: 20px;
    height: 20px;
    background: url(${drop}) no-repeat 50%;
  }
  &::after {
    ${({ theme }) =>
      theme === "white" && `background: url(${whiteDrop}) no-repeat 50%`};
  }
`;

const NavLink = styled.li`
  color: inherit;
  margin-right: 32px;
  ${font(16, 24)}
  font-weight: 400;
  font-stretch: 122%;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  &:last-child {
    margin-right: 0;
  }
`;

const HeaderContainer = styled(Container)`
  ${flex("row", "center")}
  padding: 28px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 45px;
`;
