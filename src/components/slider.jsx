import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { sliderItem } from '../data'
import {mobile} from "../responsive"
import './slider.css'

const Container = styled.div`
width:100%;
height:100%;
display:flex;
position:relative;
overflow:hidden;
${mobile({display:"none"})}
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color: #fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:space-evenly;
position:absolute;
top:0;
bottom:0;
left: ${props=>props.direction === "left" && "10px"};
right: ${props=>props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`
const Section = styled.div`
    background-color:#005bc5;
    align-items: center;
    align-self: center;
`
const Wrapper = styled.div`
height:100%;
display:flex;
transition: all 1.5s ease;
transform:translateX(${props=>props.slideIndex* -100}vw);
`
const Slide= styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content: space-around;
align-items:center;
background-color:#${props=>props.bg};
`

const Head = styled.h1`
  color:white;
  font-size:3rem;
  align-items: center;
  align-self: center;
  text-align: center;
  padding-top: 50px;
`
const Slides = () => {
    const [slideIndex,setSlideIndex] = useState()
    const handleClick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0? slideIndex-1:2)
        }
        else{
            setSlideIndex(slideIndex<2? slideIndex+1 :0)
        }
    }
  return (
    <Section>
        <Head>
            OUR POST BEARERS
        </Head>
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {
                sliderItem.map((item)=>(
                <Slide key={item.id}>
        <div className="containr">
            <div className="gradient">
                <div className="content">
                    <h2>DAVID <br/> BACKHAM</h2>
                    <p>27 years,Los Angeles,USA</p>
                    <br/>
                    <p className="details">I am a digital marketing Manager working in Lisbon. I like to travel across the world</p>
                    <div className="icons">
                        
                    </div>
                </div>
            </div>
        </div>
                </Slide>
                ))
            }
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
    </Section>
  )
}

export default Slides