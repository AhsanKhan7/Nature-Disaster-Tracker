import Icon from "@iconify/react";
import LocationIcon from "@iconify/icons-mdi/fire";
import StormIcon from "@iconify/icons-mdi/storm-advisory";
import volcanoIcon from "@iconify/icons-mdi/mountain";
import iceIcon from "@iconify/icons-mdi/snowflake-melt";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={LocationIcon} /> <Icon icon={StormIcon} />{" "}
        <Icon icon={volcanoIcon} /> <Icon icon={iceIcon} /> Nature Disaster
        Tracker (Powered by NASA){" "}
      </h1>
    </header>
  );
};

export default Header;
