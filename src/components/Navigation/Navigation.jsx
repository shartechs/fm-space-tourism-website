import Navlink from "./NavLink";
import useScreenSize from "../../hooks/useScreenSize";

function Navigation() {
  const screenSize = useScreenSize();
  console.log(screenSize);
  return screenSize.width > 768 ? (
    <nav className="flex justify-between">
      <div>
        <Navlink to="/">
          <img src="src/assets/svgs/logo.svg" alt="logo" />
        </Navlink>
      </div>
      <ul className="flex gap-4 bg-opacity-[4%] backdrop-blur-[60px] shrink-0 justify-center content-center px-[50px] py-[25px] w-[60%]">
        <li>
          <Navlink to="/">
            <span>01</span> Home
          </Navlink>
        </li>
        <li>
          <Navlink to="/destination">
            <span>02</span> Destination
          </Navlink>
        </li>
        <li className="navlink">Crew</li>
        <li className="navlink">Technology</li>
      </ul>
    </nav>
  ) : (
    <div></div>
  );
}
export default Navigation;
