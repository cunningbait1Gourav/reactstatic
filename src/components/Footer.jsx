import AOS from 'aos';
import 'aos/dist/aos.css';
import './footer.css'
import './about.css'
import { useEffect } from 'react';

const Footer = ()=>{
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
      }, [])
    return(
        <div className="footer">
            <div style={{width:"100%"}}>
             <iframe title='map' width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=200&amp;hl=en&amp;q=Rotaract%20club%20of%20sindri+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameBorder="0" marginHeight="0" marginWidth="0"><a href="https://www.maps.ie/create-google-map/">Embed Google Map</a></iframe>
            </div>
            <div style={{width:"100%", paddingTop:"20px"}} className='flex r sbet'>
                <div className="copyright" data-aos='fade-up'>
                        <span>© Copyright Rotaract Club of Sindri |</span> 
                        <span> Designed by <a href="">RAC Sindri</a></span>	
                    </div>
            </div>
        </div>
    )
}

export default Footer