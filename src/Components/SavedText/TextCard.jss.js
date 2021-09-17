import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(
    (theme) => ({
        card: {
            width: 345,
        },
        text: {
            height: 150,
            overflowY: "hidden",
            cursor: 'pointer',
        },
    }),
    {index: 1}
);