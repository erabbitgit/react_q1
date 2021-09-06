import { Switch, Route, Link } from "react-router-dom";
import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/home",
    component: Home
  },
]

const Routers = () => {
  return(
    <>
      <div>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </div>
      <Switch>
        {routes.map((route, i) =>
          <Route
            key={i}
            path={route.path}
            render={props => (
              <route.component {...props} routes={route.routes} />
            )}
          />
        )}
      </Switch>
    </>
  )
}

export default Routers;
