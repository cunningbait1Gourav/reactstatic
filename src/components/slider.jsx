import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { postBearers } from '../data'
import {mobile} from "../responsive"
import './slider.css'
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
fontawesome.library.add(faFacebookF,faYoutube,faInstagram,faLinkedin);

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
`

const Head = styled.h1`
  color:white;
  font-size:3rem;
  align-items: center;
  align-self: center;
  text-align: center;
  padding-top: 50px;
`
const Card= styled.div`
    background-image: url(${props=>props.img});
`

const Slides = () => {
    const [slideIndex,setSlideIndex] = useState()
    const handleClick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0? slideIndex-1:14)
        }
        else{
            setSlideIndex(slideIndex<14? slideIndex+1 :0)
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
                postBearers.map((item)=>(
                <Slide key={item.id}>
        <Card className="containr" img={item.img}>
            <div className="gradient">
                <div className="content">
                    <h2>{item.name}</h2>
                    <p className='post'>{item.post}</p>
                    <br/>
                    <br/>
                    <div className="icons">
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" className="icon"/>
                        <FontAwesomeIcon icon="fa-brands fa-instagram" className="icon"/>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" className="icon"/>
                    </div>
                </div>
            </div>
        </Card>
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