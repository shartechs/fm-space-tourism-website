import Layout from "../components/Layout";
const backgroundImages = {
  mobile: "src/assets/images/crew/background-crew-mobile.jpg",
  tablet: "src/assets/images/crew/background-crew-tablet.jpg",
  desktop: "src/assets/images/crew/background-crew-desktop.jpg",
};

function Crew() {
  return <Layout backgroundImageUrl={backgroundImages}>Crew</Layout>;
}
export default Crew;
