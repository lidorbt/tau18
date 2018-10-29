import React from 'react';
import Grid from '@material-ui/core/Grid/Grid'

const Home = () => (
  <Grid container justify='space-around'>
    <Grid item xs={6} style={{ border: '1px black solid', height: 300 }} >
      <img src={require('../assets/TelAvivInternationalStudentFilmFestival.png')} alt='Tel Aviv International Student Film Festival' /></Grid>
    <Grid item xs={2} style={{ border: '1px black solid', height: 300 }} ></Grid>
    <Grid item xs={1} style={{ border: '1px black solid', height: 300 }} ></Grid>
  </Grid>
)

// const Styles = () => {
//   App: {
//     backgroundColor: '#FBD0CC'
//   }
// }

export default Home;