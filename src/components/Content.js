
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Paper, Card, CardContent, Button, Icon, CardMedia } from '@material-ui/core';
import playstore from "../assets/img/playstore.png";
import appstore from "../assets/img/appstore.png";
import waviing from "../assets/img/waving.png";
import profile from "../assets/img/profile.png";
import phone from "../assets/img/phone.png";
import me from "../assets/img/me.jpg";
import justice from "../assets/img/justice.jpeg";
import crc from "../assets/img/crc.jpeg";
import pay from "../assets/img/pay.png";
import firstCentral from "../assets/img/firstcentral.png";
import backgroundImage from "../assets/img/background.png";
import arvo from "../assets/img/arvo.png";



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content1: {
        [theme.breakpoints.down("xs")]: {
            width: "80%",
            textAlign: "center"
        },
        [theme.breakpoints.up("sm")]: {
            width: "50%",
        },
        [theme.breakpoints.up("md")]: {
            width: "40%",
        },
        [theme.breakpoints.up("lg")]: {
            width: "55%",
        },
        color: "#ffffff",
        marginLeft: "20px",
        marginTop: "15px"
    },

    content2: {
        [theme.breakpoints.down("xs")]: {
            width: "80%",
            textAlign: "center"
        },
        [theme.breakpoints.up("sm")]: {
            width: "50%",
        },
        [theme.breakpoints.up("md")]: {
            width: "40%",
        },
        [theme.breakpoints.up("lg")]: {
            width: "55%",

        },
        marginTop: "15px",
        marginLeft: "20px"
    },

    imgTitle: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: "63px",

        },
        marginLeft: "20px",
        marginTop: "30px",
        marginBottom: "30px",
    },

    img: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: "25px",
        },
        display: "inline-flex"
    },

    paper: {
        [theme.breakpoints.down("sm")]: {
            width: "230px",

        },
        width: "55%",
        backgroundColor: "#e0d9d9",
        height: "30rem",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    card: {
        [theme.breakpoints.only("xs")]: {
            width: "84%",
            left: "-22px",


        },
        [theme.breakpoints.only("sm")]: {
            left: "288px",

        },
        [theme.breakpoints.only("md")]: {
            left: "400px",
        },

        [theme.breakpoints.only("lg")]: {
            left: "650px"
        },
        position: "absolute",
        marginTop: "-126px",
        borderRadius: "15px",

    },
    card2: {
        [theme.breakpoints.only("xs")]: {
            width: "73%",
            marginLeft: "43px",
        },
        [theme.breakpoints.only("sm")]: {
            width: "30%",
            marginLeft: "55px"
        },
        position: "absolute",
        borderRadius: "15px",
        marginTop: "134px",
        marginLeft: "130px"
    },



    title: {
        color: "#076380",
        fontWeight: "bold",
    },
    card3: {
        [theme.breakpoints.only("sm")]: {
            width: "80%",
            height: 308,
            margin: "auto"

        },
        [theme.breakpoints.only("xs")]: {
            width: "80%",
            height: 220,
            margin: "auto"

        },
        marginTop: "100px",
        borderRadius: "15px",
        textAlign: "center",
    },

    icon: {
        color: "#076380",

    },

    line: {
        [theme.breakpoints.only("xs")]: {
            width: "100%"
        },
        marginTop: "-16px",
        width: "77%"
    },

    bodyContent: {
        [theme.breakpoints.up("sm")]: {
            width: "20%"
        },
        width: "60%",
        color: "#ffffff",
        marginTop: "30px",
        margin: "auto",
        textAlign: "center"
    },

    button: {
        display: "flex",
        marginTop: "30px",
        justifyContent: "center"
    },
    getStarted: {
        border: "1px solid #f5f4f0",
        borderRadius: "30px",
        padding: "5px 15px",
        backgroundColor: "#ffff00",
    },
    card4: {
        [theme.breakpoints.down("xs")]: {
            width: "95%"
        },
        [theme.breakpoints.up("sm")]: {
            width: "65%"
        },


        marginTop: "15px",
        width: "65%",
        margin: "auto",
        borderRadius: "10px"
    },

    media: {
        height: "70px",
        borderRadius: "50%",
        width: "70px",

    },

    content3: {
        [theme.breakpoints.only("xs")]: {
            maxWidth: "100%"
        },
        maxWidth: "35%"
    },

    content3Img: {
        [theme.breakpoints.only("xs")]: {
            maxWidth: "100%"
        },
        position: "relative",
        textAlign: "center",
        maxWidth: "35%"
    },

    patners: {
        [theme.breakpoints.only("xs")]: {
            maxWidth: "50%"
        },
        maxWidth: "18%"
    }
}));

