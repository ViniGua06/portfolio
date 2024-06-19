import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderNavBar,
  NavBarUl,
  NavBarUlLi,
  WebsiteTitle,
} from "./styles/style";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <WebsiteTitle>Vinícius Guarniéri</WebsiteTitle>
        <HeaderNavBar>
          <NavBarUl>
            <NavBarUlLi>
              <Link to={"/"}>Home</Link>
            </NavBarUlLi>

            <NavBarUlLi>
              <Link to={"/projetos"}>Projetos</Link>
            </NavBarUlLi>

            <NavBarUlLi>
              <Link to={"/contato"}>Contato</Link>
            </NavBarUlLi>
          </NavBarUl>
        </HeaderNavBar>
      </HeaderContainer>
    </>
  );
};
