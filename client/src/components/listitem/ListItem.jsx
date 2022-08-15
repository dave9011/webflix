import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { getById } from '../../services/api/movie';
import { Link } from "react-router-dom";
import './listitem.scss'

const ListItem = ({index, itemId}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [item, setItem] = useState(null);

    useEffect(async () => {
        try {
            const response = await getById(itemId);

            setItem(response.data);
        } catch (err) {
            console.log(err);
        }

        return () => {
            setIsHovered(false);
            setItem(null);
        };
    }, [itemId]);

    return (
        <Link to="/watch" state={{ item: item }}>
        <div className="listItem"
            style={{left: isHovered && ((index * 225) - 50 + (index * 2.5))}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            {item && (
                <img src={item.imgSm} alt="" />
            )}
        
        {isHovered && (
            <>
                {/* // TODO: unmute */}
                <video src={item.trailer} autoPlay={true} loop muted={true} />

                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrow className='icon'/>
                        <Add className='icon'/>
                        <ThumbUpAltOutlined className='icon'/>
                        <ThumbDownOutlined className='icon'/>
                    </div>

                    <div className="itemInfoTop">
                        <span>{item.duration}</span>
                        <span className='ageLimit'>+{item.limit}</span>
                        <span>{item.year}</span>
                    </div>

                    <div className="desc">
                        {item.desc}
                    </div>

                    <div className="genre">{item.genre}</div>
                </div>
            </>
        )}
        </div>
        </Link>
    );
}
 
export default ListItem;