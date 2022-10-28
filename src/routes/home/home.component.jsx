import {useEffect} from "react";

import Hero from "../../components/hero/hero.component";

import "./home.style.scss";

import heroImage from "../../images/me-side.jpg";
import homeImage from "../../images/me-front.jpg";

const Home = ({title}) => {

    const tagline = "My name is";
    const taglineBig = "Moritz Preuß";
    const headline = "I'm a frontend developer";

    useEffect(() => {
        document.title = `${title} || モホリ—`
    }, [title]);

    return (
        <div className={"page"}>
            <Hero tagline={tagline} taglineBig={taglineBig} headline={headline} heroImage={heroImage}/>
            <div className="home">

                <div className="home-visual">
                    <div className="home-visual-container">
                        <img className="home-image" src={homeImage} alt=""/>
                    </div>
                </div>

                <div className="home-content">
                    <div className="home-content-container">
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
        </div>
    );
}

export default Home;