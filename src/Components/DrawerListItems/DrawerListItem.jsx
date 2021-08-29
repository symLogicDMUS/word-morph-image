import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
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
