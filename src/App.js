import React from 'react'
import { theme } from './appConfig'
import { MuiThemeProvider } from '@material-ui/core'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset, withStyles } from '@material-ui/core/styles'
import './App.css'
import MainRouter from './Router'

const generateClassName = createGenerateClassName()
const jss = create({ ...jssPreset(), insertionPoint: 'insertion-point-jss' })

const App = props => {
  const { classes } = props
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.App}>
          <MainRouter />
        </div>
      </MuiThemeProvider>
    </JssProvider>
  )
}

const Styles = {
  App: {
    marginTop: '5vh',
    marginBottom: '5vh',
  }
}

export default withStyles(Styles)(App)