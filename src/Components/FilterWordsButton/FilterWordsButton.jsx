import React from "react";
import { Tooltip, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { commonWords } from "../../words/commonWords";
import { useTheme } from "@material-ui/core/styles";
import { ReactComponent as WIcon } from "./W.svg";
import { useStyles } from "./FilterWordsButton.jss";

function FilterWordsButton({ filterWords }) {
    const classes = useStyles();

    const theme = useTheme();

    const iconColor = theme.palette.primary.main;

    const title =
        "filters articles, pronouns, conjunctions, prepositions, and other most common words.";

    return (
        <Tooltip title={title}>
            <Button
                variant={"outlined"}
                color={"primary"}
                className={classes.filterWordsButton}
                startIcon={<WIcon fill={iconColor} />}
                onClick={() => filterWords(commonWords)}
            >
                <Typography variant={"button"} noWrap>
                    Filter
                </Typography>
            </Button>
        </Tooltip>
    );
}

export default FilterWordsButton;
