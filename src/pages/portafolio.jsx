import React, {useRef} from "react";
import Lottie from "lottie-react";

import "../styles/configs.css"
import "../styles/main.css"
import "../styles/header.css"
import "../styles/footer.css"

import Logo from "../assets/logo.png"

import SH01 from "../assets/SHAPE01.png"
import SH02 from "../assets/SHAPE02.png"
import SH03 from "../assets/SHAPE03.png"
import SH04 from "../assets/SHAPE04.png"
import Me from "../assets/me.png"

import RocketImage from "../assets/rocket.png"
import Timeline from "../assets/timeline.png"

import Minimize from "../assets/minimize.png"
import Maximize from "../assets/maximize.png"
import Close from "../assets/close.png"

import GithubLogo from "../assets/github.png"
import WirinSpaVideo from "../assets/videos/WirinSpaWeb.mp4"
import PulgaTicketVideo from "../assets/videos/PulgaticketWeb.mp4"
import ChasquillAppVideo from "../assets/videos/ChasquillAppWeb.mp4"

import ProgrammerEmoji from "../assets/programmerEmoji.png"
import ClickItem from "../assets/click.png"
import TiktokImage from "../assets/tiktok.png"
import InstagramImage from "../assets/instagram.png"
import LinkedinImage from "../assets/linkedin.png"

import HandAnimation from "../assets/animations/hands.json"

import "../assets/fonts/Cascadia_Mono/CascadiaMonoPL-Regular.otf"
import "../assets/fonts/Cascadia_Mono/CascadiaMono-Light.otf"
import "../assets/fonts/Cascadia_Mono/CascadiaMono-Bold.otf"

import InfiniteCarousel from "../components/carrusel";
import FadeInOnScroll from "../components/fadeOnScroll";
import ContactForm from "../components/contactFormulary";
import ContactFooter from "../components/contactFooter";



