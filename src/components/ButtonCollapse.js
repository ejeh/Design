import React from 'react'
import {
    makeStyles,
    Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    buttonCollapse: {
        [theme.breakpoints.down("md")]: {
            display: "none"
        },
        margin: "10px",
        boxShadow: "none",
    },

    root: {
        flexGrow: 1,

    },
    title: {
        flexGrow: 1,

    },
    navlink: {
        textDecoration: "none",
        color: "yellow"
    },

    title1: {
        marginLeft: "20px",
        borderRadius: "30px",
        backgroundColor: "#eadb07",
        padding: "10px 25px",
        color: "#018e1a",
        fontSize: "10px",
        fontWeight: "bolder"

    },
    title2: {
        border: "1px solid #f5f4f0",
        marginLeft: "20px",
        borderRadius: "30px",
        padding: "5px 15px",
        color: "#f5f4f0",
    },
    buttonBar: {
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    },
}));

const ButtonCollapse = () => {
    const classes = useStyles()

    return (
        <div className={classes.buttonBar}>

            <Button
                className={classes.title2}
            >
                Sign in

</Button>

            <Button
                className={classes.title1}
            >
                Download App
</Button>
        </div>
    )
}

export default ButtonCollapse