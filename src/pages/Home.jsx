import Layout from "../components/Layout";

function Home() {
  return (
    <Layout
      backgroundImageUrl={"src/assets/images/home/background-home-desktop.jpg"}
    >
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-white font-barlow text-h5-mobile md:text-h5-tablet lg:text-h5-desktop">
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="text-white font-bellefair text-h1-mobile md:text-h1-tablet xl:text-h1-desktop">
            SPACE
          </h1>
          <p className="text-white">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <button className="  bg-white text-[20px] md:text-[32px] py-[100px] px-[100px] font-bellefair rounded-full">
            EXPLORE
          </button>
        </div>
      </div>
    </Layout>
  );
}
export default Home;
