import React from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import Abarrow from '/assets/images/intro/ab-arrow.png';

const AboutNew = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }



    return (
        <section className="about-section-s3 section-padding">
            <div className="container">
                <div className="wraper">
                    <div className="top-content">
                        <div className="left" data-aos="fade-up" data-aos-delay="200">
                            <div className="left-content">
                                <i className="fa-solid fa-arrow-right"></i>
                                <p>IT Services to make you stand out, drive value, and build brand trust.</p>
                                <h3>2+ <span>Years of Industry Experience</span></h3>
                            </div>
                            <img src={Abarrow} alt="" />
                        </div>
                        <div className="right mb-3" data-aos="fade-right" data-aos-delay="200">
                            <h2>Transform Your <span>Online Business Game</span> with Reliable IT Services</h2>
                        </div>
                    </div>
                    <div className="bottom-content" data-aos="fade-up" data-aos-delay="200">
                        <p>At NovaNexom, we build future-ready websites, applications, and e-commerce platforms that move as fast as your ambition. We keep your brand visible, responsive, and competitive across every digital touchpoint. Our expert IT outsourcing, product design, and data services build digital systems that efficiently convey your brand ideas, captivate your audience, and fuel growth momentum.</p>
                        <Link href="/contact" className="theme-btn">
                            Contact Us
                            <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div className="funfact-wrap" data-aos="fade-up" data-aos-delay="200">
                        <div className="item">
                            <h2><span><CountUp end={100} enableScrollSpy /></span><span className="icon">+</span></h2>
                            <p>IT Professionals & Developers</p>
                        </div>
                        <div className="item">
                            <h2><span>24/7 </span><span className="icon">Support</span></h2>
                            <p>For Critical Systems & Operations</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutNew;