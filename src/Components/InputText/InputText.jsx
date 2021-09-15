import clsx from "clsx";
import "firebase/storage";
import React, { useContext } from "react";
import AppContext from "../../AppContext";
import { useHistory } from "react-router-dom";
import {ReactComponent as MorphIcon} from "./morph.svg";
import {ReactComponent as CardsIcon} from "./cards.svg";
import { Box, Button, TextareaAutosize } from "@material-ui/core";
import ResponsiveDrawer from "../ResponsiveDrawer/ResponsiveDrawer";
import {useTheme} from "@material-ui/core/styles";
import { useStyles } from "./InputText.jss";

function InputText() {
    const history = useHistory();

    const classes = useStyles();

    const theme = useTheme()

    const { state, dispatch } = useContext(AppContext);

    const handleChange = (e) => {
        dispatch({ type: "update-text", text: e.target.value });
    };

    const textColor = ! state.text ? theme.palette.text.disabled : (state.isDarkMode ? "#000" : "#fff");

    return (
        <ResponsiveDrawer>
            <Box className={classes.body}>
                <TextareaAutosize
                    value={state.text}
                    placeholder="input text..."
                    className={classes.textBox}
                    onChange={handleChange}
                />
                <Box className={classes.buttons}>
                    <Button
                        variant="contained"
                        color={"primary"}
                        className={clsx({ [classes.marginRight]: true })}
                        onClick={() =>
                            history.push("/morphs", {
                                wordIndex: 0,
                            })
                        }
                        startIcon={
                            <MorphIcon fill={textColor}/>
                        }
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
                        startIcon={
                            <CardsIcon fill={textColor}/>
                        }
                        disabled={!state.text}
                    >
                        Cards
                    </Button>
                </Box>
            </Box>
        </ResponsiveDrawer>
    );
}

export default InputText;
