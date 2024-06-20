import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: fit-content;
  padding: 2rem;
`;

export const FirstContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15rem;
`;

export const PersonIcon = styled.img``;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: orange;
  justify-content: space-evenly;
  align-items: center;

  & > * {
    padding-block: 4rem;
    color: whitesmoke
  }
`;

export const IconsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  display: flex;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  & > a {
    width: 5rem;
  }
`;
