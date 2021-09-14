import clsx from "clsx";
import "firebase/storage";
import React, {useContext} from "react";
import AppContext from "../../AppContext";
import { useHistory } from "react-router-dom";
import LoremButton from "../LoremButton/LoremButton";
import { Box, Button, TextareaAutosize } from "@material-ui/core";
import ResponsiveDrawer from "../ResponsiveDrawer/ResponsiveDrawer";
import { useStyles } from "./InputText.jss";

function InputText() {
    const history = useHistory();

    const classes = useStyles();

    const { state, dispatch } = useContext(AppContext);

    const handleChange = (e) => {
        dispatch({ type: "update-text", text: e.target.value });
    };

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
                        className={clsx({ [classes.marginRight]: true })}
                        onClick={() =>
                            history.push("/morphs", {
                                wordIndex: 0,
                            })
                        }
                        disabled={!state.text}
                    >
                        Morph
                    </Button>
                    <Button
                        variant="contained"
                        className={clsx({ [classes.marginRight]: true })}
                        onClick={() =>
                            history.push("/cards", {
                                wordIndex: 0,
                            })
                        }
                        disabled={!state.text}
                    >
                        Cards
                    </Button>
                    <LoremButton variant={"outlined"}>Lorem </LoremButton>
                </Box>
            </Box>
        </ResponsiveDrawer>
    );
}

export default InputText;
