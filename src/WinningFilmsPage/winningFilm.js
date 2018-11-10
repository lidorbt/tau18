import React from 'react'
import { Grid, withStyles } from '@material-ui/core'

const WinningFilm = props => {
  const { film, classes, } = props

  return (
    <div>
      <Grid container alignItems='flex-start'>
        <Grid item xs={5}>
          <div className={classes.videoPanel}>
            <img src={`${film.imageUrl}`} alt={film.name} className={classes.Img} />
          </div>
        </Grid>
        <Grid item xs={5}>
        </Grid>
      </Grid>
    </div>
  )
}

const Styles = {
  Img: {
    // width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  title: {
    textDecoration: 'overline',
    fontWeight: 'bold'
  },
  videoPanel: {
    height: '18vh'
  },
}

export default withStyles(Styles)(WinningFilm);