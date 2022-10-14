import {Fragment, useEffect} from "react";
import {NavLink} from "react-router-dom";

import "./home.style.scss";
import heroImage from "../../images/me-side.jpg";

import About from "../../components/about/about.component"

const Home = ({title}) => {

    useEffect(() => {
        document.title = `${title} || モホリ—`
    }, [title]);

    return (
        <Fragment>
            <nav className="header">
                <NavLink className="header-nav-link" data-is__active to={'/test'}>Home</NavLink>
                <NavLink className="header-nav-link" to={'/test'}>About</NavLink>
                <NavLink className="header-nav-link" to={'/test'}>Skills</NavLink>
                <NavLink className="header-nav-link" to={'/test'}>Works</NavLink>
                <NavLink className="header-nav-link" to={'/test'}>Contact</NavLink>
            </nav>
            <div className="hero">
                <div className="hero-brand">
                    <a href="/" className="hero-brand-link">モホリ—</a>
                </div>
                <div className="hero-image-holder">
                    <img className="hero-image" src={heroImage} alt=""/>
                </div>
                <hgroup className="hero-headlines">
                    <p className="hero-tagline">My name is
                        <span className="is--big">Moritz Preuß</span></p>
                    <h1 className="hero-headline">I'm a frontend developer</h1>
                </hgroup>
                <div className="hero-dots"></div>
            </div>
            <About />
        </Fragment>
    );
}

export default Home;