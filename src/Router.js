import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import home from './HomePage/home';
import WinningFilmsPage from './WinningFilmsPage/winningFilmsPage';
import VideoPage from './VideoPage/VideoPage';

const routes = [
  {
    path: '/home',
    component: home,
  },
  {
    path: '/winningFilms/:type',
    component: WinningFilmsPage,
  },
  {
    path: '/winningFilms/:type/:filmId',
    component: VideoPage,
  },
]

const MainRouter = () => {
  return (
    <HashRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={`/${route.path}`}
            exact
            component={route.component} />
        ))}
        {/* <div>
          {window.location.pathname.includes('index.html') && <Redirect to={`/${routes[0].path}`} />}
        </div> */}
        <Redirect to={`/${routes[0].path}`} />
      </Switch>
    </HashRouter>)
}

export default MainRouter