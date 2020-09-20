import React from "react";
import PropTypes from "prop-types";
import "./Game.css";

const Game = ({ name }) => {
    return (
        <iframe class="game-frame" title={name} src={`/games/${name}`}></iframe>
    );
};

Game.propTypes = {
    name: PropTypes.string,
};

export default Game;
