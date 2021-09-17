import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useHistory } from "react-router-dom";

function DrawerListItem(props) {
    const { path, icon, children, ...other } = props;

    const history = useHistory();

    const followPath = () => {
        history.push(`${path}`);
    };

    return (
        <ListItem button onClick={followPath} {...other}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={children} />
        </ListItem>
    );
}

export default DrawerListItem;
