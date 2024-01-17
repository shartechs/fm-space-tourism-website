import Navigation from "./Navigation/Navigation";

function Layout({ children, backgroundImageUrl }) {
  return (
    <div
      className={`min-h-screen md:pt-[40px] pl-[25px] md:pl-[40px] lg:pl-[55px] bg-cover bg-center bg-[url("src/assets/images/home/background-home-desktop.jpg")]`}
    >
      <Navigation />
      {children}
    </div>
  );
}
export default Layout;
