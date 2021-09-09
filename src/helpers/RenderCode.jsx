import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import { Dialog, DialogContent, DialogTitle, Portal } from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs, atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import IconButton from "@material-ui/core/IconButton";
import AppContext from "../AppContext";

function RenderCode({
    file = "",
    childName = "",
    replacer = null,
    space = 4,
    iconButton = false,
    style = null,
    children,
}) {
    const { state, dispatch } = useContext(AppContext);
    const [open, setOpen] = useState(false);

    return (
        <>
            <Portal>
                <Dialog open={open} onBackdropClick={() => setOpen(false)}>
                    <DialogTitle>{file}</DialogTitle>
                    <DialogContent>
                        {childName}
                        <SyntaxHighlighter
                            language="javascript"
                            style={state.isDarkMode ? atomDark : vs}
                        >
                            {JSON.stringify(children, replacer, space)}
                        </SyntaxHighlighter>
                    </DialogContent>
                </Dialog>
            </Portal>
            {iconButton ? (
                <IconButton onClick={() => setOpen(true)} style={style}>
                    <CodeIcon />
                </IconButton>
            ) : (
                <Button onClick={() => setOpen(true)} style={style}>
                    <CodeIcon
                        fontSize="small"
                        style={{ marginRight: "0.5rem" }}
                    />{" "}
                    Current Code
                </Button>
            )}
        </>
    );
}

export default RenderCode;
