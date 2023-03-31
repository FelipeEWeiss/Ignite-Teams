import { Container, Subtitle, Title } from "./styles"

interface IHighlightProps {
  title: string;
  subtitle: string;
}

export const Highlight = ({ title, subtitle }: IHighlightProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}