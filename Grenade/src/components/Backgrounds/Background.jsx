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

const Backgrounds = {
    BackgroundMask: BackgroundMask,
    Default: Default,
    Connect: Connect,
    MultipleImages: MultipleImages,
    Shadow: Shadow,
};

function Background({ type }) {
    return <Particles params={type}></Particles>;
}

Background.propTypes = { backgroundType: PropTypes.string };

export { Background, Backgrounds };
