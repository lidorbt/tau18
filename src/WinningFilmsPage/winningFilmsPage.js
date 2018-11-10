import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { IconButton, Grid, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';
import filmsData from '../filmsData'
import WinningFilm from './winningFilm';


const WinningFilmsPage = props => {
  const filmsKey = props.match.params.type
  const currentFilms = filmsData.find(x => x.key === filmsKey)

  return (
    <Fragment>
      <div>winning films - {props.match.params.type}</div>
      <Grid container>
        <Grid item xs={10}>
          {/* <Grid item xs={10} style={{ boxShadow: 'inset 0px 0px 0px 1px black' }}> */}
          <Grid container justify='flex-start'>
            {currentFilms.films.map(film =>
              (<Grid item xs={5}>
                <WinningFilm film={film} />
              </Grid>))}
          </Grid>
        </Grid>
        {/* <Grid xs={2} style={{ boxShadow: 'inset 0px 0px 0px 1px black' }}> */}
        <Grid xs={2}>
          {'BLADFSDFSDF'}
          {/* there should be an image here */}
        </Grid>
      </Grid>
      <Link to={'/'} style={{ position: 'absolute', bottom: 20, right: 20 }}>
        <IconButton aria-label="Back">
          <Icon>arrow_back</Icon>
        </IconButton>
      </Link>
    </Fragment>
  )
}

const Styles = {
  Img: {
    width: '100%',
    height: '100%',
  },
  title: {
    textDecoration: 'overline',
    fontWeight: 'bold'
  },
}


export default withRouter(withStyles(Styles)(WinningFilmsPage))