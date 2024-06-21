import { Button, ButtonContainer, CardCont } from "./styles/style";

export interface ICard {
  titulo: string;
  descricao: string;
}

export const Card = (props: ICard) => {
  return (
    <>
      <CardCont>
        <h1>{props.titulo}</h1>
        <p>{props.descricao}</p>
        <ButtonContainer>
          <Button>Ver Projeto</Button>
        </ButtonContainer>
      </CardCont>
    </>
  );
};
