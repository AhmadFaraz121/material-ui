import Lottie from 'react-lottie';
import Head from "next/head";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import  Link  from "../src/Link";
import Grid from '@material-ui/core/Grid';
import animationData from '../src/animations/landinganimation/data';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ButtonArrow from '../src/ui/ButtonArrow';
import CallToAction from '../src/ui/CallToAction';
const useStyles = makeStyles(theme=>({
    animation:{
        maxWidth:"50em",
        minWidth:"21em",
        marginTop:"2em",
        marginLeft:"10%",
        [theme.breakpoints.down("sm")]:{
            maxWidth: "30em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width:145
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url("/assets/repeatingBackground.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: "100%"
        }
    },
    infoBackground: {
        backgroundImage: `url("/assets/infoBackground.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    }
}))

export default function LandingPage(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return(
        <Grid container direction="column" className={classes.mainContainer}>
            <Head>
                <title key="title"> Custom Software, Mobile Apps, and Websites | Arc Development </title>
                <meta name="description" key="description" content="Pristine software custom-designed from the ground up with cutting-edge optimizations. Use our free estimate calculator to check your project cost!" />
                <meta property="og:title" content="Bringing West Coast Technology to the Midwest | Arc Development" key="og:title" />
                <meta property="og:url" key="og:url" content="arc.com" />
                <link rel="canonical" key="canonical" href="arc.com" />
            </Head>
            {/*Hero Block*/}
            <Grid item>
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography variant="h2" align="center">Brining West Coast Technologies <br /> to the SouthAsia</Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button className={classes.estimateButton} component={Link} href="/estimate" variant="contained" onClick={()=>props.setValue(5)}>
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.learnButtonHero} component={Link} href="/revolution" variant="outlined" onClick={()=>props.setValue(2)}>
                                    <span style={{marginRight:10}}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>
            </Grid>
            {/*Services Block*/}
            {/* Custom Software */}
            <Grid item>
                {" "}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy, Save Time, Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to {""} <span className={classes.specialText}>celebration</span>
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link} href="/customsoftwares" onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}}>
                            <span style={{marginRight:10}}>
                                Learn More
                            </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="custom software icon" src="assets/CustomSoftware.svg" />
                    </Grid>
                </Grid>
            </Grid>
            {/* IOS/Android App */}
            <Grid item>
                {" "}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant="h4">
                            IOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app {matchesSM ? null : <br />} with euther mobile platform.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link} href="/mobileapps"  onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}}>
                            <span style={{marginRight:10}}>
                                Learn More
                            </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img className={classes.icon} alt="mobile phone icon" src="/assets/mobileIcon.svg" />
                    </Grid>
                </Grid>
            </Grid>
            {/* Website Development */}
            <Grid item>
                {" "}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link} href="/websites" onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                            <span style={{marginRight:10}}>
                                Learn More
                            </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="Website icon" src="/assets/websiteIcon.svg" />
                    </Grid>
                </Grid>
            </Grid>
            {/*Revolution Block */}
            <Grid item>
                <Grid container style={{height:"100em", marginTop:"10em"}} alignItems="center" justify="center">
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{textAlign:"center"}}>
                                <Grid item>
                                    <Typography variant="h3" gutterBottom>
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Visionary insight coupled with a cutting-edge technology is recipe for revolution.
                                    </Typography>
                                    <Button className={classes.learnButtonHero} component={Link} href="/revolution" variant="outlined" onClick={()=>props.setValue(2)}>
                                        <span style={{marginRight:10}}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />
                </Grid>
            </Grid>
            {/*Information Block*/}
            <Grid item>
                <Grid container style={{height: "80em"}} alignItems="center" direction="row" className={classes.infoBackground}>
                <Grid item container style={{textAlign: matchesXS ? "center" : "inherit"}} direction={matchesXS ? "column" : "row"} >
                    <Grid sm item style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em"}}>
                        <Grid container style={{marginBottom: matchesXS ? "10em" : 0}} direction="column">
                            <Typography variant="h2" style={{color:"white"}}>About Us</Typography>
                            <Typography variant="subtitle2">Let's get personal.</Typography>
                            <Grid item>
                                <Button variant="outlined" style={{color:"white", borderColor:"white"}} component={Link} href="/about" className={classes.learnButton} onClick={()=>props.setValue(3)}>
                                <span style={{marginRight:10}}>
                                    Learn More
                                </span>
                                <ButtonArrow width={10} height={10} fill="white" />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm style={{ marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em", textAlign: matchesXS ? "center" : "right"}}>
                        <Grid container direction="column">
                            <Typography variant="h2" style={{color:"white"}}>Contact Us</Typography>
                            <Typography variant="subtitle2">Say hello! <span role="img" aria-label="waving hand">????</span></Typography>
                            <Grid item>
                                <Button variant="outlined" style={{color:"white", borderColor:"white"}} component={Link} href="/contact" className={classes.learnButton} onClick={()=>props.setValue(4)}>
                                    <span style={{marginRight:10}}>
                                        Learn More
                                    </span>
                                    <ButtonArrow width={10} height={10} fill="white" />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    ) 
}