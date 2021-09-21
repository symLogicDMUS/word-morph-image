import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    alertBar: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100vw',
        height: 26,
        backgroundColor: '#fff',
        border: '1px solid #f0f0f0',
        textAlign: 'center',
        color: '#ab2323',
    },
}), {index: 1});