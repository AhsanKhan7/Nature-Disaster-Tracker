import { useState } from "react";
import GoogleMapReact from "google-map-react";
import {
  FireMarker,
  StormMarker,
  VolcanoMarker,
  IceLakeMarker,
} from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <FireMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
            })
          }
        />
      );
    }
    if (ev.categories[0].id === 10) {
      return (
        <StormMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
            })
          }
        />
      );
    }
    // if (ev.categories[0].id === 12) {
    //   return (
    //     <VolcanoMarker
    //       lat={ev.geometries[0].coordinates[1]}
    //       lng={ev.geometries[0].coordinates[0]}
    //       onClick={() =>
    //         setLocationInfo({
    //           id: ev.id,
    //           title: ev.title,
    //         })
    //       }
    //     />
    //   );
    // }
    if (ev.categories[0].id === 15) {
      return (
        <IceLakeMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
            })
          }
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>

      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 24.8607,
    lng: 67.0011,
  },
  zoom: 6,
};

export default Map;
