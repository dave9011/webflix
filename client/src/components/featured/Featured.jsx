import { PlayArrow, InfoOutlined } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { getRandom } from '../../services/api/movie';
import { useNavigate } from "react-router-dom";
import './featured.scss';

const Featured = ({type}) => {
    const [content, setContent] = useState({});

    useEffect(async () => {
        try {
            const response = await getRandom(type);

            setContent(response.data[0]);
        } catch (err) {
            console.log(err);
        }

        return () => {
            setContent({});
        };
    }, [type]);

    const navigateToWatch = useNavigate()
    
    async function handleClick(event) {
        event.preventDefault();

        navigateToWatch('/watch', {
            state: {
                item: content,
            }
        });
    }
    
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type === 'movie' ? 'Movies' : 'Series'}</span>

                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="action">Action</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Horror</option>
                    </select>
                </div>
            )}
            
            <img src={content.img}
                alt=""
            />

            <div className="info">
                <img src={content.imgTitle}
                    alt=""
                />

                <span className="desc">
                    {content.desc}
                </span>

                <div className="buttons">
                    <button className="play" onClick={handleClick}>
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Featured;