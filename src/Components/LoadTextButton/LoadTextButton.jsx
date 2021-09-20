import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import Button from "@mui/material/Button";
import { Dialog, DialogActions, Paper, Stack } from "@mui/material";
import { StorageRounded } from "@mui/icons-material";
import ModalTextCard from "../SavedText/ModalTextCard";
import { useStyles } from "./LoadTextButton.jss";
import { namedColorHexValues } from "../../helpers/namedColorHexValues";
import { getRandomInt } from "../../helpers/getRandomInt";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function LoadTextButton({ callback }) {
    const { state, dispatch } = useContext(AppContext);

    const [textModal, setTextModal] = useState(false);

    const load = (text) => {
        dispatch({ type: "update-text", text: text });
        if (!!callback) {
            callback();
        }
    };

    const classes = useStyles();

    return (
        <>
            <Dialog fullScreen open={textModal} className={classes.dialog}>
                <Paper className={classes.paper}>
                    <Stack
                        p={1.5}
                        direction="row"
                        flexWrap="wrap"
                    >
                        {Object.keys(state.paragraphs).map((title, index) => (
                            <ModalTextCard
                                key={index}
                                title={title}
                                onClick={load}
                            >
                                {state.paragraphs[title]}
                            </ModalTextCard>
                        ))}
                    </Stack>
                    <div
                        className={classes.item}
                        style={{
                            backgroundColor:
                                namedColorHexValues[
                                    getRandomInt(
                                        0,
                                        namedColorHexValues.length - 1
                                    )
                                ],
                        }}
                    />
                </Paper>
                <DialogActions>
                    <Button
                        onClick={() => setTextModal(false)}
                        variant={"outlined"}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <Button
                onClick={() => setTextModal(true)}
                startIcon={<StorageRounded />}
                className={classes.button}
                variant={"contained"}
            >
                Load
            </Button>
        </>
    );
}

export default LoadTextButton;
