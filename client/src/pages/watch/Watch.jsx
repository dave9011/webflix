import {ArrowBackOutlined } from '@material-ui/icons';
import { Link } from "react-router-dom";
import './watch.scss'

const Watch = () => {
    return (
        <div className="watch">
            <Link to="/" className="link">
                <div className="back">
                    <ArrowBackOutlined/>
                    Home
                </div>
            </Link>

            <video src="assets/video/demon_slayer_season_2_episode_18.mp4" className="video" autoPlay progress="true" controls></video>
        </div>
    );
}
 
export default Watch;