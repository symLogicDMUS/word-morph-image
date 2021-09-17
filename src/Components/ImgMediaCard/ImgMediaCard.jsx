import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Dialog, Fab, TextField } from "@mui/material";
import LandscapeSvgIcon from "./LandscapeSvgIcon";
import { ModeContext } from "../ModeContext";
import { useTheme } from "@mui/material/styles";
import { useStyles } from "./ImgMediaCard.jss";
import AddIcon from "@mui/icons-material/Add";

function ImgMediaCard() {
    const { isDarkMode, setIsDarkMode } = useContext(ModeContext);

    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const isImg = true;

    const [dimensions, setDimensions] = useState({
        vw: window.innerWidth,
        vh: window.innerHeight,
    });
    useEffect(() => {
        function handleResize() {
            setDimensions({
                vw: window.innerWidth,
                vh: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const classes = useStyles({ vw: dimensions.vw, vh: dimensions.vh });

    return (
        <>
            <Dialog
                open={open}
                onBackdropClick={() => setOpen((prevIsOpen) => !prevIsOpen)}
            >
                <Card>
                    <CardActionArea>
                        <CardMedia className={classes.media}>
                            {isImg ? <LandscapeSvgIcon /> : null}
                        </CardMedia>
                        <CardActions>
                            <TextField
                                fullWidth
                                size={"large"}
                                label={"click here to enter word..."}
                                InputLabelProps={{
                                    style: {
                                        color: isDarkMode ? "#fff" : "#000",
                                    },
                                }}
                                color={isDarkMode ? "secondary" : "primary"}
                                variant={"filed"}
                            />
                        </CardActions>
                        <CardActions>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                fullWidth
                            >
                                Add
                            </Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Dialog>
            <Button
                onClick={() => setOpen((prevIsOpen) => !prevIsOpen)}
                color={"primary"}
                variant={"contained"}
            >
                Open Card
            </Button>
            <Button onClick={() => setIsDarkMode((prevState) => !prevState)}>
                Toggle Theme
            </Button>
        </>
    );
}

export default ImgMediaCard;
