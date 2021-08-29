import { Fab } from "@material-ui/core";
import React, { useContext } from "react";
import AppContext from "../../AppContext";
import AddIcon from "@material-ui/icons/Add";

/**
 * Add word image pairs to App's context
 */
export function AddPairs({ chips }) {
    const { state, dispatch } = useContext(AppContext);

    return (
        <Fab color={"primary"}>
            <AddIcon />
        </Fab>
    );
}
