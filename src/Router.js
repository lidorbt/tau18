import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Grid, withStyles } from '@material-ui/core'
import home from './HomePage/home';


const routes = [
  {
    path: '/home',
    /* title: 'Home', */
    component: home,
  },
  {
    path: '/winningFilms',
    /* title: 'Winning Films', */
    component: winningFilms,
  },
  {
    path: '/video/:id',
    /* title: 'video', */
    component: video,
  },
]

const MainRouter = () => {
  return (
    <BrowserRouter>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={`/${route.path}`}
                exact
                component={route.component} />
            ))}
            <Redirect to={`/${routes[0].path}`} />
          </Switch>
    </BrowserRouter>)
}

export default MainRouter