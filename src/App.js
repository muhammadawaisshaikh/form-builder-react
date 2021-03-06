import './App.css';
import { Route, Switch } from 'react-router-dom';

import { routes } from './layout/routes';
import Sidebar from './layout/Sidebar';

import FormContextProvider from './contexts/FormContext';
import SidenavContextProvider from './contexts/SidenavContext';

function App() {
  return (
    <FormContextProvider>
      <SidenavContextProvider>
        <div className="main-screen row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
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
      </SidenavContextProvider>
    </FormContextProvider>
  );
}

export default App;
