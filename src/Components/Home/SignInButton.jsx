import "firebase/auth";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import SignInDialog from "./SignInDialog";

function SignInButton() {
    const [dialog, setDialog] = useState(false);

    return (
        <>
            <SignInDialog open={dialog} onClose={() => setDialog(false)} />
            <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => setDialog(true)}
            >
                Sign in
            </Button>
        </>
    );
}

export default SignInButton;
