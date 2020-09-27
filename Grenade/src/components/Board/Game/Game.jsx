import React from "react";
import { string } from "prop-types";
import "./Game.css";

const Game = ({ id }) => {
    return (
        <iframe
            className="game-frame row justify-content-center"
            title={id}
            src={`/games/${id}`}
        ></iframe>
    );
};

Game.propTypes = {
    name: string,
};

export default Game;
