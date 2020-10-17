import React from "react";
// import PropTypes from "prop-types";

import Background from "../Backgrounds/Background"

const json = {backgroundType: "classicBright"}

function Home() {
    return <Background {...json}/>;
}

Home.propTypes = {};

export default Home;
