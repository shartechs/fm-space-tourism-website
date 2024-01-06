function Navigation() {
  return (
    <nav className="flex justify-between">
      <div>
        <img src="src/assets/svgs/logo.svg" alt="logo" />
      </div>
      <ul className="flex gap-4 bg-opacity-[4%] backdrop-blur-[10px] shrink-0 justify-center content-center px-[50px] py-[25px]">
        <li className="navlink">Home</li>
        <li className="navlink">Destination</li>
        <li className="navlink">Crew</li>
        <li className="navlink">Technology</li>
      </ul>
    </nav>
  );
}
export default Navigation;
