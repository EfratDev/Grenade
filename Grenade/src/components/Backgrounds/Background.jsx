import React from "react";
import PropTypes from "prop-types";

import Particles from "react-tsparticles";

// eslint-disable-next-line
import BackgroundMask from "./themes/BackgroundMask";
// eslint-disable-next-line
import Default from "./themes/Default";
// eslint-disable-next-line
import Connect from "./themes/Connect";
// eslint-disable-next-line
import MultipleImages from "./themes/MultipleImages";
// eslint-disable-next-line
import Shadow from "./themes/Shadow";

function Background({ backgroundType }) {
    return <Particles params={BackgroundMask}></Particles>;
}

Background.propTypes = { backgroundType: PropTypes.string };

export default Background;
