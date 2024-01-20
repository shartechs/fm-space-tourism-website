import { motion } from "framer-motion";

const variants = {
  "open": { x: 0, transition: { type: "tween", ease: "linear" } },
  "closed": { x: 250, transition: { type: "tween", ease: "linear" } },
};

function MobileNavigation({ isOpen }) {
  return (
    <motion.div
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      className="w-[250px] bg-opacity-[4%] backdrop-blur-[60px] h-[100vh] fixed right-0 top-0"
    >
      MobileNavigation
    </motion.div>
  );
}
export default MobileNavigation;
