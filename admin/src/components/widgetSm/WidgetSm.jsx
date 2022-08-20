import { Visibility } from "@material-ui/icons";
import "./widgetSm.scss";

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="title">New Joined Members</span>

            <ul className="list">
                <li className="listItem">
                    <img src="https://pbs.twimg.com/profile_images/1392292811790331904/RLBAgHDt_400x400.jpg" alt="" />

                    <div className="user">
                        <span className="username">David Hernandez</span>
                        <span className="userTitle">Software Engineer</span>
                    </div>

                    <button className="widgetBtnSm">
                        <Visibility className="widgetBtnIcon" /> Display
                    </button>
                </li>
                <li className="listItem">
                    <img src="https://pbs.twimg.com/profile_images/1392292811790331904/RLBAgHDt_400x400.jpg" alt="" />

                    <div className="user">
                        <span className="username">David Hernandez</span>
                        <span className="userTitle">Software Engineer</span>
                    </div>

                    <button className="widgetBtnSm">
                        <Visibility className="widgetBtnIcon" /> Display
                    </button>
                </li>
                <li className="listItem">
                    <img src="https://pbs.twimg.com/profile_images/1392292811790331904/RLBAgHDt_400x400.jpg" alt="" />

                    <div className="user">
                        <span className="username">David Hernandez</span>
                        <span className="userTitle">Software Engineer</span>
                    </div>

                    <button className="widgetBtnSm">
                        <Visibility className="widgetBtnIcon" /> Display
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default WidgetSm;