import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Avatar, Card, TextField} from "@material-ui/core";
import firebase from "firebase";
import {getDir} from "../../helpers/getDir";
import CardActionArea from "@material-ui/core/CardActionArea";
import {ReactComponent as Alt} from "../SavedPairs/sample.svg";
import {appBarHeightLg, appBarHeightMd, appBarHeightSm} from "../MyAppBar/appBarAndPadding.jss";
import Button from "@material-ui/core/Button";
import {drawerWidth} from "../ResponsiveDrawer/ResponsiveDrawer.jss";
import {vh, vw} from "../../helpers/windowMeasurements";

export const cardActionHeight = 64;

export const useStyles = makeStyles((theme) => ({

}), {index: 1});

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
    return (
        <div className={classes.root}>
            <div className={classes.avatar} />
            {/*<CardActionArea>*/}
            {/*    <Button>Hello World</Button>*/}
            {/*    <Button>Lorem Ipsum</Button>*/}
            {/*</CardActionArea>*/}
        </div>

    )
    // return (<div className={classes.root}></div>)

    // const [word, setWord] = useState("");
    // const handleChange = (e) => {
    //     setWord(e.target.value)
    // };
    //
    // const [src, setSrc] = useState("");
    //
    // const uploadStorageImg = (e) => {
    //     const user = firebase.auth().currentUser;
    //     const dir = getDir(user);
    //     const uid = user.uid;
    //     const file = e.target.files[0];
    //     const exten = file.type.split("/")[1];
    //     const imgName = word + "." + exten;
    //
    //     const storageRef = firebase
    //         .storage()
    //         .ref(`${dir}/images/${uid}/${imgName}`);
    //
    //     const task = storageRef.put(file);
    //
    //     task.on(
    //         "state_changed",
    //         function progress(snapshot) {},
    //
    //         function error(err) {
    //             console.log(err);
    //         },
    //
    //         async function complete() {
    //             return await firebase
    //                 .storage()
    //                 .ref(`${dir}/images/${uid}/${imgName}`)
    //                 .getDownloadURL()
    //                 .then(async (url) => {
    //                     setSrc(url);
    //                 });
    //         }
    //     );
    // };
    //
    // return (
    //     <div className={classes.root}>
    //         <Card>
    //             <CardActionArea>
    //                 <input
    //                     accept="image/*"
    //                     onChange={uploadStorageImg}
    //                     className={classes.input}
    //                     id={"new-word-image-pair"}
    //                     type="file"
    //                 />
    //                 <label htmlFor={"new-word-image-pair"}>
    //                     <Avatar
    //                         src={src}
    //                         className={classes.avatar}
    //                     >
    //                         <Alt className={classes.alt} />
    //                     </Avatar>
    //                 </label>
    //                 <CardActionArea>
    //                     <TextField
    //                         value={word}
    //                         onChange={handleChange}
    //                         fullWidth
    //                     />
    //                 </CardActionArea>
    //             </CardActionArea>
    //         </Card>
    //     </div>
    // )
}

export default AddSinglePair;