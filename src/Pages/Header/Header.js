import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div></div>
      <div className="btns">
        <Link to='/register' className="btn1">Submit</Link>
        <Link to='/login' className="btn1">Login</Link>
      </div>
    </div>
  );
};

export default Header;
