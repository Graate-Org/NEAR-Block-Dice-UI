import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import generateAvatar from "../../utils/generateAvatar";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";

const Navbar = ({ currentUser, nearConfig, wallet }) => {
  const { pathname } = useLocation();

  const handleUser = (e) => {
    if (currentUser && e.target.textContent === "Sign Out") {
      (function signOut() {
        wallet.signOut();
        window.location.replace(
          window.location.origin + window.location.pathname
        );
      })();
    } else if (!currentUser && e.target.textContent === "Login") {
      (function signIn() {
        wallet.requestSignIn(nearConfig.contractName, "NEAR Block Dice");
      })();
    }
  };

  return (
    <StyledNav className="py-4 flex items-center justify-between mx-auto">
      <Logo />
      <div className="flex items-center">
        <div className="flex">
          <NavLink exact activeClassName="active-link" to="/">
            Home
          </NavLink>
          <NavLink
            activeClassName="active-link"
            className="mx-8"
            to="/created-games"
          >
            Created Games
          </NavLink>
          <NavLink
            activeClassName="active-link"
            className="mx-8"
            to="/active-games"
          >
            Active Games
          </NavLink>
          <NavLink activeClassName="active-link" to="/completed-games">
            Completed Games
          </NavLink>
        </div>
        <div className="flex ml-16 items-center">
          <span className="near-line bg-gray-500 mr-12" />
          <Link to="/profile">
            {currentUser ? (
              <img src={generateAvatar(currentUser.accountId)} alt="" className="mr-10 border-2 border-primary rounded-full" />
            ) : (
              <Icon
                className="mr-10"
                color={pathname === "/profile" ? "#FF6433" : "#1E1B1B"}
                size={28}
                icon="avatar"
              />
            )}
          </Link>
          <Button variant="primary" onClick={handleUser}>
            {currentUser ? "Sign Out" : "Login"}
          </Button>
        </div> 
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  max-width: 85%;

  & a {
    font-weight: 600;
    padding: 0 0.6rem;
  }

  & .near-line {
    height: 2.5rem;
    width: 1px;
  }

  & .active-link {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      height: 2px;
      width: 100%;
      margin-top: 10px;
      background: #ff6433;
      bottom: -0.2rem;
      left: 0;
    }
  }
`;

export default Navbar;
