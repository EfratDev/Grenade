import React from "react";
import PropTypes from "prop-types";

import "./Board.css";
import GameHeader from "./GameHeader/GameHeader";
import Game from "./Game/Game";
import InfoButtons from "./InfoButtons/InfoButtons";

const Board = ({ user, game }) => {
    return (
        <div className="board card text-white mb-3">
            <div className="card-body">
                <GameHeader name={game.name} user={user} />
                <Game id={game.id} />
                <InfoButtons game={game} />
                <p>{game.description}</p>
            </div>
        </div>
    );
};

Board.propTypes = { game: PropTypes.object, user: PropTypes.object };

export default Board;
