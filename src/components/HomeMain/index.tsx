import {
  FirstContainer,
  IconsContainer,
  Main,
  PersonIcon,
  TitleContainer,
} from "./styles/style";

import user from "../../assets/user.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

export const HomeMain = () => {
  return (
    <>
      <Main>
        <FirstContainer>
          <PersonIcon src={user} alt="" />
          <TitleContainer>
            <h1>Vinícius Guarniéri Souza</h1>
            <h2>Desenvolvedor Web</h2>
            <IconsContainer>
              <img src={linkedin} width={"20%"} alt="" />
              <img src={github} width={"20%"} alt="" />
            </IconsContainer>
          </TitleContainer>
        </FirstContainer>
      </Main>
    </>
  );
};
