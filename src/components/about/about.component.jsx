import "./about.style.scss";
import aboutImage from "../../images/me-front.jpg";

const About = () => {
    return (
        <div className="about">

            <div className="about-visual">
                <div className="about-visual-container">
                    <img className="about-image" src={aboutImage} alt=""/>
                </div>
            </div>

            <div className="about-content">
                <div className="about-content-container">
                    <hgroup className="about-headlines">
                        <p className="about-tagline">was ist das hier</p>
                        <h2 className="about-headline">Hallo</h2>
                    </hgroup>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
}

export default About;

