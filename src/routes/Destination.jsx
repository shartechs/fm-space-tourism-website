import Layout from "../components/Layout";
const backgroundImages = {
  mobile: "src/assets/images/destination/background-destination-mobile.jpg",
  tablet: "src/assets/images/destination/background-destination-tablet.jpg",
  desktop: "src/assets/images/destination/background-destination-desktop.jpg",
};

const Destination = () => {
  return <Layout backgroundImageUrl={backgroundImages}>Destination</Layout>;
};
export default Destination;
