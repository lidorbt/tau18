import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'



const WinningFilmsPage = props => {
  console.log(props.match.params.type)
  return (
    <Fragment>
      <div>winning films - {props.match.params.type}</div>
      <Link to={'/'}>
        <Button>back</Button>
      </Link>
    </Fragment>
  )
}

export default withRouter(WinningFilmsPage)