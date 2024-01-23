import Navigation from "./Navigation/Navigation";

function Layout({ children, backgroundImageUrl }) {
  console.log(backgroundImageUrl);
  return (
    <div
      className={`min-h-screen p-8 md:pt-0 md:pr-0   md:pl-[40px] xl:pl-[55px] xl:pt-[55px] bg-cover bg-center `}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <Navigation />
      {children}
    </div>
  );
}
export default Layout;