export default function Portafolio() {

    const infoRef = useRef(null);
    const projectsRef = useRef(null);
    const socialRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (elementRef) => {
        elementRef.current.scrollIntoView({behavior: "smooth"});
    };

    return (
        <div className="container">

            <header>
                <div className="logoContainer">
                    <img className="logo" src={Logo} alt="" />
                </div>
                <div className="navBarContainer">
                    <nav>
                        <div className="buttonsContainer">
                            <button onClick={() => scrollToSection(infoRef)}>Info</button>
                            <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
                            <button onClick={() => scrollToSection(socialRef)}>Social</button>
                        </div>
                        <div className="contactButtonContainer">
                            <div className="contactButtonElement" onClick={() => scrollToSection(contactRef)}>
                                <div className="ellipse"></div>
                                <p className="contactText">Contact</p>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <main>
                <section className="myInfoContainer" ref={infoRef}>
                    <div className="personalInfoSection">

                        <div className="myNameContainer  ">
                            <h1>Marcelo <br /> Gaete</h1>
                        </div>
                        <div className="myDescriptionContainer ">
                            <h2 className="subtitleDescription ">computer engineer</h2>
                            <h2 className="myJobDescription ">FRONTEND <br /> DEVELOPER</h2>
                        </div>

                    </div> 


                    <div className="myImageContainer">    
                        <img className="ShapeGeneralConfig SH01" src={SH01} alt="" />
                        <img className="ShapeGeneralConfig SH02" src={SH02} alt="" />
                        <img className="ShapeGeneralConfig SH03" src={SH03} alt="" />
                        <img className="ShapeGeneralConfig SH04" src={SH04} alt="" />

                        
                        <div className="personalImageContainer">  
                            <img className="myImage" src={Me} alt="" />
                        </div>
                        
                            
                    </div>
                    <div></div>
                </section>

                <section className="personalInfoContainer">
                    <div className="dotColor"></div>

                <FadeInOnScroll>
                    <div className="infoSection01">
                        <h3 className="hiText">Hi!m I'm Marcelo! <b className="handShake">👋</b></h3>
                            <button className="githubButton">
                                <a href="https://github.com/Fur1uss" target="_blank" >
                                    <div>
                                        Github
                                    </div>
                                </a>
                            </button>
                    </div>

                    <div className="infoSection02">
                        <div className="consoleContainer">
                            <div className="consoleNav">
                                <div className="consoleBrowserTabsContainer">
                                    <div className="consoleTabItem">
                                        <p className="consoleTabText">C:\Users\MarceDev\portafolio.exe</p>
                                    </div>
                                </div>
                                <div className="consoleButtonsContainer">

                                    <div className="consoleButtonElement">
                                        <img src={Minimize} alt="" />
                                    </div>
                                    <div className="consoleButtonElement">
                                        <img src={Maximize} alt="" />
                                    </div>
                                    <div className="consoleButtonElement">
                                        <img src={Close} alt="" />
                                    </div>

                                </div>
                            </div>

                            <div className="consoleContent">
                                <div className="consoleTextContainer">
                                    <p className="consoleText">

                                        <b>C:\Users\MarceDev\description.exe</b>
                                        <br />
                                        I am a computer engineer passionate about software development, 
                                        with experience in React, Firebase, and modern technologies. 
                                        I love solving problems and working on innovative projects.
                                    </p>

                                    <p className="consoleText">

                                    <b>C:\Users\MarceDev\experience.exe</b>
                                        <br />
                                        I have worked on developing optimized web applications, 
                                        leading teams and seeking innovative solutions across various 
                                        technologies.
                                    </p>

                                </div>
                            </div>
                        
                        </div>
                    </div>
                    
                </FadeInOnScroll>
                </section>

                <section className="myJourneyContainer">
                
                    <div className="textJourneyContainer">
                        <div className="journeyTitle">
                            <h4 className="journeyTextTitle">My Journey 🌱</h4>
                        </div>
                        <div className="journeyDescriptionContainer">
                            <div className="journeyPath">
                                <img src={Timeline} alt="" />
                            </div>
                            <div className="journeyDescTextContainer">    
                                <div className="journeyHigherText">
                                    <h4>
                                    <b className="journeyDescTitleText">2021-Present:</b>
                                    <br />
                                    Studying Computer Engineering with a specialization in <br />
                                    Systems Development at Instituto Profesional AIEP, <br />
                                    Universidad Andrés Bello.
                                    </h4>
                                </div>
                                <div className="journeyLowerText">
                                    <h4>
                                    <b className="journeyDescTitleText">Future:</b>
                                    <br />
                                    On a mission to turn coffee and code <br />
                                    into groundbreaking solutions (or at least functional ones).
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="imgJourneyContainer">
                        <FadeInOnScroll>
                            <img src={RocketImage} alt="" />
                        </FadeInOnScroll>
                    </div>
                </section>

                <section className="mySkillsContainer">
                    
                    <div className="dotColor dotSkills"></div>

                    <h5 className="mySkillsTitle">My Superpowers⚡</h5>
                    
                    <div className="carouselContainer">
                        <InfiniteCarousel />
                    </div>

                </section>

                <section className="myProjectsContainer" ref={projectsRef}> 
                    <div className="dotColor dotProjects"></div>

                    <h2 className="myProjectsTitle">My Projects 📂</h2>
                    <p className="myProjectsDescription">
                        “I love turning creative ideas into reality. <br />
                        Every project is an opportunity to learn, experiment, and <br />
                        build something that makes a difference.”
                    </p>


                    <div className="projectsItemsContainer">

                        <div className="proyectContainer">
                            <FadeInOnScroll>
                            <div className="videoProyectContainer">
                                <div className="navegatorEmulationContainer">
                                    <div className="navBarEmulation">
                                        <div className="navbarTabContainer">
                                            <div className="navbarTabElement">
                                                <div className="navbarTab"></div>
                                            </div>
                                            <div className="navbarTabSeparator"></div>
                                        </div>
                                        <div className="navBarSearchContainer">
                                            <div className="navBarSearch"></div>
                                        </div>
                                    </div>
                                    <video className="videoProyect"src={PulgaTicketVideo} type="video/mp4" autoPlay loop muted playsInline></video>
                                </div>
                            </div>
                
                            <div className="infoProyectContainer">
                                <h3 className="infoProyectTitle">Pulgaticket 🪳</h3>
                                <p className="infoProyectDesc">
                                    Pulgaticket is an online platform dedicated
                                    to the safe and reliable resale of event tickets.
                                    The platform ensures a seamless transaction 
                                    experience between buyers and sellers, making it 
                                    easier for people to buy and sell tickets securely.
                                    It combines my interest in user experience with 
                                    practical problem-solving for the ticketing 
                                    industry.
                                </p>
                                <button className="infoProyectButton">
                                    <a href="https://github.com/Fur1uss/Pulgaticket" target="_blank">
                                        <div className="imageButtonContainer">
                                            <img src={GithubLogo} alt="" />
                                        </div>
                                        <div className="textButtonContainer">
                                            <p>repository</p>
                                        </div>
                                    </a>
                                </button>
                            </div>
                            </FadeInOnScroll>
                        </div>

                        <div className="proyectContainer">
                            <FadeInOnScroll>
                            <div className="infoProyectContainer">
                                    <h3 className="infoProyectTitle">WirinSpa 🔨</h3>
                                    <p className="infoProyectDesc">
                                    Wirin Spa is a landing page for a construction company, 
                                    designed to showcase the company's services, portfolio, and 
                                    expertise in the field. The site provides potential clients 
                                    with an easy way to learn about the company's projects, request 
                                    quotes, and get in touch with the team. 
                                    This project demonstrates my ability to create visually appealing 
                                    and functional websites that highlight a business's strengths 
                                    while ensuring a user-friendly experience.
                                    </p>
                                    <button className="infoProyectButton">
                                        <a href="https://github.com/Fur1uss/Wirin-Spa" target="_blank">
                                            <div className="imageButtonContainer">
                                                <img src={GithubLogo} alt="" />
                                            </div>
                                            <div className="textButtonContainer">
                                                <p>repository</p>
                                            </div>
                                        </a>
                                    </button>
                            </div>

                            <div className="videoProyectContainer">
                                    <div className="navegatorEmulationContainer">
                                        <div className="navBarEmulation">
                                            <div className="navbarTabContainer">
                                                <div className="navbarTabElement">
                                                    <div className="navbarTab"></div>
                                                </div>
                                                <div className="navbarTabSeparator"></div>
                                            </div>
                                            <div className="navBarSearchContainer">
                                                <div className="navBarSearch"></div>
                                            </div>
                                        </div>
                                        <video className="videoProyect"src={WirinSpaVideo} type="video/mp4" autoPlay loop muted playsInline></video>
                                    </div>
                            </div>
                            </FadeInOnScroll>
                        </div>

                        <div className="proyectContainer">
                            <FadeInOnScroll>
                            <div className="videoProyectContainer videoProyectContainerPhone">
                                <div className="navegatorEmulationContainer navegatorEmulationContainerPhone">
                                    <video className="videoProyect videoProyectPhone"src={ChasquillAppVideo} type="video/mp4" autoPlay loop muted playsInline></video>
                                </div>
                            </div>
                            <div className="infoProyectContainer">
                                    <h3 className="infoProyectTitle">ChasquillApp 👷‍♂️</h3>
                                    <p className="infoProyectDesc">
                                        Chasquillapp is a mobile application aimed at solving inefficiencies 
                                        in the construction and engineering sectors. The app connects 
                                        users with skilled professionals and craftsmen, enabling easy access 
                                        to reliable services, ratings, and reviews. This project showcases my 
                                        passion for improving real-world problems with innovative tech solutions.
                                    </p>
                                    <button className="infoProyectButton">
                                        <a href="https://github.com/Fur1uss/ChasquillApp" target="_blank">
                                            <div className="imageButtonContainer">
                                                <img src={GithubLogo} alt="" />
                                            </div>
                                            <div className="textButtonContainer">
                                                <p>repository</p>
                                            </div>
                                        </a>
                                    </button>
                            </div>
                            </FadeInOnScroll>
                        </div>


                    </div>


                    

                </section>

                <section className="mySocialMediaContainer" ref={socialRef}>

                    <div className="dotColor dotSocial"></div>
                    <h2 className="socialMediaTitle">My Social Media 🌐 </h2>

                    <div className="socialContainer">
                        <div className="SocialMediaItemsContainer">
                            
                            <div className="socialMediaItem">
                                <FadeInOnScroll>
                                <img className="clickIcon" src={ClickItem} alt="" />
                                <div className="SocialMediaImageItem">
                                    
                                    <a href="https://www.tiktok.com/@gdevelopment0?lang=es" target="_blank">
                                        <img src={TiktokImage} alt=""/>
                                    </a>
                                    </div>
                                <div className="SocialMediaDescriptionItem">
                                    <h2 className="SocialMediaTitleName">Tiktok</h2>
                                    <p className="SocialmediaDescriptionText">
                                        On TikTok, I share my journey as a developer, 
                                        showcasing my mockups, coding process, and web/mobile development. 
                                        It's a behind-the-scenes look at how I bring ideas to life through code, 
                                        offering bite-sized tutorials and insights into my workflow.
                                    </p>
                                </div>
                                </FadeInOnScroll>
                            </div>

                            <div className="socialMediaItem">
                                <FadeInOnScroll>
                                <img className="clickIcon" src={ClickItem} alt="" />
                                <div className="SocialMediaImageItem"><a href="https://www.instagram.com/gdevelopment.web/?hl=es" target="_blank"><img src={InstagramImage} alt=""/></a></div>
                                <div className="SocialMediaDescriptionItem">
                                    <h2 className="SocialMediaTitleName">Instagram</h2>
                                    <p className="SocialmediaDescriptionText">
                                        On Instagram, I share personal moments, passions, and snapshots of my life. 
                                        It's a more casual and authentic view of my everyday journey, 
                                        connecting with others through shared experiences.
                                    </p>
                                </div>
                                </FadeInOnScroll>
                            </div>

                            <div className="socialMediaItem">
                                <FadeInOnScroll>
                                <img className="clickIcon" src={ClickItem} alt="" />
                                <div className="SocialMediaImageItem"><a href="https://www.linkedin.com/in/marcelogaetealv/" target="_blank"><img src={LinkedinImage} alt=""/></a></div>
                                <div className="SocialMediaDescriptionItem">
                                    <h2 className="SocialMediaTitleName">Linkedin</h2>
                                    <p className="SocialmediaDescriptionText">
                                        LinkedIn is where you'll find my professional profile, 
                                        highlighting my skills, experiences, and achievements in 
                                        the tech industry. I connect with peers, share industry insights, 
                                        and build my network of like-minded professionals.
                                    </p>
                                </div>
                                </FadeInOnScroll>
                            </div>
                        </div>

                        <div className="socialMediaImageContainer">
                            <img src={ProgrammerEmoji} alt="" />
                        </div>

                    </div>

                </section>

                <section className="contactContainer" ref={contactRef}>
                    <div className="dotColor dotContact"></div>
                    <h2 className="contactTitleText">Get in Touch - Let's Make It Happen</h2>
                    <div className="contactItemsContainer">
                        <div className="contactDescriptionContainer">
                            <div className="emojiContactContainer">
                                <Lottie className="emojiItem" animationData={HandAnimation} loop = {true} />
                            </div>
                            <p className="contactDescription">
                            If you're looking for a developer to bring your project <br />
                            to life or collaborate on exciting new ideas, let's connect! <br />
                            I'm always open to new challenges and partnerships. <br />
                            Reach out, and let's make something great together!
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                    <h3 className="phraseText">✨ <b className="phraseMainText">“Simplicity is the ultimate sophistication.”</b> - Leonardo da Vinci</h3>
                </section>

            </main>


            <footer>
                <div className="buttonsFooterContainer">
                    <div className="logoFooterContainer">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="buttonsItemsContainer">
                        <div className="columnItemsContainer firstcolumn">
                            <h3>Navegation</h3>
                            <ul>
                                <li><a onClick={() => scrollToSection(infoRef)}>Info</a></li>
                                <li><a onClick={() => scrollToSection(projectsRef)}>Projects</a></li>
                                <li><a onClick={() => scrollToSection(socialRef)}>Social Media</a></li>
                                <li><a onClick={() => scrollToSection(contactRef)}>Contact</a></li>
                            </ul>
                        </div>

                        <div className="columnItemsContainer">
                            <h3>Projects</h3>
                            <ul>
                                <li><a href="https://github.com/Fur1uss/Pulgaticket">PulgaTicket</a></li>
                                <li><a href="https://constructorawirin.cl/">Wirin Spa</a></li>
                                <li><a href="https://github.com/Fur1uss/ChasquillApp">ChasquillApp</a></li>
                            </ul>
                        </div>

                        <div className="columnItemsContainer">
                            <h3>Social</h3>
                            <ul>
                                <li><a href="https://www.tiktok.com/@gdevelopment0?lang=es">TikTok</a></li>
                                <li><a href="https://www.instagram.com/gdevelopment.web/?hl=es">Instagram</a></li>
                                <li><a href="https://www.linkedin.com/in/marcelogaetealv/">Likedin</a></li>
                                <li><a href="https://github.com/Fur1uss">Github</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <ContactFooter />
                
            </footer>

        </div>
    );

}

