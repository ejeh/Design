import React from 'react';
import { NavLink } from "react-router-dom"
import {
    makeStyles,
    Typography,
    Toolbar,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    buttonCollapse: {
        [theme.breakpoints.down("md")]: {
            display: "none"
        },

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
    }
}));

const Header = () => {
    const nav = ["About Us", "How It Works", "Contact Us", "FAQ", "FEDPAY"]
    const classes = useStyles()
    return (
        <div className={classes.root}>

            <Toolbar className={classes.buttonCollapse}>
                <Typography
                    className={classes.title}
                    color="inherit"

                >
                    <NavLink to={'/'} className={classes.navlink} >{nav[0]}</NavLink>
                </Typography>
                <Typography
                    className={classes.title}
                    color="inherit"

                >
                    <NavLink to={'/aboutUs'} className={classes.navlink} >{nav[1]}</NavLink>
                </Typography>
                <Typography
                    className={classes.title}
                    color="inherit"

                >
                    <NavLink to={'/contactUs'} className={classes.navlink} >{nav[2]}</NavLink>
                </Typography>
                <Typography
                    className={classes.title}
                    color="inherit"

                >
                    <NavLink to={'/feq'} className={classes.navlink} >{nav[3]}</NavLink>
                </Typography>
                <Typography
                    className={classes.title}
                    color="inherit"
                >
                    <NavLink to={'/fedpay'} className={classes.navlink} >{nav[4]}</NavLink>
                </Typography>

            </Toolbar>
        </div>
    );
}
export default Header

