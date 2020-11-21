import Icon from "@iconify/react";
import LocationIcon from "@iconify/icons-mdi/fire";
import StormIcon from "@iconify/icons-mdi/storm-advisory";
import volcanoIcon from "@iconify/icons-mdi/mountain";
import iceIcon from "@iconify/icons-mdi/snowflake-melt";

export const FireMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="loaction-marker" onClick={onClick}>
      <Icon icon={LocationIcon} className="location-icon-fire" />
    </div>
  );
};

export const StormMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="loaction-marker" onClick={onClick}>
      <Icon icon={StormIcon} className="location-icon-storm" />
    </div>
  );
};

export const VolcanoMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="loaction-marker" onClick={onClick}>
      <Icon icon={volcanoIcon} className="location-icon-volcano" />
    </div>
  );
};

export const IceLakeMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="loaction-marker" onClick={onClick}>
      <Icon icon={iceIcon} className="location-icon-ice" />
    </div>
  );
};
