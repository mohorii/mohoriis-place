import {Fragment} from "react";
import {Outlet} from "react-router-dom";

import "./navigation.style.scss";

const Navigation = () => {
    return (
        <Fragment><Outlet/></Fragment>
    );
}

export default Navigation;