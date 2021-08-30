import React, {useContext, useState} from "react";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import { Avatar } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { useStyles } from "./ImgUploadAvatar.jss";
import { getDir } from "../../helpers/getDir";
import AppContext from "../../AppContext";

function ImgUploadAvatar({ word, index, updatePair}) {
    const {state, dispatch} = useContext(AppContext);

    const classes = useStyles();

    const [src, setSrc] = useState("");

    const uploadStorageImg = (e) => {
        const user = firebase.auth().currentUser;
        //visitors or users:
        const dir = getDir(user);
        const uid = user.uid;

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
                    .ref(`${dir}/images/${uid}/${imgName}`)
                    .getDownloadURL()
                    .then(async (url) => {
                        console.log("URL: ", url);
                        updatePair(index, url, true)
                        setSrc(url);
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
