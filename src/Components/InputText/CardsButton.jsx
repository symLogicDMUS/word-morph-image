import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import AppContext from "../../AppContext";
import { useTheme } from "@mui/material/styles";
import { Button, Tooltip, useMediaQuery } from "@mui/material";
import { ReactComponent as CardsIcon } from "./cards.svg";
import IconButton from "@mui/material/IconButton";

export function CardsButton() {
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
                color={"primary"}
                onClick={() =>
                    history.push("/cards", {
                        wordIndex: 0,
                    })
                }
                startIcon={<CardsIcon fill={textColor} />}
                disabled={!state.text}
                style={sm ? { display: "none" } : null}
            >
                Cards
            </Button>
            <Tooltip
                title={"cards animation"}
                style={!sm ? { display: "none" } : null}
            >
                <IconButton
                    size="large"
                    color="primary"
                    onClick={() =>
                        history.push("/cards", {
                            wordIndex: 0,
                        })
                    }
                    disabled={!state.text}
                >
                    <CardsIcon
                        fill={
                            !state.text
                                ? theme.palette.action.disabled
                                : theme.palette.primary.main
                        }
                    />
                </IconButton>
            </Tooltip>
        </>
    );
}
