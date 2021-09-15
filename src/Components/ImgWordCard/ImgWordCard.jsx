import React, { useContext } from "react";
import { motion } from "framer-motion";
import variants from "../Morphs/variants";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./ImgWordCard.jss";
import AppContext from "../../AppContext";

function ImgWordCard(props) {
    const {
        index,
        currentIndex,
        incrementCurrentIndex,
        resetIndex,
        numWords,
        children,
    } = props;

    const { state, dispatch } = useContext(AppContext);

    const src = state.dictionary[children];

    console.log("src", src)

    let isSvg = false;
    if (!!src && (src.endsWith(".svg") || src.endsWith(".SVG"))) {
        isSvg = true;
    }

    const classes = useStyles();

    let textColor;
    if (index === currentIndex) {
        textColor = "secondary";
    } else {
        textColor = "inherit";
    }

    return (
        <>
            {index <= currentIndex && (
                <motion.div
                    key={index}
                    initial="initial"
                    animate="animate"
                    variants={variants}
                    onAnimationComplete={() => {
                        if (currentIndex === numWords) {
                            resetIndex();
                        } else {
                            incrementCurrentIndex();
                        }
                    }}
                    className={classes.root}
                >
                    <Card>
                        <CardActionArea>
                            {!!src && (
                                <img
                                    src={src}
                                    alt={children}
                                    className={classes.img}
                                />
                            )}
                            <CardContent>
                                <Typography color={textColor}>{children}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </motion.div>
            )}
        </>
    );
}

export default ImgWordCard;
