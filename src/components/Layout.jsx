import Navigation from "./Navigation/Navigation";
import useScreenSize from "../hooks/useScreenSize";

function Layout({ children, backgroundImageUrl }) {
  const { width } = useScreenSize();

  const isMobile = width < 768;
  const isTablet = Boolean(768 <= width && width < 1440);
  console.log("isMobile", isMobile);
  console.log("isTablet", isTablet);
  return (
    <div
      className={`min-h-screen p-8 md:pt-0 md:pr-0   md:pl-[40px] xl:pl-[55px] xl:pt-[30px] bg-cover bg-center `}
      style={
        isMobile
          ? { backgroundImage: `url(${backgroundImageUrl.mobile})` }
          : isTablet
          ? { backgroundImage: `url(${backgroundImageUrl.tablet})` }
          : { backgroundImage: `url(${backgroundImageUrl.desktop})` }
      }
    >
      <Navigation />
      {children}
    </div>
  );
}
export default Layout;
