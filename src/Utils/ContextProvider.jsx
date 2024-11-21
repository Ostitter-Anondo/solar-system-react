import PropTypes from 'prop-types';
import { SolarContext } from "./SolarContext";
import { useState } from 'react';

const ContextProvider = ({children}) => {
  const [earthOrbitScale, setEarthOrbitScale] = useState(5);
  const contextData = {
    earthOrbitScale, 
    setEarthOrbitScale,
  };

  return (
    <SolarContext.Provider value={contextData}>
      {children}
    </SolarContext.Provider>
  );
};


ContextProvider.propTypes = {
  children: PropTypes.node,
};


export default ContextProvider;