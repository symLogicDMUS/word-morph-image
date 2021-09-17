import React, { useContext } from "react";
import { motion } from "framer-motion";
import variants from "../Morphs/variants";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
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

    console.log("src", src);

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
                                <Typography color={textColor}>
                                    {children}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </motion.div>
            )}
        </>
    );
}

export default ImgWordCard;
