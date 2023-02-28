import React from "react";
import { Box } from "./Box";

export const Grid = () => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                height: "100%",
                width: "100%",
            }}
        >
            <Box number={0} />
            <Box number={1} />
            <Box number={2} />
            <Box number={3} />
            <Box number={4} />
            <Box number={5} />
            <Box number={6} />
            <Box number={7} />
            <Box number={8} />
        </div>
    );
};
