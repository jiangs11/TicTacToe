import React, { useContext } from "react";
import { borderStyles } from "../styles/borders";
import { GameContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Box = ({ number }) => {
    const {
        player,
        setPlayer,
        boardState,
        setBoardState,
        playerWon,
        setPlayerWon,
        winningIds,
        setWinningIds,
    } = useContext(GameContext);

    const onClickFunction = () => {
        if (playerWon !== null) {
            return;
        }

        var currBoardState = boardState;
        currBoardState[number] = player;
        setBoardState(currBoardState);

        if (checkForWinner()) {
            return;
        }

        player === "X" ? setPlayer("O") : setPlayer("X");
        document.getElementById("box" + number).style.pointerEvents = "none";
    };

    function checkForWinner() {
        // Win Conditions
        if (
            boardState[0] === boardState[1] &&
            boardState[1] === boardState[2] &&
            boardState[2] !== ""
        ) {
            setWinningIds([0, 1, 2]);
            setPlayerWon(player);
            return true;
        } else if (
            boardState[3] === boardState[4] &&
            boardState[4] === boardState[5] &&
            boardState[5] !== ""
        ) {
            setWinningIds([3, 4, 5]);
            setPlayerWon(player);
            return true;
        } else if (
            boardState[6] === boardState[7] &&
            boardState[7] === boardState[8] &&
            boardState[8] !== ""
        ) {
            setWinningIds([6, 7, 8]);
            setPlayerWon(player);
            return true;
        } else if (
            boardState[0] === boardState[3] &&
            boardState[3] === boardState[6] &&
            boardState[6] !== ""
        ) {
            setWinningIds([0, 3, 6]);
            setPlayerWon(player);
            return true;
        } else if (
            boardState[1] === boardState[4] &&
            boardState[4] === boardState[7] &&
            boardState[7] !== ""
        ) {
            setWinningIds([1, 4, 7]);
            setPlayerWon(player);
            return true;
        } else if (
            boardState[2] === boardState[5] &&
            boardState[5] === boardState[8] &&
            boardState[8] !== ""
        ) {
            setWinningIds([2, 5, 8]);
            setPlayerWon(player);
            return true;
        } else if (
            boardState[0] === boardState[4] &&
            boardState[4] === boardState[8] &&
            boardState[8] !== ""
        ) {
            setWinningIds([0, 4, 8]);
            setPlayerWon(player);
            return true;
        } else if (
            boardState[2] === boardState[4] &&
            boardState[4] === boardState[6] &&
            boardState[6] !== ""
        ) {
            setWinningIds([2, 4, 6]);
            setPlayerWon(player);
            return true;
        } else if (
            boardState.filter((x) => x !== "").length === boardState.length
        ) {
            setPlayerWon("DRAW");
            return true;
        }

        return false;
    }

    return (
        <div
            className={`box${number}`}
            id={`box${number}`}
            onClick={() => onClickFunction()}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "white",
                cursor: "pointer",
                ...borderStyles[number],
            }}
        >
            {boardState[number] === "O" ? (
                <FontAwesomeIcon
                    className="faicons"
                    icon={faCircle}
                    size="xl"
                    beatFade={winningIds.some((item) => number === item)}
                />
            ) : boardState[number] === "X" ? (
                <FontAwesomeIcon
                    className="faicons"
                    icon={faX}
                    size="xl"
                    beatFade={winningIds.some((item) => number === item)}
                />
            ) : (
                // Placeholder icon to prevent the divs dimensions from getting messed up
                <FontAwesomeIcon
                    className="faicons"
                    icon={faGithub}
                    size="xl"
                    style={{ opacity: 0 }}
                />
            )}
        </div>
    );
};
