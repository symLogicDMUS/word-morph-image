import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    title: {
        cursor: "default",
    },
    media: (props) =>
        props.vh < props.vw
            ? { width: "70vh", height: "70vh" }
            : { width: "70vw", height: "70vw" },
    label: {
        padding: "0 1rem",
    },
    img: {
        width: "100%",
        height: "100%",
    },
}));
