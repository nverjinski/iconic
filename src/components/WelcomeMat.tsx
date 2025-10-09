import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-family: "Galada", cursive;
  margin-top: 0;
  margin-bottom: 0;
`;

const Subtitle = styled.div`
  font-style: italic;
`;

export default function WelcomeMat() {
  return (
    <Container>
      <Title>iconic</Title>
      <Subtitle>icon development made easy</Subtitle>
    </Container>
  );
}
