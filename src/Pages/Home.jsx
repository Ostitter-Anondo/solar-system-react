import { Helmet, HelmetProvider } from "react-helmet-async";
import SolarSystem from "./Home/SolarSystem";
import { useContext } from "react";
import { SolarContext } from "../Utils/SolarContext";
import Navbar from "./Components/Navbar";

const Home = () => {
  const { earthOrbitScale, setEarthOrbitScale } = useContext(SolarContext);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Solar System</title>
        </Helmet>
      </HelmetProvider>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="my-12">
        <div className="w-fit mx-auto">
          <div className="scale-50 -m-36 md:scale-75 md:-m-24 lg:scale-100 lg:m-0 w-fit">
            <SolarSystem />
          </div>
        </div>
        <div className="w-11/12 my-12 mx-auto">
          <div>
            <h3 className="font-semibold text-3xl text-center">Set Speed</h3>
            <p className="font-extralight text-xl text-center">current multiplier {earthOrbitScale}</p>
          </div>
          <div className="md:w-8/12 lg:5/12 my-12 mx-auto">
            <input
              type="range"
              min={1}
              max={100}
              className="range range-primary"
              value={earthOrbitScale}
              onInput={(e)=>{setEarthOrbitScale(Number(e.target.value))}}
              onChange={(e)=>{setEarthOrbitScale(Number(e.target.value))}}
              step={1}
            />
            <div className="flex w-full justify-between px-2 text-xs">
              <span>1</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
