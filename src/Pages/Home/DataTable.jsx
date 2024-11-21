import { useContext } from "react";
import { SolarContext } from "../../Utils/SolarContext";

const DataTable = () => {
  const { earthOrbitScale } = useContext(SolarContext);
  return (
    <div>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Planet</th>
            <th>Scale of 1</th>
            <th>Scale of {earthOrbitScale}s</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mercury</td>
            <td>0.241</td>
            <td>{(0.241*earthOrbitScale).toFixed(2)} seconds</td>
          </tr>
          <tr>
            <td>Venus</td>
            <td>0.615</td>
            <td>{(0.615*earthOrbitScale).toFixed(2)} seconds</td>
          </tr>
          <tr>
            <td>Earth</td>
            <td>1</td>
            <td>{(1*earthOrbitScale).toFixed(2)} seconds</td>
          </tr>
          <tr>
            <td>Mars</td>
            <td>1.881</td>
            <td>{(1.881*earthOrbitScale).toFixed(2)} seconds</td>
          </tr>
          <tr>
            <td>Jupiter</td>
            <td>11.86</td>
            <td>{(11.86*earthOrbitScale).toFixed(2)} seconds</td>
          </tr>
          <tr>
            <td>Saturn</td>
            <td>29.46</td>
            <td>{(29.46*earthOrbitScale).toFixed(2)} seconds</td>
          </tr>
          <tr>
            <td>Uranus</td>
            <td>84.01</td>
            <td>{(84.01*earthOrbitScale).toFixed(2)} seconds</td>
          </tr>
          <tr>
            <td>Neptune</td>
            <td>164.8</td>
            <td>{(164.8*earthOrbitScale).toFixed(2)} seconds</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
