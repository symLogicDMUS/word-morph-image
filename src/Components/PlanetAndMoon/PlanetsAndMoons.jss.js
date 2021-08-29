import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    (theme) => ({
        planetsAndMoons: (props) => ({
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            "& > *": {
                marginBottom: theme.spacing(3),
            },
        }),
    }),
    { index: 1 }
);
