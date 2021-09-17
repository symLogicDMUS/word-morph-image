import React, { useContext, useState } from "react";
import firebase from "firebase";
import AppContext from "../../AppContext";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { getDir } from "../../helpers/getDir";
import { ReactComponent as Alt } from "./sample.svg";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { Avatar, Dialog, DialogActions, TextField } from "@mui/material";
import { useStyles } from "./PairModifier.jss";

export function PairModifier(props) {
    const classes = useStyles();

    const { open, word, image, close, ...other } = props;

    const { state, dispatch } = useContext(AppContext);

    const [newWord, setNewWord] = useState(word);

    const handleChange = (e) => {
        setNewWord(e.target.value);
    };

    const [newImage, setNewImage] = useState(image);

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
                        setNewImage(url);
                    });
            }
        );
    };

    return (
        <Dialog open={open} onBackdropClick={close} {...other}>
            <Card>
                <CardActionArea>
                    <input
                        accept="image/*"
                        onChange={uploadStorageImg}
                        className={classes.input}
                        id={`${word}-${image}`}
                        type="file"
                    />
                    <label htmlFor={`${word}-${image}`}>
                        <Avatar src={newImage} variant="square" className={classes.avatar}>
                            <Alt className={classes.alt} />
                        </Avatar>
                    </label>
                    <CardContent>
                        <TextField
                            variant={"filled"}
                            value={newWord}
                            onChange={handleChange}
                            fullWidth
                        />
                    </CardContent>
                </CardActionArea>
                <DialogActions>
                    <Button
                        color={"primary"}
                        variant={"contained"}
                        onClick={() => {
                            dispatch({
                                type: "update-pair",
                                oldWord: word,
                                word: newWord,
                                url: newImage,
                            });
                            close();
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        variant={"outlined"}
                        onClick={() =>
                            dispatch({ type: "remove-pair", word: newWord })
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
