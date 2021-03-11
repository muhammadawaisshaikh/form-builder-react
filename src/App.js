import './App.css';
import { Route, Switch } from 'react-router-dom';

import { routes } from './layout/routes';
import Sidebar from './layout/Sidebar';

import FormContextProvider from './contexts/FormContext';

function App() {
  return (
    <FormContextProvider>
      <div className="main-screen row">
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
    </FormContextProvider>
  );
}

export default App;
