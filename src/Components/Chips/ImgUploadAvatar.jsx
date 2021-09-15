import React from "react";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import firebase from "firebase/app";
import { Avatar } from "@material-ui/core";
import { getDir } from "../../helpers/getDir";
import AddPhotoAlternateIcon from
        "@material-ui/icons/AddPhotoAlternate";
import { useStyles } from "./ImgUploadAvatar.jss";

function ImgUploadAvatar({ word, src, index, updatePair }) {

    const classes = useStyles();

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
            function progress(snapshot) {
                const percentage =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },

            function error(err) {
                console.log(err);
            },

            async function complete() {
                return await firebase
                    .storage()
                    .ref(`${dir}/images/${uid}/${imgName}`)
                    .getDownloadURL()
                    .then(async (url) => {
                        console.log("url", url)
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
                    className={classes.avatar}
                    variant={"rounded"}
                    src={src}
                >
                    <AddPhotoAlternateIcon />
                </Avatar>
            </label>
        </>
    );
}

export default ImgUploadAvatar;
