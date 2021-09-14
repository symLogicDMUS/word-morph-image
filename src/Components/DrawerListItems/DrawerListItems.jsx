import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./DrawerListItems.jss";
import DrawerListItem from "./DrawerListItem";

function DrawerListItems(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <DrawerListItem path="/chips">Add Pair Group</DrawerListItem>
                <DrawerListItem>Add Single Pair</DrawerListItem>
                <DrawerListItem path="/saved-pairs">Saved Pairs</DrawerListItem>
                <DrawerListItem path="/input">Input Text</DrawerListItem>
            </List>
            <Divider />
            <List>
                <DrawerListItem path="/">Home</DrawerListItem>
                <DrawerListItem>About</DrawerListItem>
                <DrawerListItem>Help</DrawerListItem>
                <DrawerListItem>Sources</DrawerListItem>
            </List>
        </div>
    );
}

export default DrawerListItems;
