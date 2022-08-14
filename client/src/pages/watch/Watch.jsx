import {ArrowBackOutlined } from '@material-ui/icons';
import { Link, useLocation } from "react-router-dom";
import './watch.scss'

const Watch = () => {
    const location = useLocation();
    const item = location.state.item;
    const source = item.video.startsWith('/assets') ? item.video : 'assets/video/demon_slayer_season_2_episode_18.mp4';

    return (
        <div className="watch">
            <Link to="/" className="link">
                <div className="back">
                    <ArrowBackOutlined/>
                    Home
                </div>
            </Link>

            <video src={source} className="video" autoPlay progress="true" controls></video>
        </div>
    );
}
 
export default Watch;