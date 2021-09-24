import React from "react";
import List from "@mui/material/List";
import { Link, ListItem, ListItemText } from "@mui/material";

function Sources(props) {
    return (
        <List>
            <ListItem color={"primary"}>
                <ListItemText>
                    <Link underline="hover" href={"https://www.youtube.com/watch?v=8GW6sLrK40k"}>
                        Demo song
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem color={"primary"}>
                <ListItemText>
                    <Link underline="hover" href={"https://picsum.photos"}>
                        API for getting random photos
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem color={"primary"}>
                <ListItemText>
                    <Link underline="hover" href={"https://mui.com/"}>
                        Material UI
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem color={"primary"}>
                <ListItemText>
                    <Link
                        underline="hover"
                        href={"https://www.nngroup.com/articles/"}
                    >
                        Neil Norman Group
                    </Link>
                </ListItemText>
            </ListItem>
        </List>
    );
}

export default Sources;
