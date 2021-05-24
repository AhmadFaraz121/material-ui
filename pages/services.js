import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/styles";
import  Link  from "../src/Link";
import ButtonArrow from "../src/ui/ButtonArrow";

const useStyles = makeStyles(theme => ({
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
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
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
}))
export default function Services(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <Grid container direction="column">
            <Head>
                <title key="title"> Top Custom Software Development Services | Arc Development </title>
                <meta name="description" key="description" content="Cutting-edge software, mobile app, and website development services with sleek custom designs - get a free online estimate instantly!" />
                <meta property="og:title" content="Bringing West Coast Technology to the Midwest | Services" key="og:title" />
                <meta property="og:url" key="og:url" content="arc.com/services" />
                <link rel="canonical" key="canonical" href="arc.com/services" />
            </Head>
            {/* IOS/Android App */}
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", marginTop: matchesSM ? "1em" : "2em"}}>
                <Typography align={matchesSM ? "center" : undefined} variant="h2" gutterBottom >Services</Typography>
            </Grid>
            <Grid item>
                {" "}
                <Grid container direction="row" className={classes.serviceContainer} style={{marginTop: matchesSM ? "1em" : "5em"}} justify={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em"}}>
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
                        <img className={classes.icon} alt="mobile phone icon" src="/assets/mobileIcon.svg" width="250em" />
                    </Grid>
                </Grid>
            </Grid>
            {/* Custom Software Block */}
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
                        <img className={classes.icon} alt="custom software icon" src="/assets/CustomSoftware.svg" />
                    </Grid>
                </Grid>
            </Grid>
            {/* Website Development */}
            <Grid item>
                {" "}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"} style={{marginBottom: "10em"}}>
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em"}}>
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
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img className={classes.icon} alt="Website icon" src="/assets/websiteIcon.svg" width="250em" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}