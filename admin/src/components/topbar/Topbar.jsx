import "./topbar.scss";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Webflix</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />

                        <span className="topIconBag">
                            2
                        </span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />

                        <span className="topIconBag">
                            2
                        </span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>

                    <img src="https://pbs.twimg.com/profile_images/1392292811790331904/RLBAgHDt_400x400.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;