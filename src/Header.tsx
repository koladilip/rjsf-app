import { Link } from "react-router-dom";
import "./Header.css";
export function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mappings">Mappings</Link>
          </li>
          <li>
            <Link to="/tabs">Tabs</Link>
          </li>
          <li>
            <Link to="/multi">Multiple Forms</Link>
          </li>
          <li>
            <Link to="/dynamic-select">Dynamic Select</Link>
          </li>
          <li>
            <Link to="/vdm">VDM</Link>
          </li>
          <li>
            <Link to="/vdm-facebook">Facebook VDM</Link>
          </li>
          <li>
            <Link to="/vdm-sfmc">SFMC VDM</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
