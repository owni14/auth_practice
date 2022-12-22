import styled from "styled-components";

// Css Styling
const MainText = styled.div`
  color: black;
  text-align: center;
  margin: 5rem;
  font-size: 3.5rem;
  font-weight: bold;
`;

export default function Home() {
  return <MainText>Welcome on Board!</MainText>;
}
