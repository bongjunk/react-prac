import { Link } from "react-router-dom";

export default function Links() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/Profile/1">Profile/1</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/About?name=bong">About?name=bong</Link>
        </li>
      </ul>
    </>
  );
}