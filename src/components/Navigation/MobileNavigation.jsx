import IconClose from "../../assets/svgs/IconClose";
import Navlink from "./NavLink";
import { motion } from "framer-motion";

function MobileNavigation({ isOpen, setIsOpen }) {
  const variants = {
    "open": { x: 0, transition: { type: "tween", ease: "linear" } },
    "closed": { x: 250, transition: { type: "tween", ease: "linear" } },
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <motion.div
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      className="w-[250px] bg-opacity-[4%] backdrop-blur-[60px] h-[100vh] fixed right-0 top-0 pt-32 pl-10"
    >
      <IconClose
        className="absolute top-6 right-4 cursor-pointer"
        onClick={handleClose}
      />
      <ul className="flex gap-4 flex-col ">
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
    </motion.div>
  );
}
export default MobileNavigation;
