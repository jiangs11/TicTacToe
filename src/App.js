import React, { useState, useEffect } from "react";
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
    const [isWebBrowser, setIsWebBrowser] = useState(false);

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

    useEffect(() => {
        if (typeof window.orientation !== "undefined") {
            setIsWebBrowser(true);
        }
    }, []);

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
                <h1
                    className="title"
                    style={{
                        textAlign: "center",
                        marginTop: isWebBrowser ? -80 : 0,
                    }}
                >
                    Tic-Tac-Toe
                </h1>
                <div className="game"></div>
                {playerWon !== null && (
                    <div
                        className="game"
                        style={{
                            backgroundColor: "black",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 10,
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
                <div
                    className="game"
                    style={{
                        backgroundColor: "black",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Grid />
                </div>
                <div
                    className="footer"
                    style={{
                        marginTop: "25px",
                    }}
                >
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => resetGame()}
                        style={{ marginRight: "15px" }}
                    >
                        Reset Game
                    </button>
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => alert("Coming Soon!")}
                    >
                        Play against AI
                    </button>
                </div>
            </GameContext.Provider>
        </div>
    );
}

export default App;
