import {Fragment} from "react";
import {NavLink, Outlet} from "react-router-dom";

import "./navigation.style.scss";

const Navigation = () => {

    const navLinkActiveClass = "nav-link active";
    const navLinkClass = "nav-link";

    const NAV_TOGGLE = () => {
        const NAV = document.querySelector(".nav");
        NAV.hasAttribute('data-hidden')
            ? NAV.removeAttribute('data-hidden')
            : NAV.setAttribute('data-hidden', 'true');
    };

    const NAV_CLOSE = () => {
        const NAV = document.querySelector(".nav");
        NAV.setAttribute('data-hidden', 'true');
    }

    return (
        <Fragment>
            <nav className="nav" data-hidden={"true"}>
                <button className="nav-toggle" onClick={NAV_TOGGLE}>三</button>

                <NavLink className={({isActive}) =>
                    isActive ? navLinkActiveClass : navLinkClass
                } to={"/"} onClick={NAV_CLOSE} end>Home</NavLink>

                <NavLink className={({isActive}) =>
                    isActive ? navLinkActiveClass : navLinkClass
                } to={"/experience"} onClick={NAV_CLOSE}>Experience</NavLink>

            </nav>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;