import Navlink from "./NavLink";
import useScreenSize from "../../hooks/useScreenSize";
import MobileNavigation from "./MobileNavigation";
import IconHamburger from "../../assets/svgs/IconHamburger";
import { useEffect, useState } from "react";

function Navigation() {
  const screenSize = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (screenSize.width > 768) setIsOpen(false);
  }, [screenSize]);
  console.log(screenSize);
  return (
    <>
      <nav className="flex justify-between">
        <div className="md:pt-5 xl:pt-0">
          <Navlink to="/">
            <img
              className="w-[40px] h-[40px]"
              src="src/assets/svgs/logo.svg"
              alt="logo"
            />
          </Navlink>
        </div>
        {screenSize.width > 768 ? (
          <ul className="flex gap-4 bg-opacity-[4%] backdrop-blur-[60px] shrink-0 justify-center content-center px-[50px] py-[25px] w-[70%]">
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
