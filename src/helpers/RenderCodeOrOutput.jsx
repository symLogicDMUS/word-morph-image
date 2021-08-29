import { Box } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";

function RenderCodeOrOutput({
    replacer = null,
    space = 4,
    children,
    ...other
}) {
    return (
        <Typography {...other}>
            <pre>{JSON.stringify(children, replacer, space)}</pre>
        </Typography>
    );
}

export default RenderCodeOrOutput;
