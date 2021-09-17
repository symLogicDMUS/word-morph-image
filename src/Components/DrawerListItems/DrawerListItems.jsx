import React from "react";
import { useTheme } from "@mui/material";
import List from "@mui/material/List";
import DrawerListItem from "./DrawerListItem";
import Divider from "@mui/material/Divider";
import { ReactComponent as AboutIcon } from "./icons/about.svg";
import { ReactComponent as SourcesIcon } from "./icons/sources.svg";
import { ReactComponent as InputTextIcon } from "./icons/input text.svg";
import { ReactComponent as SavedTextIcon } from "./icons/saved text.svg";
import { ReactComponent as SavedPairsIcon } from "./icons/saved pairs.svg";
import { ReactComponent as AddPairGroupIcon } from "./icons/add pair group.svg";
import { ReactComponent as AddSinglePairIcon } from "./icons/add single pair.svg";
import { useStyles } from "./DrawerListItems.jss";

function DrawerListItems(props) {
    const classes = useStyles();
    const theme = useTheme();

    const textColor = theme.palette.text.primary;

    return (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <DrawerListItem
                    path="/chips"
                    icon={<AddPairGroupIcon fill={textColor} />}
                >
                    Add Pair Group
                </DrawerListItem>
                <DrawerListItem
                    path="/add-single-pair"
                    icon={<AddSinglePairIcon fill={textColor} />}
                >
                    Add Single Pair
                </DrawerListItem>
                <DrawerListItem
                    path="/saved-pairs"
                    icon={<SavedPairsIcon fill={textColor} />}
                >
                    Saved Pairs
                </DrawerListItem>
            </List>
            <Divider />
            <List>
                <DrawerListItem
                    path="/"
                    icon={<InputTextIcon fill={textColor} />}
                >
                    Input Text
                </DrawerListItem>
                <DrawerListItem
                    path="/saved-text"
                    icon={<SavedTextIcon fill={textColor} />}
                >
                    Saved Text
                </DrawerListItem>
            </List>
            <Divider />
            <List>
                <DrawerListItem path="/about" icon={<AboutIcon fill={textColor} />}>
                    About
                </DrawerListItem>
                <DrawerListItem path="/sources" icon={<SourcesIcon fill={textColor} />}>
                    Sources
                </DrawerListItem>
            </List>
        </div>
    );
}

export default DrawerListItems;
