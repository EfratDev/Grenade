import React from "react";
import PropTypes from "prop-types";
import BoardTop from "./BoardTop/BoardTop";
import InfoButtons from "./InfoButtons/InfoButtons";

import "./Board.css";

const Board = ({ user, game }) => {
    return (
        <div className="board card text-white text-center mt-5 mb-5">
            <div className="card-body">
                <BoardTop game={game} user={user}></BoardTop>
                <InfoButtons game={game} />
                <p>{game.description}</p>
            </div>
        </div>
    );
};

Board.propTypes = { game: PropTypes.object, user: PropTypes.object };

export default Board;
