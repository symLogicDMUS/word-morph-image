import React, { useContext } from "react";
import firebase from "firebase";
import "firebase/database";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import AppContext from "../../AppContext";
import { getDir } from "../../helpers/getDir";
import { ReactComponent as Alt } from "./sample.svg";
import CardContent from "@mui/material/CardContent";
import { Avatar, Dialog, DialogActions, TextField } from "@mui/material";
import { useStyles } from "./PairModifier.jss";

export function PairModifier(props) {
    const { open, word, image, handleNewPair, close, ...other } = props;

    const { state, dispatch } = useContext(AppContext);

    /**
     * The following needs to be just different enough from its
     * brothers with the same name in ImageUploadAvatar.jsx and
     * AddSinglePair.jsx that I predict trying to be DRY would
     * likely introduce bugs.
     */
    const uploadStorageImg = (e) => {
        const user = firebase.auth().currentUser;
        const dir = getDir(user);
        const uid = user.uid;
        const file = e.target.files[0];
        const exten = file.type.split("/")[1];
        const imgName = word + "." + exten;

        const storageRef = firebase
            .storage()
            .ref(`${dir}/images/${uid}/${imgName}`);

        const task = storageRef.put(file);

        task.on(
            "state_changed",
            function progress(snapshot) {},

            function error(err) {
                console.log(err);
            },

            async function complete() {
                return await firebase
                    .storage()
                    .ref(`${dir}/images/${uid}/${imgName}`)
                    .getDownloadURL()
                    .then(async (url) => {
                        handleNewPair(word, url, true);
                    });
            }
        );
    };

    const save = async () => {
        const user = firebase.auth().currentUser;
        const dir = getDir(user);
        const uid = user.uid;
        await firebase
            .database()
            .ref(`${dir}/dictionary/${uid}`)
            .update({ [word]: image });
        dispatch({
            type: "update-pair",
            oldWord: word,
            word: word,
            url: image,
        });
    };

    const classes = useStyles();

    return (
        <Dialog open={open} onBackdropClick={close} {...other}>
            <Card>
                <input
                    accept="image/*"
                    onChange={uploadStorageImg}
                    className={classes.input}
                    id={`${word}-${image}`}
                    type="file"
                />
                <label htmlFor={`${word}-${image}`}>
                    <Avatar
                        src={image}
                        variant="square"
                        className={classes.avatar}
                    >
                        <Alt className={classes.alt} />
                    </Avatar>
                </label>
                <CardContent>
                    <TextField
                        value={word}
                        variant={"standard"}
                        fullWidth
                        autoFocus
                        onChange={(e) =>
                            handleNewPair(e.target.value, image, true)
                        }
                    />
                </CardContent>
                <DialogActions>
                    <Button
                        color={"primary"}
                        variant={"contained"}
                        onClick={() => {
                            save().then((r) => {
                                close();
                            });
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        variant={"outlined"}
                        onClick={() =>
                            dispatch({ type: "remove-pair", word: word })
                        }
                    >
                        Delete
                    </Button>
                    <Button onClick={close}>Cancel</Button>
                </DialogActions>
            </Card>
        </Dialog>
    );
}
