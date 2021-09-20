import React from "react";
import List from "@mui/material/List";
import { Link, ListItem, ListItemText } from "@mui/material";

function Sources(props) {
    return (
        <List>
            <ListItem color={"primary"}>
                <ListItemText>
                    <Link underline="hover" href={"https://picsum.photos"}>
                        Lorem Picsum
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
