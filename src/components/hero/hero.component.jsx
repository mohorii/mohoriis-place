
import "./hero.styles.scss"

const Hero = ({heroImage, tagline, taglineBig, headline}) => {
    return (
    <div className="hero">
        <div className="hero-brand">
            <a href="/" className="hero-brand-link">モホリ—。</a>
        </div>
        <div className="hero-image-holder">
            <img className="hero-image" src={heroImage} alt=""/>
        </div>
        <hgroup className="hero-headlines">
            <p className="hero-tagline">{tagline}
                <span className="is--big">{taglineBig}</span></p>
            <h1 className="hero-headline">{headline}</h1>
        </hgroup>
        <div className="hero-dots"></div>
    </div>
    )
}

export default Hero;