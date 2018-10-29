import React from 'react'
import { theme } from './appConfig'
import { MuiThemeProvider } from '@material-ui/core'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import Home from './HomePage/home';

const generateClassName = createGenerateClassName()
const jss = create({ ...jssPreset(), insertionPoint: 'insertion-point-jss' })

const App = () => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  </JssProvider>
)

export default App


#FBD0CC