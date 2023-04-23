import styled from "styled-components";
import React from "react";
import Hero from "./components/Hero";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Gif = styled.img`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

function App() {
  return (
    <Container>
      <Gif src="bg.gif" alt="background gif" />
      <Hero />
    </Container>
  );
}

export default App;
