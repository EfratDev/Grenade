import React from "react";
import PropTypes from "prop-types";
import Particles from "react-particles-js";

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
