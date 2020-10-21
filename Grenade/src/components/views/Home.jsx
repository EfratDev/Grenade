import React from "react";
// import PropTypes from "prop-types";

import { Background, Backgrounds } from "../Backgrounds/Background";

function Home() {
    return <Background type={Backgrounds.Shadow} />;
}

Home.propTypes = {};

export default Home;
