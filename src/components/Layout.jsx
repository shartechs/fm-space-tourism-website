import Navigation from "./Navigation";

function Layout({ children, backgroundImageUrl }) {
  return (
    <div
      className={`min-h-screen bg-cover bg-center bg-[url("src/assets/images/home/background-home-desktop.jpg")]`}
    >
      <Navigation />
      {children}
    </div>
  );
}
export default Layout;
