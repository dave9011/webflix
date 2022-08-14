import {ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss'

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>

            <video src="assets/video/demon_slayer_season_2_episode_18.mp4" className="video" autoplay progress controls></video>
        </div>
    );
}
 
export default Watch;