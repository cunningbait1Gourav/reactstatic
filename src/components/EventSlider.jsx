import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { rotoEvents } from "../data";
import { mobile } from "../responsive";
import background from "../protruding-squares.png"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  background-size: 100px 50px;
  background-image: url(${background});
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
  min-width:367;
  object-fit: cover;
  position: relative;
  top:30px;
  padding-left: 10px;
  ${mobile({ maxHeight:"125px" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 40px;
  color:aliceblue;
  ${mobile({ fontSize:"20px",position:"relative",bottom:"30px" })}
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 3px;
  color:aliceblue;
  ${mobile({ fontSize:"10px",position:"relative",bottom:"60px",maxHeight:"300px",overflowY:"hidden" })}
`;
const Cards = styled.div`
    width:70%;
    display: flex;
    align-items: center;
    box-shadow: 0 10px 20px black;
    height:550px;
    background-color: rgba(28, 104, 139, 0.7);
    ${mobile({ flexDirection: "column" })}
`

const EventSlider = () => {
  const [slideIndex, setSlideIndex] = useState();
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 21);
    } else {
      setSlideIndex(slideIndex < 21 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container id='slides'>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {rotoEvents.map((item) => (
          <Slide key={item.id}>
            <Cards>
              <ImageContainer>
                <Image src={item.img}></Image>
              </ImageContainer>
              <InfoContainer>
                <Title>{item.name}</Title>
                <Desc>
                  {item.date}
                  <br />
                  {item.desc}
                </Desc>
              </InfoContainer>
            </Cards>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default EventSlider;
