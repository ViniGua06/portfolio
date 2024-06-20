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
              <a href="https://www.linkedin.com/in/vinicius-guarnieri-souza/" target="_blank"><img src={linkedin} alt="" /></a>
              <a href="https://github.com/ViniGua06" target="_blank"><img src={github}  alt="" /></a>
            </IconsContainer>
          </TitleContainer>
        </FirstContainer>
      </Main>
    </>
  );
};
