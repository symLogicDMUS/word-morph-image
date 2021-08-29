import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import { Avatar } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { useStyles } from "./ImgUploadAvatar.jss";
import { getDir } from "../../helpers/getDir";

function ImgUploadAvatar({ word, index }) {
    const classes = useStyles();

    const [src, setSrc] = useState("");

    const uploadStorageImg = (e) => {
        const user = firebase.auth().currentUser;
        const dir = getDir(user);
        const uid = user.uid;

        const file = e.target.files[0];
        const exten = file.type.split("/")[1];
        const name = word + "." + exten;

        const storageRef = firebase
            .storage()
            .ref(`${dir}/images/${uid}/${name}`);

        const task = storageRef.put(file);

        task.on(
            "state_changed",
            function progress(snapshot) {
                // const percentage =
                //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // setPercentage(percentage);
            },

            function error(err) {
                // setPercentage(100);
                console.log(err);
            },

            async function complete() {
                return await firebase
                    .storage()
                    .ref(`${dir}/images/${uid}/${name}`)
                    .getDownloadURL()
                    .then(async (url) => {
                        console.log("URL: ", url);
                        setSrc(url);
                        //TODO: send URL to parent, here
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
