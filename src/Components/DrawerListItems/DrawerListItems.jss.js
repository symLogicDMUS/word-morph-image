import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(
    (theme) => ({
        toolbar: theme.mixins.toolbar,
    }),
    { index: 1 }
);
