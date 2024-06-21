import styled from "styled-components";

export const CardCont = styled.div`
  width: 20%;
  min-width: 300px;
  border: solid rgba(230, 104, 32, 1) 1px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  padding-inline: 2rem;
  padding-block: 1rem;
  border-radius: 3rem;
  justify-content: space-between;

  & > * {
    display: flex;
    align-items: center;
    color: rgba(230, 104, 32, 1);
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 10rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 0.7rem 1rem;
  background: rgba(230, 104, 32, 1);
  border: none;
  color: whitesmoke;
  border-radius: 3rem;
  cursor: pointer;
`;
