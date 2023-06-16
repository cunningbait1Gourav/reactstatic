
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contact.css'
import { useState,useEffect } from 'react' 
import './about.css'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { send } from 'emailjs-com';


fontawesome.library.add(faFacebookF,faYoutube,faInstagram);


const ContactUs = ()=>{
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
      }, [])
    const [toSend, setToSend] = useState({
        from_name: '',
        from_mail: '',
        subject: '',
        message: '',
      });
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_k6r053b',
            "template_ews6eyj",
            toSend,
            'Kt2aPFGYy6fJBu5RR'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
      };
      const handleChange = (e) => {
        console.log(toSend)
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return(
        <div className="s-contact" id='contactUs'>
            <div className="overlay">
                <div className='flex r pt'>
                    <h3 className='chead' data-aos='fade-up'>
                        Contact US
                    </h3>
                </div>
                <div className='flex r'>
                    <h1 className='display2' data-aos='fade-up'>Give suggestions or just say hello</h1>
                </div>
                <div className='row contact-content' data-aos='fade-up'>
                    <div className='contact-primary'>
                        <h3 className='h6'>
                            Send Us A Message
                        </h3>
                        <form className='contactForm' onSubmit={onSubmit}>
                            <fieldset>
                                <div className='form-field'>
                                    <input type='text' name='from_name' placeholder='Name' value={toSend.from_name} onChange={handleChange} minLength="2" required="" aria-required="true" className="full-width"/>
                                </div>
                                <div className="form-field">
                            <input name="from_mail" type="email" id="contactEmail" placeholder="Your Email" value={toSend.from_mail} required="" aria-required="true" className="full-width" onChange={handleChange}/>
                        </div>
                        <div className="form-field">
                            <input name="subject" type="text" id="contactSubject" placeholder="Subject" value={toSend.subject} className="full-width" onChange={handleChange}/>
                        </div>
                        <div className="form-field msg">
                            <textarea type='text' name='message' placeholder='Your message' value={toSend.message} onChange={handleChange} rows="10" cols="50" required="" aria-required="true" className="full-width"></textarea>
                        </div>
                        <div className="form-field">
                            <button className="full-width btn--primary" type='submit'>Submit</button>
                            {/* <div class="submit-loader">
                                <div class="text-loader">Sending...</div>
                                <div class="s-loader">
                                    <div class="bounce1"></div>
                                    <div class="bounce2"></div>
                                    <div class="bounce3"></div>
                                </div>
                            </div> */}
                        </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className='contact-secondary'>
                    <div className='contact-info'>
                        <div className='contact-info'>
                            <h3 className="h6 hide-on-fullwidth">Contact Info</h3>
                            <div className="cinfo">
                            <h5>Where to Find Us</h5>
                                <p>
                                    Rotaract Club Room,<br/>
                                     BIT SINDRI Campus <br/>
                                    Dhanbad
                                </p>
                            </div>
                            <div className="cinfo">
                            <h5>Email Us At</h5>
                            <a href="mailto:rotosindri@gmail.com" target="_blank"><p>
                                rotosindri@gmail.com<br/>
                            </p></a>
                            </div>
                            <div className="cinfo">
                            <h5>Call Us At</h5>
                            <p>
                                Phone: (+91) 7250780812<br/>
                            </p>
                            </div>
                            <div className='flex r'>
                                <div className='icon'>
                                <FontAwesomeIcon icon="fa-brands fa-facebook-f" className="icon"/>
                                </div>
                                <div className='icon'>
                                <FontAwesomeIcon icon="fa-brands fa-instagram" className="icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs