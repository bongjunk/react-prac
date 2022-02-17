import { NavLink } from "react-router-dom";

export default function NavLinks() {
  // const Match = ({ path, children }) => {
  //   let match = useMatch(path);
  //   let location = useLocation();
  //   return children({ match, location });
  // }

  return (
    <>
      <ul>
        <li>
          <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'green' : 'blue'})}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/Profile" end style={({ isActive }) => ({ color: isActive ? 'green' : 'blue'})}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/Profile/1" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue'})}>Profile/1</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/About?name=bong" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue'})}>About?name=bong</NavLink>
        </li>
      </ul>
    </>
  );
}