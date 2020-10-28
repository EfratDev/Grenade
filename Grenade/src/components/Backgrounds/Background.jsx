import React from "react";
import PropTypes from "prop-types";
import Particles from "react-particles-js";

import BackgroundMask from "./themes/BackgroundMask";
import Default from "./themes/Default";
import Connect from "./themes/Connect";
import MultipleImages from "./themes/MultipleImages";
import Shadow from "./themes/Shadow";
import "./Background.css";

const Backgrounds = {
    BackgroundMask: BackgroundMask,
    Default: Default,
    Connect: Connect,
    MultipleImages: MultipleImages,
    Shadow: Shadow,
};

function Background({ type }) {
    return (
        <span className="particlesContainer">
            <Particles params={type}></Particles>
        </span>
    );
}
Background.propTypes = { backgroundType: PropTypes.string };

export { Background, Backgrounds };
