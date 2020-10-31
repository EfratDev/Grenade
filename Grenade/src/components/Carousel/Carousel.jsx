import React from "react";
import Section from "./Section/Section";

import "./Carousel.css";

function Carousel({ title, games }) {
    let gamesInSection = 4;
    return (
        <div className="carousel">
            <h1>{title}</h1>
            <div className="wrapper">
                {games.map((game, i) => {
                    if (i % gamesInSection === 0) {
                        return (
                            <Section
                                key={i}
                                games={games.slice(i, i + gamesInSection)}
                                section={i / gamesInSection}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}

Carousel.propTypes = {};

export default Carousel;
