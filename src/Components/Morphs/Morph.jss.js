import { makeStyles } from "@material-ui/core/styles";
import { getTextWidth } from "../../helpers/getTextWidth";

export const useStyles = makeStyles(
    (theme) => ({
        img: (props) => ({
            display: "inline",
            marginLeft:
                props.word && props.word.length
                    ? getTextWidth(
                          props.word,
                          theme.typography.fontSize,
                          theme.typography.fontFamily
                      ) * 0.25
                    : "unset",
        }),
        word: {
            display: "inline",
        },
    }),
    { index: 1 }
);
