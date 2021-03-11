import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { routes } from './layout/routes';

import Sidebar from './layout/Sidebar';

function App() {
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9">
        <BrowserRouter>
          {
            routes.map(route => {
              return (
                <Route path={route.path}>
                  {route.component}
                </Route>
              )
            })
          }
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
