import React, { Fragment } from "react";

import Game from "./components/Game/Game";
import GameInfo from "./components/GameInfo/GameInfo";
import "./App.css";

const App = () => {
    return (
        <Fragment>
            <Game name="snake" />
            <GameInfo
                name="snake"
                plays={243}
                rating={9.5}
                published={new Date()}
                description="snake game, eat the apples, don't hit the wall!"
                like={700}
            />
        </Fragment>
    );
};

export default App;
