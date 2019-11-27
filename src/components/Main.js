import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Toolbar, CssBaseline } from "@material-ui/core";
import AppBarCollapse from "./AppBarCollapse";
import Header from "./Header";
import Content from "./Content";


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: "white"
    }

});

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Toolbar>
                <Typography
                    variant="h6"
                    color="inherit"
                    className={classes.title}
                >
                    Arvo
               </Typography>
                <Header />
                <AppBarCollapse />
            </Toolbar>

            <Content />
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
