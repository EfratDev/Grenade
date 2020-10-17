import React from 'react'
import PropTypes from 'prop-types'

import Particles from "react-tsparticles";

import BackgroundMask from "./schemes/BackgroundMask"
import Default from "./schemes/Default"
import Connect from "./schemes/Connect"
import MultipleImages from "./schemes/MultipleImages"
import Shadow from "./schemes/Shadow"

function Background({backgroundType}) {
  return (
      <Particles params={Connect}></Particles>
    )
}

Background.propTypes = {backgroundType: PropTypes.string}

export default Background
