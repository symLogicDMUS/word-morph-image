import React from "react";
import { motion } from "framer-motion";
import variants from "../Morphs/variants";
import dictionary from "../../dictionary";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./ImgWordCard.jss";

function ImgWordCard(props) {
    const {
        index,
        currentIndex,
        incrementCurrentIndex,
        resetIndex,
        numWords,
        children,
    } = props;

    let src = dictionary[children];
    if (!dictionary[children]) {
        src = "/word_images/alt/alt-light.svg";
    }
    let isSvg = false;
    if (src.endsWith(".svg") || src.endsWith(".SVG")) {
        isSvg = true;
    }

    const classes = useStyles();

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
                            {isSvg ? (
                                <img
                                    src={src}
                                    alt={children}
                                    className={classes.img}
                                />
                            ) : (
                                <CardMedia
                                    image={src}
                                    className={classes.img}
                                />
                            )}
                            <CardContent>
                                <Typography>{children}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </motion.div>
            )}
        </>
    );
}

export default ImgWordCard;
