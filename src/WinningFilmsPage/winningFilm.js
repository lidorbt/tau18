import React from 'react'
import { Grid, withStyles } from '@material-ui/core';

const winningFilm = props => {
  const { film, classes } = props

  return (
    < Grid container alignItems='flex-start' >
      <Grid item xs={3}>
        <div>
          <img src={film.imageUrl} alt={film.name} className={classes.Img} />
        </div>
      </Grid>

      <Grid item xs={2}>
      </Grid>
    </Grid >
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
  }
}

export default withStyles(Styles)(winningFilm);