import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid/Grid'
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'

const Home = props => {
  const { classes } = props

  return (
    <Fragment>
      <Grid container justify='space-around' alignItems='center'>
        <Grid item xs={6} className={classes.Title} >
          <img src={require(process.env.PUBLIC_URL + '/assets/homeAssets/TelAvivInternationalStudentFilmFestival.png')}
            alt='Tel Aviv International Student Film Festival'
            className={classes.Img} />
        </Grid>
        <Grid item xs={3} className={classes.VideoBtn} >
          <Link to={'winningFilms/Festival18Videos'}>
            <img src={require(process.env.PUBLIC_URL + '/assets/homeAssets/Festival18Videos.png')}
              alt='Festival 2018 Videos'
              className={classes.Img} />
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.numIcon} >
          <img src={require(process.env.PUBLIC_URL + '/assets/homeAssets/twenty.png')}
            alt='#20'
            className={classes.Img} />
        </Grid>
      </Grid>
      <Grid container justify='space-around' alignItems='flex-start'>
        <Grid item xs={4} className={classes.SubTitle} >
          <img src={require(process.env.PUBLIC_URL + '/assets/homeAssets/WinningFilms.png')}
            alt='Winning Films'
            className={classes.Img} />
        </Grid>
        <Grid item xs={3} className={classes.VideoBtn} >
          <Link to={'winningFilms/DigitalMedia'}>
            <img src={require(process.env.PUBLIC_URL + '/assets/homeAssets/DigitalMedia.png')}
              alt='Digital Media'
              className={classes.Img} />
          </Link>
        </Grid>
        <Grid item xs={3} className={classes.VideoBtn} >
          <Link to={'winningFilms/SelectionByTheIsraeliFilmCriticsAssociation'}>
            <img src={require(process.env.PUBLIC_URL + '/assets/homeAssets/SelectionByTheIsraeliFilmCriticsAssociation.png')}
              alt='Selection By The Israeli Film Critics Association'
              className={classes.Img} />
          </Link>
        </Grid>
        <Grid container justify='space-around' alignItems='center'>
          <Grid item xs={3} className={classes.VideoBtn} >
            <Link to={'winningFilms/InternationalCometition'}>
              <img src={require(process.env.PUBLIC_URL + '/assets/homeAssets/InternationalCometition.png')}
                alt='International Cometition'
                className={classes.Img} />
            </Link>
          </Grid>
          <Grid item xs={3} className={classes.VideoBtn} >
            <Link to={'winningFilms/IsraeliCompetition'}>
              <img src={require(process.env.PUBLIC_URL + '/assets/homeAssets/IsraeliCompetition.png')}
                alt='Israeli Competition'
                className={classes.Img} />
            </Link>
          </Grid>
          <Grid item xs={3} className={classes.VideoBtn} >
            <Link to={'winningFilms/IndependentShortFilmCompetition'}>
              <img src={require(process.env.PUBLIC_URL + '/assets/homeAssets/IndependentShortFilmCompetition.png')}
                alt='Independent Short Film Competition'
                className={classes.Img} />
            </Link>
          </Grid>
          <Grid item xs={1} className={classes.VideoBtn} />
        </Grid>

      </Grid>
    </Fragment >
  )
}

const Styles = {
  Img: {
    width: '100%',
    height: '100%',
  },
  Title: {
    height: '25vh'
  },
  SubTitle: {
    height: '10vh'
  },
  VideoBtn: {
    height: '30vh'
  },
  numIcon: {
    height: '22vh'
  }
}

export default withStyles(Styles)(Home)