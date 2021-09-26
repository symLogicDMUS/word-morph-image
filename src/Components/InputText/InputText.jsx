import React, { useContext, useEffect, useState } from "react";
import "firebase/storage";
import { Box, Stack } from "@mui/material";
import AppContext from "../../AppContext";
import { useHistory } from "react-router-dom";
import { vh, vw } from "../../helpers/windowMeasurements";
import SnackbarAlert from "../SnackbarAlert/SnackbarAlert";
import ResponsiveDrawer from "../ResponsiveDrawer/ResponsiveDrawer";
import {
    appBarHeightLg,
    appBarHeightMd,
    appBarHeightSm,
} from "../MyAppBar/appBarAndPadding.jss";
import LoadTextButton from "../LoadTextButton/LoadTextButton";
import { lighten, useTheme } from "@mui/material/styles";
import { SaveTextButton } from "./SaveTextButton";
import { CardsButton } from "./CardsButton";
import { MorphButton } from "./MorphButton";
import { useStyles } from "./InputText.jss";

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
                <Stack direction="row" spacing={{ xs: 1, sm: 3 }} mt={3}>
                    <LoadTextButton />
                    <SaveTextButton />
                    <MorphButton />
                    <CardsButton />
                </Stack>
                <SnackbarAlert />
            </Box>
        </ResponsiveDrawer>
    );
}

export default InputText;
