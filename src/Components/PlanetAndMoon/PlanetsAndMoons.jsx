import PlanetOrMoon from "./PlanetOrMoon";
import React, { useState } from "react";
import { planetsAndMoonsDict } from "./planetsAndMoonsDict";
import { useStyles } from "./PlanetsAndMoons.jss";
import { Box } from "@material-ui/core";

function PlanetsAndMoons() {
    const classes = useStyles();
    return (
        <Box className={classes.planetsAndMoons}>
            {Object.keys(planetsAndMoonsDict).map((planetOrMoon, index) => (
                <PlanetOrMoon
                    key={index}
                    name={planetOrMoon}
                    path={planetsAndMoonsDict[planetOrMoon]}
                />
            ))}
        </Box>
    );
}

export default PlanetsAndMoons;
