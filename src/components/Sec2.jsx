import AOS from 'aos';
import 'aos/dist/aos.css';
import "./about.css"
import { useEffect } from 'react';
import "./sec.css"
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
fontawesome.library.add( fas );



const Secjoin =()=>{
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
      }, [])
    return (
        <section>
        <div className="joinus" id='secJoin'>
            <div className="flex">
                <div className="flex r subhead sh2" data-aos='fade-up'>
                    WHY TO JOIN US
                </div>
                <div className="flex r" data-aos='fade-up'>
                    <p className="light shb">There are plenty of reasons to join us</p>
                    {/* <hr className="Hr"></hr> */}
                </div>
                <div className="flex r">
                <hr className="Hr"></hr>
                </div>
                <div className="flex r pad__join" data-aos='fade-up'>
                    <div className="flex r pd-20">
                        <FontAwesomeIcon icon= "fa-solid fa-paint-roller" className="icons" />
                        <div className="card__sw">
                            <h1 className="sbhc">The Opportunity to Serve</h1>
                            <p className="card__data">Rotaract is a social service club. Its business is mankind. Its product is service. This is perhaps the best reason for becoming a Rotaractor: the chance to do something for the people.</p>
                        </div>
                    </div>
                    <div className="flex r pd-20">
                        <FontAwesomeIcon icon="fa-solid fa-earth-asia" className="icons" />
                        <div className="card__sw">
                            <h1 className="sbhc">It’s International</h1>
                            <p className="card__data">When you join Rotaract, you’re not just joining a local volunteer group, but an international community. There are 9522 Rotaract clubs and 291,006 members in 187 countries around the world .</p>
                        </div>
                    </div>
                    <div className="flex r pd-20">
                        <FontAwesomeIcon icon="fa-solid fa-clipboard" className="icons" />
                        <div className="card__sw">
                            <h1 className="sbhc">It looks great on your resume</h1>
                           <p className="card__data">Rotaract is afiliated with Rotary – one of the world’s top service clubs – and having it on your resume sets you apart. With 1.2 million Rotarians around the world, chances are that person interviewing you is one of them.</p>
                        </div>
                    </div>
                    <div className="flex r pd-20">
                        <FontAwesomeIcon icon="fa-solid fa-bullhorn" className="icons" />
                        <div className="card__sw">
                            <h1 className="sbhc">Leadership Development</h1>
                           <p className="card__data">Rotary is an organisation of leaders and successful people. Serving in Rotary positions is like a college education. Leadership is all about learning how to motivate, infuence and lead leaders.</p>
                        </div>
                    </div>
                    <div className="flex r pd-20">
                        <FontAwesomeIcon icon="fa-solid fa-microphone-lines" className="icons" />
                        <div className="card__sw">
                            <h1 className="sbhc">Public Speaking Skills</h1>
                           <p className="card__data">Many individuals who joined Rotaract were uncomfortable about speaking in public. Rotaract develops confidence and skill in public communication and the opportunity to practice and perfect these skills.</p>
                        </div>
                    </div>
                    <div className="flex r pd-20">
                        <FontAwesomeIcon icon="fa-solid fa-briefcase" className="icons" />
                        <div className="card__sw">
                            <h1 className="sbhc">Prestige</h1>
                           <p className="card__data">Rotaract members are prominent people: leaders of quality, the professions, art, sports, and all disciplines. Rotary is the oldest and most prestigious service club in the world..</p>
                        </div>
                    </div>
                    <div className="flex r pd-20">
                        <FontAwesomeIcon icon="fa-solid fa-user-group" className="icons" />
                        <div className="card__sw">
                            <h1 className="sbhc">Friendship Fellowship</h1>
                           <p className="card__data">Rotaract provides one of the most basic platform: the need of friendship and fellowship. It is one of the two reasons why Rotary began in 1905.</p>
                        </div>
                    </div>
                    <div className="flex r pd-20">
                        <FontAwesomeIcon icon="fa-solid fa-music" className="icons" />
                        <div className="card__sw">
                            <h1 className="sbhc">Entertainment</h1>
                           <p className="card__data">Rotaract holds conferences, conventions, assemblies, and institutes that provide entertainment in addition to information, education, and service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Secjoin