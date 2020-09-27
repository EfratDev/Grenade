import React from "react";

import Board from "./components/Board/Board";
import "./App.css";

const App = () => {
    return (
        <div id="container">
            <div className="row justify-content-center">
                <Board
                    user={{
                        id: 1,
                        username: "FlowerPower2",
                        link: "https://github.com/FlowerPower2/Snake",
                        gamesID: [1],
                    }}
                    game={{
                        id: 1,
                        userId: 1,
                        name: "Snake",
                        plays: 243,
                        rating: 9.5,
                        publishDate: new Date().toLocaleDateString(),
                        likes: 700,
                        description: "Eat the apples, don't hit the walls!",
                    }}
                />
            </div>
        </div>
    );
};

export default App;
