import {ArrowBackOutlined } from '@material-ui/icons';
import { Link, useLocation } from "react-router-dom";
import './watch.scss'

const Watch = () => {
    const location = useLocation();
    const item = location.state.item;

    return (
        <div className="watch">
            <Link to="/" className="link">
                <div className="back">
                    <ArrowBackOutlined/>
                    Home
                </div>
            </Link>

            <video src="assets/video/demon_slayer_season_2_episode_18.mp4" className="video" autoPlay progress="true" controls></video>

            {/* <video src={item.video} className="video" autoPlay progress="true" controls></video> */}
        </div>
    );
}
 
export default Watch;