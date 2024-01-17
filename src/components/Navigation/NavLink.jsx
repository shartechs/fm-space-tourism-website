import { NavLink } from "react-router-dom";

const Navlink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
    >
      {children}
    </NavLink>
  );
};
export default Navlink;
