import React from "react";
// import PropTypes from "prop-types";
import GameFrame from "../GameFrame/GameFrame";

function Section({ games, section }) {
    console.log(section);
    return (
        <section id={`section${section}`}>
            <a
                href={`#section${section - 1}`}
                className="carousel-a arrow__btn"
            >
                ‹
            </a>
            {games.map((game, i) => {
                return <GameFrame key={i} game={game} />;
            })}
            <a
                href={`#section${section + 1}`}
                className="carousel-a arrow__btn"
            >
                ›
            </a>
        </section>
    );
}

Section.propTypes = {};

export default Section;
