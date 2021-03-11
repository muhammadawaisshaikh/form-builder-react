import '../assets/css/sidebar.css';
import { Link } from 'react-router-dom';
import { routes } from './routes';

function Sidebar() {
  return (
    <div className="sidebar">
        <h2>Sidebar</h2>

        <ul>
          {
            routes.map(route => {
              return (
                <li>
                  <Link to={route.path}>
                    {route.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
    </div>
  );
}

export default Sidebar;
