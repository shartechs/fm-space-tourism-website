import Navlink from "./NavLink";
import { Link } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize";
import MobileNavigation from "./MobileNavigation";
import IconHamburger from "../../assets/svgs/IconHamburger";
import Logo from "../../assets/svgs/Logo";
import { useEffect, useState } from "react";

function Navigation() {
  const screenSize = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (screenSize.width > 768) setIsOpen(false);
  }, [screenSize]);

  return (
    <>
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/">
            <Logo className="w-[40px] h-[40px]" />
          </Link>
        </div>
        {screenSize.width > 768 ? (
          <ul className="flex md:gap-8 gap-0 bg-opacity-[4%] backdrop-blur-[60px] shrink-0 justify-center content-center px-[50px] w-[60%] before:hidden xl:before:block before:absolute before:h-[1px] before:w-[50%] before:bg-[#979797] before:left-[-390px] before:top-[50%] ">
            <li>
              <Navlink to="/">
                <span>00</span> Home
              </Navlink>
            </li>
            <li>
              <Navlink to="/destination">
                <span>01</span> Destination
              </Navlink>
            </li>
            <li>
              <Navlink to="/crew">
                <span>02</span> Crew
              </Navlink>
            </li>
            <li>
              <Navlink to="/technology">
                <span>03</span> Technology
              </Navlink>
            </li>
          </ul>
        ) : (
          <button onClick={() => setIsOpen(true)}>
            <IconHamburger />
          </button>
        )}
      </nav>
      <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
export default Navigation;
