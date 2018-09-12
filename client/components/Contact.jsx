import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 36.125113, lng: -115.190457 }}
  >
    <Marker
      position={{ lat: 36.125113, lng: -115.190457 }}
    />
  </GoogleMap>
));

export default Map;