import React from "react";
import styled from "styled-components";
import TextModel from "./models/TextModel";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ModelWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
  align-items: center;
`;

const Button = styled.button`
  border: 2px solid #000;
  box-shadow: inset -2px -4px #0006, inset 2px 2px #fff7;
  background: #999 url("https://i48.servimg.com/u/f48/18/06/99/75/bgbtn10.png");
  background-size: cover;
  background-position: center;
  color: #ddd;
  font-weight: 100;
  text-align: center;
  font-size: 16px;
  cursor: context-menu;
  image-rendering: pixelated;
  width: 50vw;
  height: 60px;
  margin-bottom: 10px;
  max-width: 400px;
  padding: 20px;

  &:hover {
    background: linear-gradient(
        rgba(100, 100, 255, 0.45),
        rgba(100, 100, 255, 0.45)
      ),
      url("https://i48.servimg.com/u/f48/18/06/99/75/bgbtn10.png");
    background-size: cover;
    background-position: center;
    cursor: url("./pointer.png"), pointer;
    z-index: 5;
    color: #ffff7c;
  }
`;

const playSound = () => {
  const audio = new Audio("click.mp3");
  audio.play();
};

const Hero = () => {
  return (
    <Section>
      <Container>
        <ModelWrapper>
          <TextModel />
        </ModelWrapper>
        <ButtonWrapper>
          <a
            href="https://github.com/SOME-1HING"
            style={{ fontFamily: "MyFont" }}
            target="_blank"
          >
            <Button onClick={playSound}>Github</Button>
          </a>

          <a href="https://www.t.me/TheSOME1HING" target="_blank">
            <Button onClick={playSound}>Telegram</Button>
          </a>
        </ButtonWrapper>
      </Container>
    </Section>
  );
};

export default Hero;
