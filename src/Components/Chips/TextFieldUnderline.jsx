import React from "react";
import { useStyles } from "./TextFieldUnderline.jss";
import { Zoom } from "@mui/material";
import clsx from "clsx";

function TextFieldUnderline(props) {
    const classes = useStyles();
    const { isFocused, className, ...other } = props;
    return (
        <>
            <div
                className={clsx(classes.underline, {
                    [classes.notFocused]: true,
                    [className]: !!className,
                })}
                {...other}
            />
            <Zoom in={isFocused}>
                <div
                    className={clsx(classes.underline, {
                        [classes.focused]: true,
                        [className]: !!className,
                    })}
                    {...other}
                />
            </Zoom>
        </>
    );
}

export default TextFieldUnderline;
