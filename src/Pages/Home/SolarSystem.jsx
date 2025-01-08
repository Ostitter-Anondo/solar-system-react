import sun from "../../assets/sun.png";
import mercury from "../../assets/mercury.png";
import venus from "../../assets/venus.png";
import earth from "../../assets/earth.png";
import mars from "../../assets/mars.png";
import jupiter from "../../assets/jupiter.png";
import saturn from "../../assets/saturn.png";
import uranus from "../../assets/uranus.png";
import neptune from "../../assets/neptune.png";
import { useContext } from "react";
import { SolarContext } from "../../Utils/SolarContext";

const SolarSystem = () => {
  const {earthOrbitScale} = useContext(SolarContext);
  const css = `
    @keyframes speen {
      0%{
          transform: rotate(0deg);
      }
      100%{
          transform: rotate(-360deg);
      }
    }
    .planet {
      margin: 2rem;
    }  
    .planet-box {
      animation: speen 5000ms linear 0ms infinite;
    }
    .mercury {
      height: 10rem;
      animation-duration: ${earthOrbitScale*1000*0.241}ms;
    }
    .venus {
      height: 14rem;
      animation-duration: ${earthOrbitScale*1000*0.615}ms;
    }
    .earth {
      height: 18.5rem;
      animation-duration: ${earthOrbitScale*1000*1}ms;
    }
    .mars {
      height: 22.5rem;
      animation-duration: ${earthOrbitScale*1000*1.881}ms;
    }
    .jupiter {
      height: 27rem;
      animation-duration: ${earthOrbitScale*1000*11.86}ms;
    }
    .saturn {
      height: 31rem;
      animation-duration: ${earthOrbitScale*1000*29.46}ms;
    }
    .uranus {
      height: 35rem;
      animation-duration: ${earthOrbitScale*1000*84.01}ms;
    }
    .neptune {
      height: 39rem;
      animation-duration: ${earthOrbitScale*1000*164.8}ms;
    }
  `;
  return (
    <div className="flex items-center justify-center overflow-scroll">
      <style>{css}</style>
      <div className="planet border flex items-center justify-center rounded-full relative">
        <div className="planet-box absolute neptune"><img src={neptune} alt="" className="size-8" /></div>
        <div className="planet border flex items-center justify-center rounded-full relative">
          <div className="planet-box absolute uranus"><img src={uranus} alt="" className="size-8" /></div>
          <div className="planet border flex items-center justify-center rounded-full relative">
            <div className="planet-box absolute saturn"><img src={saturn} alt="" className="size-8" /></div>
            <div className="planet border flex items-center justify-center rounded-full relative">
              <div className="planet-box absolute jupiter"><img src={jupiter} alt="" className="size-8" /></div>
              <div className="planet border flex items-center justify-center rounded-full relative">
                <div className="planet-box absolute mars"><img src={mars} alt="" className="size-8" /></div>
                <div className="planet border flex items-center justify-center rounded-full relative">
                  <div className="planet-box absolute earth"><img src={earth} alt="" className="size-8" /></div>
                  <div className="planet border flex items-center justify-center rounded-full relative">
                    <div className="planet-box absolute venus"><img src={venus} alt="" className="size-8" /></div>
                    <div className="planet border flex items-center justify-center rounded-full relative">
                      <div className="planet-box absolute mercury"><img src={mercury} alt="" className="size-8" /></div>
                      <div className="sunnoid flex items-center justify-center m-16 rounded-full relative">
                        <div className="absolute size-16"><img src={sun} alt="" className="size-16" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
