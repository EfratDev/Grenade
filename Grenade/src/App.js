import React from "react";
import MainNavBar from "./components/MainNavBar/MainNavBar";
import "./App.css";

const App = () => {
    let user = {
        id: 2,
        username: "Ravel the Third",
        link: "https://github.com/FlowerPower2/Snake",
        gamesID: [],
    };
    // let creator = {
    //     id: 1,
    //     username: "FlowerPower2",
    //     link: "https://github.com/FlowerPower2/Snake",
    //     gamesID: [1],
    // };
    // let game = {
    //     id: 1,
    //     userId: 1,
    //     name: "Snake",
    //     plays: 243,
    //     rating: 9.5,
    //     publishDate: new Date().toLocaleDateString(),
    //     likes: 700,
    //     description: "Eat the apples, don't hit the walls!",
    // };
    return (
        <div id="container">
            <div className="row justify-content-center">
                <MainNavBar user={user} />
                {/* <Board user={creator} game={game} /> */}
            </div>
        </div>
    );
};

export default App;
