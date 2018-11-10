import React from 'react'
import { Grid, withStyles } from '@material-ui/core'

const WinningFilm = props => {
  const { film, classes, } = props

  return (
    <div>
      <Grid container alignItems='flex-start'>
        <Grid item xs={5}>
          <div className={classes.videoPanel}>
            <img src={require(film.imageUrl)} alt={film.name} className={classes.Img} />
          </div>
        </Grid>
        <Grid item xs={5}>
        </Grid>
      </Grid>
    </div>
  )
}
// class WinningFilm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { image: null };
//   }
//   componentDidMount() {
//     const { film } = this.props;
//     import(film.imageUrl)
//       .then(image => this.setState({ image }))
//   }

//   render() {
//     const { film, classes, } = this.props
//     const { image } = this.state
//     return image ? (
//       <div>
//         <Grid container alignItems='flex-start'>
//           <Grid item xs={5}>
//             <div className={classes.videoPanel}>
//               <img src={this.state.image} alt={film.name} className={classes.Img} />
//             </div>
//           </Grid>
//           <Grid item xs={5}>
//           </Grid>
//         </Grid>
//       </div>
//     ) : <div />
//   }
// }

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