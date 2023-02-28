import React, { useState } from "react";
import { Grid } from "./app/components/Grid";

export const GameContext = React.createContext(null);

function App() {
    const [player, setPlayer] = useState("X");
    const [playerWon, setPlayerWon] = useState(null);
    const [winningIds, setWinningIds] = useState([-1, -1, -1]);
    const [boardState, setBoardState] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    const resetGame = () => {
        setPlayer("X");
        setPlayerWon(null);
        setBoardState(["", "", "", "", "", "", "", "", ""]);
        setWinningIds([-1, -1, -1]);

        // Re-enable being able to click on the divs
        Array.from(Array(9).keys()).map(
            (index) =>
                (document.getElementById("box" + index).style.pointerEvents =
                    "auto")
        );
    };

    const winningPlayer = playerWon === "X" ? "1" : "2";

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100vh",
                backgroundColor: "black",
            }}
        >
            <GameContext.Provider
                value={{
                    player: player,
                    setPlayer: setPlayer,
                    boardState: boardState,
                    setBoardState: setBoardState,
                    playerWon: playerWon,
                    setPlayerWon: setPlayerWon,
                    winningIds: winningIds,
                    setWinningIds: setWinningIds,
                }}
            >
                <h1 style={{ textAlign: "center" }}>Tic-Tac-Toe</h1>
                <div className="game" style={{ backgroundColor: "black" }}>
                    {playerWon !== null && (
                        <div
                            className="game overlay"
                            style={{
                                backgroundColor: "black",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                zIndex: 100,
                                opacity: 0.75,
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    height: "100%",
                                }}
                                onClick={() => resetGame()}
                            >
                                <h1 className="winText">
                                    {playerWon === "DRAW"
                                        ? "DRAW!"
                                        : `Player ${winningPlayer} (${playerWon}) won!`}
                                </h1>
                            </div>
                        </div>
                    )}
                    <Grid />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <button
                        type="button"
                        class="btn btn-dark"
                        onClick={() => resetGame()}
                        style={{ marginRight: "15px" }}
                    >
                        Reset Game
                    </button>
                    <button
                        type="button"
                        class="btn btn-dark"
                        onClick={() => alert("work in progress")}
                    >
                        Play against AI
                    </button>
                </div>
            </GameContext.Provider>
        </div>
    );
}

export default App;
