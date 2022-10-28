import Hero from "../../components/hero/hero.component";
import heroImage from "../../images/me-side.jpg";
import {useEffect} from "react";

const Experience = ({title}) => {
    const tagline = 'Hands on.';
    const taglineBig = 'Here is my';
    const headline = 'Working Experience';

    useEffect(() => {
        document.title = `${title} || モホリ—`
    }, [title]);

    return(
        <div className={"page"}>
            <Hero tagline={tagline} taglineBig={taglineBig} headline={headline} heroImage={heroImage}/>
        </div>
    );
}

export default Experience;