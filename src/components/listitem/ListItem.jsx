import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons';
import { useState } from 'react';
import './listitem.scss'

const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = 'assets/video/demon_slayer_season_2_episode_17_2.mp4';

    return (
        <div className="listItem"
            style={{left: isHovered && ((index * 225) - 50 + (index * 2.5))}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <img src="https://wallpaperaccess.com/full/7807779.jpg" alt="" />
        
        {isHovered && (
            <>
                {/* // TODO: unmute */}
                <video src={trailer} autoPlay={true} loop muted={true} />

                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrow className='icon'/>
                        <Add className='icon'/>
                        <ThumbUpAltOutlined className='icon'/>
                        <ThumbDownOutlined className='icon'/>
                    </div>

                    <div className="itemInfoTop">
                        <span>1 hour 14 mins</span>
                        <span className='ageLimit'>+16</span>
                        <span>1999</span>
                    </div>

                    <div className="desc">
                        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.
                    </div>

                    <div className="genre">Anime</div>
                </div>
            </>
        )}
        </div>
    );
}
 
export default ListItem;