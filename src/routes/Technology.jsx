import Layout from "../components/Layout";

const backgroundImages = {
  mobile: "src/assets/images/technology/background-technology-mobile.jpg",
  tablet: "src/assets/images/technology/background-technology-tablet.jpg",
  desktop: "src/assets/images/technology/background-technology-desktop.jpg",
};

function Technology() {
  return <Layout backgroundImageUrl={backgroundImages}>Technology</Layout>;
}
export default Technology;
