import { makeStyles } from "@material-ui/core/styles";
import { getTextWidth } from "../../helpers/getTextWidth";

export const useStyles = makeStyles(
    (theme) => ({
        badge: {
            position: 'relative',
            bottom: theme.typography.h2.fontSize,
            transform: 'translate(0, 0.5rem)',
        },
        img:  {
            display: "inline-block",
            height: theme.typography.h2.fontSize,
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
            cursor: 'pointer',
        },
        word: {
            display: "inline",
        },
    }),
    { index: 1 }
);
