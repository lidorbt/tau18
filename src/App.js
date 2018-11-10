import React from 'react'
import { theme } from './appConfig'
import { MuiThemeProvider } from '@material-ui/core'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset, withStyles } from '@material-ui/core/styles'
import './App.css'
import MainRouter from './Router'

const styleNode = document.createComment("jss-insertion-point");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName()
const jss = create({ ...jssPreset(), insertionPoint: 'jss-insertion-point', })

const App = props => {
  const { classes } = props

  console.log(window.location)

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
    margin: '5vh',
  }
}

export default withStyles(Styles)(App)