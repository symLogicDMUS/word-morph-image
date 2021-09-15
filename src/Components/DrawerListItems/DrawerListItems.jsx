import React from "react";
import List from "@material-ui/core/List";
import DrawerListItem from "./DrawerListItem";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./DrawerListItems.jss";

function DrawerListItems(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <DrawerListItem path="/chips">Add Pair Group</DrawerListItem>
                <DrawerListItem path="/add-single-pair">Add Single Pair</DrawerListItem>
                <DrawerListItem path="/saved-pairs">Saved Pairs</DrawerListItem>
                <DrawerListItem path="/">Input Text</DrawerListItem>
            </List>
            <Divider />
            <List>
                <DrawerListItem>About</DrawerListItem>
                <DrawerListItem>Help</DrawerListItem>
                <DrawerListItem>Sources</DrawerListItem>
            </List>
        </div>
    );
}

export default DrawerListItems;
