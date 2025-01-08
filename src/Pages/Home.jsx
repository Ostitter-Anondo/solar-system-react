import { Helmet, HelmetProvider } from "react-helmet-async";
import SolarSystem from "./Home/SolarSystem";
import { useContext } from "react";
import { SolarContext } from "../Utils/SolarContext";
import Navbar from "./Components/Navbar";
import DataTableOrbit from "./Home/DataTableOrbit";

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
          <h3 className="font-semibold text-3xl text-center">Control System</h3>
          <div className="my-12 card gap-12 items-center bg-base-300 md:w-10/12 lg:w-8/12 mx-auto p-12">
            <h3 className="card-title">
              Current Orbit Period Multiplier: <span className="text-accent">{earthOrbitScale}</span> seconds
            </h3>
            <div className="w-full mx-auto">
              <input
                type="range"
                min={0}
                max={100}
                className="range range-primary"
                value={earthOrbitScale}
                onInput={(e) => {
                  setEarthOrbitScale(Number(e.target.value));
                }}
                onChange={(e) => {
                  setEarthOrbitScale(Number(e.target.value));
                }}
                step={1}
              />
              <div className="flex w-full justify-between px-2 text-xs">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>
              </div>
            </div>
          </div>
          <div className="card p-6 gap-6 bg-base-300 mx-auto w-fit">
            <h3 className="card-title">Orbit Scaling Table</h3>
            <div className="border border-base-content rounded p-1">
              <DataTableOrbit />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
