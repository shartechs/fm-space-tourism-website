import { getDestinations } from "../api/requests";
import Layout from "../components/Layout";
const backgroundImages = {
  mobile: "src/assets/images/destination/background-destination-mobile.jpg",
  tablet: "src/assets/images/destination/background-destination-tablet.jpg",
  desktop: "src/assets/images/destination/background-destination-desktop.jpg",
};

const Destination = () => {
  const destinations = getDestinations();

  return (
    <Layout backgroundImageUrl={backgroundImages}>
      <div className="flex flex-col mt-[100px]">
        <h5 className="font-bellefair text-h5-desktop uppercase">
          <span>01</span> PICK YOUR DESTINATION
        </h5>
        <div className="flex">
          <div className="flex basis-6/12 justify-center items-center">
            {" "}
            <img src={destinations[1].images.png} alt="" />
          </div>
          <div className="basis-6/12">
            <div className="flex gap-10">
              {destinations.map((destination) => (
                <button className="navlink pb-1" key={destination.name}>
                  {destination.name}
                </button>
              ))}
            </div>
            <div>
              <h1 className="font-bellefair text-h1-desktop uppercase">Mars</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                eligendi esse deleniti maiores cumque, natus dolores hic optio
                sequi quos explicabo veniam! Ut incidunt impedit earum non
                ducimus. Ab, molestiae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Destination;
