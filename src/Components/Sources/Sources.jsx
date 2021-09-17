import React from "react";
import List from "@material-ui/core/List";
import {Link, ListItem, ListItemText} from "@material-ui/core";

function Sources(props) {

    return (
        <List>
            <ListItem color={"primary"}>
                <ListItemText>
                    <Link href={"https://picsum.photos"}>
                        Lorem Picsum
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem color={"primary"}>
                <ListItemText>
                    <Link href={"https://mui.com/"}>
                        Material UI
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem color={"primary"}>
                <ListItemText>
                    <Link href={"https://www.nngroup.com/articles/"}>
                        Neil Norman Group
                    </Link>
                </ListItemText>
            </ListItem>
        </List>
    )
}

export default Sources;