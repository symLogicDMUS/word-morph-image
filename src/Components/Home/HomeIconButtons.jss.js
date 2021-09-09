import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    homeIconButtons: {
        display: "flex",
        justifyContent: "center",
        "& .MuiIconButton-root": {
            "&:hover": {
                background: "none",
            },
        },
    },
}), {index: 1});