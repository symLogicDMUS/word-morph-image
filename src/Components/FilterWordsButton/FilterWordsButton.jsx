import React from "react";
import { Tooltip, Typography, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import { commonWords } from "../../words/commonWords";
import { useTheme } from "@mui/material/styles";
import { ReactComponent as WIcon } from "./W.svg";
import IconButton from "@mui/material/IconButton";

function FilterWordsButton({ filterWords }) {
    const theme = useTheme();

    const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const iconColor = theme.palette.primary.main;

    const title =
        "filters articles, pronouns, conjunctions, prepositions, and other most common words.";

    return (
        <>
            <Tooltip title={title}>
                <Button
                    color={"primary"}
                    variant={"outlined"}
                    startIcon={<WIcon fill={iconColor} />}
                    style={sm ? { display: "none" } : null}
                    onClick={() => filterWords(commonWords)}
                >
                    <Typography variant={"button"} noWrap>
                        Filter
                    </Typography>
                </Button>
            </Tooltip>
            <Tooltip title={title}>
                <IconButton
                    size={"large"}
                    color={"primary"}
                    style={!sm ? { display: "none" } : null}
                    onClick={() => filterWords(commonWords)}
                >
                    <WIcon fill={iconColor} />
                </IconButton>
            </Tooltip>
        </>
    );
}

export default FilterWordsButton;
