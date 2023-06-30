import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import Secjoin from './components/Sec2';
import Slides from './components/slider';
import 'bootstrap/dist/css/bootstrap.css';
import ContactUs from './components/Contactus';
import Footer from './components/Footer';
import EventSlider from './components/EventSlider';

const Main = styled.div`
    font-family: "lora-regular", serif;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: normal;
    line-height: 1.765;
    color: #757575;
    margin: 0;
    padding: 0;
`


function App() {
  return (
<Main style={{overflow:"hidden"}}>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <EventSlider/>
    <Secjoin></Secjoin>
    <Slides></Slides>
    <ContactUs></ContactUs>
    <Footer/>
</Main>
    

  );
}

export default App;
