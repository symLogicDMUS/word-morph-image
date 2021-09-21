import clsx from "clsx";
import "firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import AppContext from "../../AppContext";
import { useHistory } from "react-router-dom";
import { vh, vw } from "../../helpers/windowMeasurements";
import { ReactComponent as MorphIcon } from "./morph.svg";
import { ReactComponent as CardsIcon } from "./cards.svg";
import SnackbarAlert from "../SnackbarAlert/SnackbarAlert";
import ResponsiveDrawer from "../ResponsiveDrawer/ResponsiveDrawer";
import {
    appBarHeightLg,
    appBarHeightMd,
    appBarHeightSm,
} from "../MyAppBar/appBarAndPadding.jss";
import { SaveTextButton } from "./SaveTextButton";
import { lighten, useTheme } from "@mui/material/styles";
import { useStyles } from "./InputText.jss";
import LoadTextButton from "../LoadTextButton/LoadTextButton";

function InputText() {
    const history = useHistory();

    const classes = useStyles();

    const theme = useTheme();

    const { state, dispatch } = useContext(AppContext);

    const handleChange = (e) => {
        dispatch({ type: "update-text", text: e.target.value });
    };

    const getTextareaHeight = () => {
        const spacing = 24;
        const buttonsHeight = 36;
        const isLandscape = vh() / vw() < 1;
        if (vw() <= 600 && isLandscape) {
            return vh() - appBarHeightSm - spacing * 3 - buttonsHeight;
        } else if (vw() <= 600 && !isLandscape) {
            return vh() - appBarHeightMd - spacing * 3 - buttonsHeight;
        } else {
            return vh() - appBarHeightLg - spacing * 3 - buttonsHeight;
        }
    };
    const [textareaHeight, setTextareaHeight] = useState(getTextareaHeight());
    useEffect(() => {
        function handleResize() {
            setTextareaHeight(getTextareaHeight());
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const textColor = !state.text
        ? theme.palette.text.disabled
        : state.isDarkMode
        ? "#000"
        : "#fff";

    return (
        <ResponsiveDrawer>
            <Box className={classes.body}>
                <textarea
                    style={{
                        height: textareaHeight,
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? lighten(theme.palette.background.paper, 0.05)
                                : "#fff",
                        borderColor: theme.palette.divider,
                        borderRadius: 4,
                        padding: theme.spacing(1.5),
                        color: theme.palette.mode === "dark" ? "#fff" : "#000",
                        fontSize: "1rem",
                        resize: "none",
                    }}
                    placeholder="input text..."
                    onChange={handleChange}
                    value={state.text}
                />
                <Box className={classes.buttons}>
                    <LoadTextButton variant={"contained"} />
                    <SaveTextButton />
                    <Button
                        variant="contained"
                        color="primary"
                        className={clsx({ [classes.marginRight]: true })}
                        onClick={() =>
                            history.push("/morphs", {
                                wordIndex: 0,
                            })
                        }
                        startIcon={<MorphIcon fill={textColor} />}
                        disabled={!state.text}
                    >
                        Morph
                    </Button>
                    <Button
                        variant="contained"
                        color={"primary"}
                        className={clsx({ [classes.marginRight]: true })}
                        onClick={() =>
                            history.push("/cards", {
                                wordIndex: 0,
                            })
                        }
                        startIcon={<CardsIcon fill={textColor} />}
                        disabled={!state.text}
                    >
                        Cards
                    </Button>
                </Box>
                <SnackbarAlert />
            </Box>
        </ResponsiveDrawer>
    );
}

export default InputText;