export default function PersistentDrawerRight() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    // spacing={10}
                >
                    <Grid item sm={7}>
                        <div className={classes.content1}>
                            <Typography variant="h4">
                                The best way to invest your money and get quick access to loans
                        </Typography>
                        </div>

                        <div className={classes.content2}>
                            <Typography variant="inherit">
                                With ArvoFinance, you can easily get a qiuck loan within an hour
                                without collaterials and delays, you can also invest your money
                                through our peer-to-peer platforms
                        </Typography>
                        </div>

                        <div className={classes.imgTitle}>
                            <Typography
                                variant="inherit"
                            >
                                Download and use on the go!
                            </Typography>
                        </div>
                        <div className={classes.img}>
                            <div style={{
                                marginRight: "20px",
                                marginLeft: "20px",
                            }}>
                                <img src={playstore} width="100" alt=""></img>
                            </div>
                            <div>
                                <img src={appstore} width="100" alt=""></img>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={5}>
                        <Paper
                            elevation={15}
                            className={classes.paper}
                        >
                            <Card className={classes.card}>
                                <CardContent>
                                    <div style={{ display: "flex", marginBottom: "-21px" }}>
                                        <div>
                                            <img src={profile} alt="" width="40px"></img>
                                        </div>
                                        <Typography variant="body1" className={classes.title}>Hey Ebuka </Typography>
                                        <div>
                                            <img src={waviing} alt='' width="20px" />
                                        </div>
                                    </div>
                                    <Typography variant="inherit" style={{ paddingLeft: "43px" }}>
                                        Please select an investment option.
                                    </Typography>
                                    <div style={{ paddingLeft: "43px" }}>
                                        <Button size="small" style={{
                                            border: "1px solid",
                                            backgroundColor: "#076380",
                                            marginRight: "5px",
                                            color: "#ffffff"
                                        }}>N50k - N100k</Button>
                                        <Button size="small" style={{ border: "1px solid #076380" }}>N100k - N500k</Button>
                                    </div>
                                    <div style={{ marginTop: "5px", paddingLeft: "43px" }}>
                                        <Button size="small" style={{ border: "1px solid #076380", marginRight: "5px" }}>N500k - N2m</Button>
                                        <Button size="small" style={{ border: "1px solid #076380" }}>N2m - N5m</Button>
                                    </div>

                                </CardContent>
                            </Card>
                            <Typography
                                variant="h5"
                                style={{ color: "#076380" }}
                            >
                                Arvo
                          </Typography>
                            <Card className={classes.card2}>
                                <CardContent >
                                    <div style={{ display: "flex", marginBottom: "-21px" }}>
                                        <div>
                                            <img src={profile} alt="" width="40px"></img>
                                        </div>
                                        <Typography variant="body1" className={classes.title}>Hey Bosun Jones </Typography>
                                        <div>
                                            <img src={waviing} alt='' width="20px"></img>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: "43px" }}>
                                        <Typography variant="inherit" >Your loan application has been approved</Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
                <div style={{ marginTop:"-37px"}}>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        spacing={2}
                        // style={{ width: "92%", margin: "auto" }}
                    >
                        <Grid item sm={4}>
                            <Card className={classes.card3}>
                                <CardContent>
                                    <Icon
                                        fontSize="large"
                                        className={classes.icon}
                                    >
                                        monetization_ontwotone
                                    </Icon>
                                    <Typography variant="h6" className={classes.icon}>
                                        Quick Loans
                                    </Typography>
                                    <Typography variant="body2" style={{ lineHeight: 1.7 }}>
                                        At Arvo we've developed our application to
                                        be straight forward and convienient as possible.
                                        There is no need to take the time
                                        to travel to a location.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={4}>
                            <Card className={classes.card3}>
                                <CardContent>
                                    <Icon
                                        fontSize="large"
                                        className={classes.icon}
                                    >
                                        house
                                    </Icon>
                                    <Typography variant="h6" className={classes.icon} >
                                        No collaterials
                                    </Typography>
                                    <Typography variant="body2" style={{ lineHeight: 1.7 }}>
                                        Though a novelty loan, we are able to minimise
                                            the risk associated with consumer loans in Nigeria
                                            making it available for.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={4}>
                            <Card className={classes.card3}>
                                <CardContent>
                                    <Icon
                                        fontSize="large"
                                        className={classes.icon}
                                    >
                                        thumb_up
                                    </Icon>
                                    <Typography variant="h6" className={classes.icon}>
                                        Guaranteed Lowest Interest Rate
                                    </Typography>
                                    <Typography variant="body2" style={{ lineHeight: 1.7 }}>
                                        As a responsible fintech company, we design
                                            our product to ensure our customers get the lowest
                                            interest rate in the market
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.bodyContent}>
                    <Typography style={{ fontSize: "10px", marginBottom: "10px" }}>
                        INVEST WITH ARVO FINANCE
                </Typography>

                    <Typography style={{ fontSize: "20px" }}>
                        The best way to invest your money and get quick access to loans
                </Typography>
                </div>
                <div className={classes.button}>
                    <Button style={{ backgroundColor: "#ffffff", borderRadius: "20px 0 0 20px", fontSize: "10px", padding: "10px 17px 5px 17px" }}>
                        arvo loans
                   </Button>
                    <Button style={{ backgroundColor: "#ffff00", borderRadius: "0 20px 20px 0px", fontSize: "10px", padding: "10px 17px 5px 17px" }}>
                        p2p investment
                   </Button>
                </div>
                <hr className={classes.line} />
                <div style={{ marginTop: "15px", textAlign: "center" }}>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item sm={6} className={classes.content3}>
                            <Icon
                                fontSize="large"
                                style={{ color: "#ffff00" }}
                            >
                                monetization_ontwotone
                        </Icon>
                            <div style={{ color: "#ffffff", marginBottom: "20px" }}>
                                <Typography variant="h6" gutterBottom>
                                    Arvo Loan
                        </Typography>
                                <Typography variant="body2" style={{ lineHeight: 1.7 }} >
                                    With ArvoFinance, you can easily get a qiuck loan within an hour
                                    without collaterials and delays, you can also invest your money
                                    through our peer-to-peer platforms
                        </Typography>
                            </div>
                            <Button
                                large="true"
                                className={classes.getStarted}
                            >
                                Get Started
                            </Button>
                        </Grid>
                        <Grid item sm={6} className={classes.content3Img}>
                            <img src={phone} alt="" width="100%"></img>
                            <Typography
                                variant="h5"
                                style={{
                                    position: "absolute",
                                    top: "45%",
                                    left: "45%",
                                    color: "#ffffff",
                                }}>
                                Arvo
                            </Typography>
                        </Grid>
                    </Grid>
                </div>

                <div
                style={{
                    // height: "200px",
                    // width: "200px",
                    // borderRadius: "50%",
                    // backgroundColor: "#ffffff",
                    // left: "-22%",
                    // top: "38px",
                    // position: "relative",
                    // margin: "auto"
                }}
                >
                    <div
                    // style={{
                    //     height: "200px",
                    //     width: "200px",
                    //     borderRadius: "50%",
                    //     backgroundColor: "#9fdaf7",
                    //     right: "-73%",
                    //     top: "33px",
                    //     position: "absolute"
                    // }}
                    >
                        <Card raised className={classes.card4} >
                            <CardContent style={{ marginBottom: "-19px" }}>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}>

                                    <CardMedia
                                        className={classes.media}
                                        image={me}
                                    />
                                </div>

                            </CardContent>
                            <CardContent>
                                <div style={{ textAlign: "center" }} >
                                    <Typography
                                        gutterBottom
                                        style={{ color: "#076380" }}
                                    >
                                        Best Investment App Ever!
                                   </Typography>
                                <div style={{ display: "inline-block", maxWidth: "400px"}}>
                                    <Typography variant="inherit">
                                        With ArvoFinance, you can easily get a qiuck loan within an hour
                                        without collaterials and delays, you can also invest...
                                </Typography>
                                </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ marginTop: "45px" }}

                >
                    <Grid item sm={3} xs={6} className={classes.patners}>

                        <img src={firstCentral} alt="" width="122" />

                    </Grid>
                    <Grid item sm={3} xs={6} className={classes.patners} >
                        <img src={justice} alt="" width="30" />
                    </Grid>
                    <Grid item sm={3} xs={6} className={classes.patners} style={{ display: "flex" }}>
                        <div>
                            <img src={pay} alt="" width="20" />
                        </div>
                        <Typography variant="h6" style={{ marginLeft: "3px", marginTop: "-9px" }}>paystack</Typography>
                    </Grid>
                    <Grid item sm={3} xs={6} className={classes.patners} style={{ display: "flex" }}>
                        <div>
                            <img src={crc} width="30" alt="" />
                        </div>
                        <div style={{ marginLeft: "3px", marginTop: "-6px" }}>
                            <Typography variant="caption" noWrap >CRC Credit Bureau Limited </Typography>
                            <Typography noWrap style={{ fontSize: "12px" }}>
                                In association with Dun & Bradstreet
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                <div style={{ backgroundColor: '#fff', marginTop:"35px" }}>
                <div style={{
                    height: "222px",
                    backgroundImage: `url("${backgroundImage}") `, 
                    backgroundRepeat: "no-repeat",
                    backgroundPosition:"88% 55%",
                    // filter: "opacity(0.6) drop-shadow(0 0 0 white)"
                    opacity:"0.6",
                    position: "absolute", 
                    right:0, 
                    left:0
                    // filter: "invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(100%) contrast(80%)"
                }}>
                    <div style={{ textAlign:"center",marginTop:" 51px"}}>
                        <div style={{ color:"#076380"}}>
                       <Typography variant="h6" gutterBottom>Ready to get started?</Typography>
                        </div>
                        <div style={{ maxWidth: "430px", display:"inline-block"}}>
                        <Typography variant="inherit" gutterBottom>
                           With ArvoFinance, you can easily get a qiuck loan within an hour
                         without collaterials and delays, you can also invest...
                       </Typography>
                         <Button
                                large="true"
                                className={classes.getStarted}
                                style={{ marginTop:"20px"}}
                            >
                                Create an Account
                        </Button>
                         </div>
                    </div>
                <Grid
                container
                style={{ marginTop:"70px"}}
                >
                    <Grid item sm={3} xs={6}>
                        <img src={arvo} alt="logo" width="50px" height="50px"></img>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                    <Typography variant="body1" style={{color:"#076380"}}  gutterBottom>Solutions</Typography>
                    <Typography variant="body2">FEDPAY</Typography>
                    <Typography variant="body2">Online Application</Typography>
                    <Typography variant="body2">Financial Planning</Typography>
                    <Typography variant="body2">Collateral Free Loan</Typography>
                    <Typography variant="body2">Affordable Interest Rate</Typography>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                    <Typography variant="body1" style={{color:"#076380"}} gutterBottom>Resources</Typography>
                    <Typography variant="body2">Blog</Typography>
                    <Typography variant="body2">Privacy Policy</Typography>
                    <Typography variant="body2">Terms Of Service</Typography>
                    <Typography variant="body2">Press</Typography>
                    <Typography variant="body2">Contact Us</Typography>
                    <Typography variant="body2">Fraud Alerts</Typography>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                    <Typography variant="body1" style={{color:"#076380"}} gutterBottom>Support</Typography>
                    <Typography variant="body2">+2348021810034</Typography>
                    <Typography variant="body2">hello@arvofinance.com</Typography>
                    <Typography variant="body2">ombudsman</Typography>
                    </Grid>
                </Grid>
                </div>
                </div>
            </Container>
        </div>
    );
}
