import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { AccountCircle } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import SignInWindow from "./Components/SignInWindow";
import { Tooltip } from "@material-ui/core";

function SignInOutButton() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (!!firebase.auth().currentUser) {
      firebase.auth().signOut();
    } else {
      setOpen(true);
    }
  };

  return (
      <>
        <SignInWindow open={open} setOpen={setOpen} />
        <Tooltip
            title={!!firebase.auth().currentUser ? "Sign out" : "Sign in"}
        >
          <IconButton onClick={handleClick}>
            <AccountCircle />
          </IconButton>
        </Tooltip>
      </>
  );
}

export default SignInOutButton;