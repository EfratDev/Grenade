import React from "react";
import PropTypes from "prop-types";
import Particles from "react-particles-js";

import BackgroundMask from "./themes/BackgroundMask";
import Default from "./themes/Default";
import Connect from "./themes/Connect";
import MultipleImages from "./themes/MultipleImages";
import Shadow from "./themes/Shadow";

const Backgrounds = {
    BackgroundMask: BackgroundMask,
    Default: Default,
    Connect: Connect,
    MultipleImages: MultipleImages,
    Shadow: Shadow,
};

const styles = {
    root: {
        height: "100%",
        background: "#222",
        justifyContent: "center",
        alignItems: "center",
    },
};

function Background({ type }) {
    return (
        <div style={styles.root}>
            <Particles params={type} />;
        </div>
    );
}
Background.propTypes = { backgroundType: PropTypes.string };

export { Background, Backgrounds };
