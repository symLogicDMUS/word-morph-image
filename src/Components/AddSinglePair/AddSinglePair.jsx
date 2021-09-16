import firebase from "firebase";
import Box from "@material-ui/core/Box";
import {getDir} from "../../helpers/getDir";
import {Avatar, Paper, TextField} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {ReactComponent as Alt} from "./sample.svg";
import {vh, vw} from "../../helpers/windowMeasurements";
import {useStyles} from "./AddSinglePair.jss";

function AddSinglePair() {

    const [landscape, setLandscape] = useState(vw() > vh());
    useEffect(() => {
        function handleResize() {
            if (vw() > vh()) {
                setLandscape(true)
            } else {
                setLandscape(false)
            }
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const classes = useStyles({landscape: landscape});

    const [word, setWord] = useState("");
    const handleChange = (e) => {
        setWord(e.target.value)
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

    return (
        <Box className={classes.body}>
            <Paper className={classes.card}>
                <input
                    accept="image/*"
                    onChange={uploadStorageImg}
                    className={classes.input}
                    id={"add-single-new-pair"}
                    type="file"
                />
                <label htmlFor={"add-single-new-pair"}>
                    <Avatar src={src} variant={"square"} className={classes.avatar}>
                        <Alt className={classes.alt} />
                    </Avatar>
                </label>
                <Box className={classes.textFieldContainer}>
                    <TextField variant={"filled"}  className={classes.textField} autoFocus fullWidth />
                </Box>
            </Paper>
        </Box>
    )
}

export default AddSinglePair;