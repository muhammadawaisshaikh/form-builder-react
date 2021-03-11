import '../assets/css/sidebar.css';
import { Link } from 'react-router-dom';
import { routes } from './routes';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="py-4">
          <Link className="button d-block mx-2" to="/create">
            Create
          </Link>
        </div>

        <h2 className="mx-2">Forms</h2>
        
        <ul className="parent">
          <li>
            <a>Today</a>
            <ul className="child">
              <li>
                <a>Form 1</a>
              </li>
              <li>
                <a>Form 2</a>
              </li>
              <li>
                <a>Form 3</a>
              </li>
              <li>
                <a>Form 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Monday 21 oct</a>
          </li>
        </ul>
        {/* <ul>
          {
            routes.map((route, i) => {
              return (
                <li key={i}>
                  <Link to={route.path}>
                    {route.name}
                  </Link>
                </li>
              )
            })
          }
        </ul> */}
    </div>
  );
}

export default Sidebar;
