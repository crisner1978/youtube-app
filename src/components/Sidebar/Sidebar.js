import SideBarRow from "../SideBarRow/SideBarRow";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <SideBarRow selected Icon={HomeIcon} title="Home" />
        <SideBarRow Icon={ExploreOutlinedIcon} title="Explore" />
        <SideBarRow Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
      </div>
      <hr />
      <div className="sidebar__bottom">
        <SideBarRow Icon={VideoLibraryOutlinedIcon} title="Library" />
        <SideBarRow Icon={HistoryIcon} title="History" />
        <SideBarRow Icon={OndemandVideoIcon} title="Your videos" />
        <SideBarRow Icon={WatchLaterOutlinedIcon} title="Watch later" />
        <SideBarRow Icon={ThumbUpOffAltIcon} title="Liked videos" />
        <SideBarRow Icon={ExpandMoreIcon} title="Show more" />
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;
