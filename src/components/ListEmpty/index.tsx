import { Container, Message } from "./styles"

interface IListEmptyProps {
  message: string;
}

export const ListEmpty = ({ message }: IListEmptyProps) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}