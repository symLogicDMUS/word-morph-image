import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import AppContext from "../../AppContext";
import { useTheme } from "@mui/material/styles";
import { Button, useMediaQuery } from "@mui/material";
import { ReactComponent as MorphIcon } from "./morph.svg";
import IconButton from "@mui/material/IconButton";
import {ReactComponent as CardsIcon} from "./cards.svg";

export function MorphButton() {
    const history = useHistory();

    const { state, dispatch } = useContext(AppContext);

    const theme = useTheme();

    const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const textColor = !state.text
        ? theme.palette.text.disabled
        : state.isDarkMode
        ? "#000"
        : "#fff";

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={() =>
                    history.push("/morphs", {
                        wordIndex: 0,
                    })
                }
                startIcon={<MorphIcon fill={textColor} />}
                disabled={!state.text}
                style={sm ? { display: "none" } : null}
            >
                Morph
            </Button>
            <IconButton
                size="large"
                color="primary"
                onClick={() =>
                    history.push("/morphs", {
                        wordIndex: 0,
                    })
                }
                disabled={!state.text}
                style={!sm ? { display: "none" } : null}
            >
                <MorphIcon
                    fill={
                        !state.text
                            ? theme.palette.action.disabled
                            : theme.palette.primary.main
                    }
                />
            </IconButton>
        </>
    );
}
