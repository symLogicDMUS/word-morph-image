import { useStyles } from "../Morphs/Morph.jss";

function Word({ children }) {
    const classes = useStyles();

    return <div className={classes.word}>{children + " "}</div>;
}

export default Word;
