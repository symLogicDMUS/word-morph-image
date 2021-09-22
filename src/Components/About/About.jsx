import React from "react";
import { Link, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { useStyles } from "./About.jss";

function About(props) {
    const classes = useStyles();

    const theme = useTheme();

    return (
        <Typography className={classes.paragraph} paragraph {...props}>
            <Box pt={1} pb={2}>
                <Typography variant={"h5"}>About Word to Image</Typography>
            </Box>
            Recent to the writing of the Word to Image app, I had taken an
            interest in the design role of product lifecycle. A fellow graduate
            in Computer Science had pointed me to many resources for the user
            experience and design side of website creation. One of my first
            reactions was that these resources (particularly the
            <Link
                underline="hover"
                href={"https://www.nngroup.com/articles/"}
                style={{
                    marginLeft: "0.25rem",
                    marginRight: "0.25rem",
                }}
            >
                Nielsen Norman Group articles
            </Link>
            brought me back to the hours in my bedroom reading textbooks. i.e.
            lots of abstract words that don't provoke an image in my mind. Word
            to Image is a concept that I had previously thought about before I
            had had the skill set to implement it. It is an experiment of
            reading comprehension: Can pairing an abstract word with an image,
            even if that image has no real relation to the word, improve reading
            comprehension at all. Word to Image displays these pairs in an
            animated fashion of words transitioning into their paired image.
        </Typography>
    );
}

export default About;
