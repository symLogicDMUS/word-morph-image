import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(
    (theme) => ({
        homeIconButtons: {
            display: "flex",
            justifyContent: "center",
            "& .MuiIconButton-root": {
                "&:hover": {
                    background: "none",
                },
            },
        },
    }),
    { index: 1 }
);
