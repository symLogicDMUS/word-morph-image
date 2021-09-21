import React from "react";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import firebase from "firebase/app";
import { Avatar } from "@mui/material";
import { getDir } from "../../helpers/getDir";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useStyles } from "./ImgUploadAvatar.jss";

function ImgUploadAvatar({ word, src, index, updatePair }) {
    const classes = useStyles();

    /**
     * The following needs to be just different enough from its
     * brothers with the same name in PairModifier.jsx and
     * AddSinglePair.jsx that I predict trying to be DRY would
     * likely introduce bugs.
     */
    const uploadStorageImg = (e) => {
        const user = firebase.auth().currentUser;
        //visitors or users:
        const dir = getDir(user);
        const uid = user.uid;
        console.log(uid);
        const file = e.target.files[0];
        //file.type example: image/png:
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
                        console.log("url", url);
                        updatePair(index, url, true);
                    });
            }
        );
    };

    return (
        <>
            <input
                accept="image/*"
                onChange={uploadStorageImg}
                className={classes.input}
                id={`${word}-${index}-img`}
                type="file"
            />
            <label htmlFor={`${word}-${index}-img`}>
                <Avatar
                    src={src}
                    variant={"rounded"}
                    className={classes.avatar}
                >
                    <AddPhotoAlternateIcon />
                </Avatar>
            </label>
        </>
    );
}

export default ImgUploadAvatar;
