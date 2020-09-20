import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

import Plays from "";
import PropTypes from "prop-types";
import "./GameInfo.css";

const GameInfo = ({ name, plays, rating, published, description, like }) => {
    return (
        <div class="game-info-card card text-white bg-dark mb-3">
            <div class="card-header">Game Info</div>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">
                    <Plays plays={plays} />
                    <FontAwesomeIcon icon={faGamepad} />
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
            </div>
        </div>
    );
};

GameInfo.propTypes = { name: PropTypes.string };

export default GameInfo;
