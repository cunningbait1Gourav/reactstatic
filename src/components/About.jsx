import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import "./about.css"
import { useEffect } from 'react';
import CountUp from 'react-countup';

const About = ()=>{
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
      }, [])
    return(
        <div className='s-about' id='about'>
            <div className='flex r sta'>
            <h3 className='subhead subhead__dark' data-aos="fade-up">HELLO THERE</h3>
            </div>
            <div className='flex r'>
            <h1 className='light' data-aos="fade-up">
                We Are Young But Bold
                <hr></hr>
            </h1>
            <div className='flex r content__about' data-aos="fade-up">
                <p className='content__desc'>Rotaract Club of Sindri is the youth wing of Rotary International aimed at organizing various socio-cultural events and developing managerial skills. Our main purpose is to provide an opportunity for young men and women to enhance the knowledge and skills that will assist them in personal development, to address the physical and social needs of their communities, and to promote better relations between all people worldwide through a framework of friendship and service.</p>
            </div>
            <div className='flex r se' data-aos="fade-up">
                <div className='flex cen'>
                    <h1 className='stat__num'><CountUp end={12} delay={0.5} enableScrollSpy='true'></CountUp>
                        </h1>
                    <h3 className='subhead stat__cat'>Awards Recieved</h3>
                    <hr className='disp'></hr>
                </div>
                <div className='flex cen'>
                        <h1 className='stat__num'><CountUp end={46} delay={0.5} enableScrollSpy='true'></CountUp>
                        </h1>
                    <h3 className='subhead stat__cat'>Members</h3>
                    <hr className='disp'></hr>
                </div>
                <div className='flex cen'>
                        <h1 className='stat__num'><CountUp end={35} delay={0.5} enableScrollSpy='true'></CountUp>
                        </h1>
                    <h3 className='subhead stat__cat'>Projects Completed</h3>
                    <hr className='disp'></hr>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About