import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: 1600,
    },
    paper: {
        padding: theme.spacing(2)
    }

}), {index: 1});