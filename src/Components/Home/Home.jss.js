import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(
    (theme) => ({
        title: props => ({
           width: 420,
            maxWidth: '95vw',
            minWidth: '20vw',
        }),
        body: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
        },
        content: {
            margin: "auto",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

        },
        homeIconButtons: {
            display: 'flex',
            justifyContent: 'center',
            "& .MuiIconButton-root": {
                "&:hover":{
                    background: "none",
                },
            },
        },
    }),
    { index: 1 }
);
