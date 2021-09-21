import firebase from "firebase";
import Box from "@mui/material/Box";
import {Add} from "@mui/icons-material";
import AppContext from "../../AppContext";
import { getDir } from "../../helpers/getDir";
import {Fab, Paper, TextField} from "@mui/material";
import { vh, vw } from "../../helpers/windowMeasurements";
import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./AddSinglePair.jss";

function AddSinglePair() {
    const { state, dispatch } = useContext(AppContext);

    const [landscape, setLandscape] = useState(vw() > vh());
    useEffect(() => {
        function handleResize() {
            if (vw() > vh()) {
                setLandscape(true);
            } else {
                setLandscape(false);
            }
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const classes = useStyles({ landscape: landscape });

    const [word, setWord] = useState("");
    const handleChange = (e) => {
        setWord(e.target.value);
    };

    const [src, setSrc] = useState("");
    /**
     * The following needs to be just different enough from its
     * brothers with the same name in PairModifier.jsx and
     * ImgUploadAvatar.jsx that I predict trying to be DRY would
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
                        setSrc(url);
                    });
            }
        );
    };

    const addToDictionary = () => {
        dispatch({
            type: "add-pair",
            word: word,
            url: src,
        });
    };

    return (
        <>
            <Box className={classes.body}>
                <input
                    accept="image/*"
                    onChange={uploadStorageImg}
                    className={classes.input}
                    id={"add-single-new-pair"}
                    type="file"
                />
                <Paper className={classes.paper}>
                    <label htmlFor={"add-single-new-pair"} className={classes.label}>
                        {!!src ? (
                            <img src={src} className={classes.img} alt="" />
                        ) : (
                            <img src={"/Images/alt/alt.svg"} className={classes.alt} alt="" />
                        )}
                    </label>
                </Paper>
                <TextField
                    autoFocus
                    fullWidth
                    value={word}
                    onChange={handleChange}
                    className={classes.textField}
                    InputProps={{
                        endAdornment:
                            <Fab
                                fullWidth
                                color={"primary"}
                                disabled={!src || !word}
                                onClick={addToDictionary}
                                className={classes.addButton}
                            >
                                <Add />
                            </Fab>
                    }}
                />
            </Box>
        </>
    );
}

export default AddSinglePair;
