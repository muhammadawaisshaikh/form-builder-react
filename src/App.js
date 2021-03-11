import './App.css';
import { Route, Switch } from 'react-router-dom';

import { routes } from './layout/routes';
import Sidebar from './layout/Sidebar';

function App() {
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9">
        <Switch>
          {
            routes.map((route, i) => {
              return (
                <Route path={route.path} key={i}>
                  {route.component}
                </Route>
              )
            })
          }
        </Switch>
      </div>
    </div>
  );
}

export default App;
