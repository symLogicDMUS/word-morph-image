import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
    svg: {
        margin: "auto",
        [theme.breakpoints.down('md')]: {
            width: "70%",
        },
        [theme.breakpoints.up("md")]: {
            width: "60%",
        },
    },
}));
