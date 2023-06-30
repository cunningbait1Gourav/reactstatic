import styled from "styled-components";
import background from "../hero-bg.JPG";
import { Button } from "react-bootstrap";
import "./Hero.css";
import { useEffect } from "react";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

fontawesome.library.add(faFacebookF, faYoutube, faInstagram,faLinkedin);

const Bck = styled.div`
  width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.65;
  background-color: #000000;
`;
const ShadowOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  overflow-y: hidden;
  background: -moz-linear-gradient(
    top,
    transparent 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background: -webkit-linear-gradient(
    top,
    transparent 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;
const HomeContent = styled.div`
  display: table-cell;
  width: 100vw;
  height: 100%;
  vertical-align: middle;
  padding-bottom: 15.6rem;
  position: relative;
  overflow-y: hidden;
`;
const Row = styled.div`
  padding-top: 21rem;
  padding-right: 80px;
  max-width: 680px;
  width: 94%;
  max-width: 1200px;
  margin: 0 auto;
  ${mobile({
    paddingTop: "12rem",
    paddingRight: "0px",
    textAlign: "center",
  })}
`;
const H3 = styled.h3`
  font-family: "montserrat-medium", sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  position: relative;
  margin-top: 0;
  margin-bottom: 1.2rem;
  margin-left: 6px;
  ${mobile({
    letterSpacing: "0.3rem",
  })}
`;
const HomeContentButton = styled.div`
  padding-top: 6rem;
  text-align: left;
  ${mobile({
    textAlign: "center",
  })}
`;
const List = styled.ul`
  font-family: "montserrat-regular", sans-serif;
  list-style: none;
  margin: 0;
  position: absolute;
  top: 50%;
  right: 5.4rem;
  -webkit-transform: translate3d(0, -50%, 0);
  -ms-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
  ${mobile({
    right: "1rem",
    display: "none",
  })}
`;
const Item = styled.li`
  position: relative;
  padding: 0.9rem 0;
`;
const H1 = styled.h1`
  color: white;
  font-size: 3.5rem;
  font-weight: bold;
  ${tablet({
    fontSize: "2.7rem",
  })}
  ${mobile({
    fontSize: "1.8rem",
  })}
`;

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <Bck style={{ backgroundImage: `url(${background})`, overflow: "hidden" }}>
      <Overlay></Overlay>
      <ShadowOverlay></ShadowOverlay>
      <HomeContent>
        <Row>
          <H3 data-aos="fade-up">Welcome to Rotaract Club of BIT Sindri</H3>
          <H1
            style={{ fontFamily: "montserrat-medium, sans-serif" }}
            data-aos="fade-up"
          >
            Fellowship Through Service
          </H1>
          <HomeContentButton data-aos="fade-up">
            <Button
              variant="outline-light"
              size="lg"
              style={{
                fontFamily: "montserrat-medium, sans-serif",
                padding: "15px 30px",
                margin: "15px 15px 0px 0px",
                width: "215px",
                borderRadius: "0px",
                fontSize: ".8rem",
                fontWeight: "bold",
                letterSpacing: "0.3rem",
                textTransform: "uppercase",
              }}
            >
              Contact Us
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              style={{
                fontFamily: "montserrat-medium, sans-serif",
                padding: "15px 30px",
                margin: "15px 15px 0px 0px",
                width: "215px",
                borderRadius: "0px",
                fontSize: ".8rem",
                fontWeight: "bold",
                letterSpacing: "0.3rem",
                textTransform: "uppercase",
              }}
            >
              RID 3250
            </Button>
          </HomeContentButton>
        </Row>
      </HomeContent>
      <List style={{ color: "white" }} data-aos="fade-up">
        <Item>
          <span className="name">Facebook</span>
          <BrowserRouter>
            <Link
              to="https://www.facebook.com/profile.php?id=100093690961481"
              style={{ color: "white" }}
              target="_blank"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-facebook-f"
                className="icon pl"
              />
            </Link>
          </BrowserRouter>
        </Item>
        <Item>
          <span className="name">Youtube</span>
          <BrowserRouter>
            <Link
              to="https://www.youtube.com/@rotaractclubbitsindri1445"
              style={{ color: "white" }}
              target="_blank"
            >
              <FontAwesomeIcon icon="fa-brands fa-youtube" className="icon" />
            </Link>
          </BrowserRouter>
        </Item>
        <Item>
          <span className="name">Instagram</span>
          <BrowserRouter>
            <Link
              to="https://www.instagram.com/rotaractbitsindri/"
              style={{ color: "white" }}
              target="_blank"
            >
              <FontAwesomeIcon icon="fa-brands fa-instagram" className="icon pl" />
            </Link>
          </BrowserRouter>
        </Item>
        <Item>
          <span className="name">Instagram</span>
          <BrowserRouter>
            <Link
              to="https://www.linkedin.com/company/rotaract-club-of-bit-sindri/about/"
              style={{ color: "white" }}
              target="_blank"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" className="icon pl" />
            </Link>
          </BrowserRouter>
        </Item>
      </List>
    </Bck>
  );
};

export default Hero;
