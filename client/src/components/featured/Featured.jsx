import { PlayArrow, InfoOutlined } from '@material-ui/icons';
import './featured.scss';

const Featured = ({type}) => {
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
            
            <img src="https://cdn.wallpapersafari.com/45/87/ql2YgM.jpg"
                // src="https://cdn.wallpapersafari.com/29/25/NJru6y.jpg"
                alt=""
            />

            <div className="info">
                <img src="https://www.ranklogos.com/wp-content/uploads/2015/01/One-Piece-Logo.png"
                    alt=""
                />

                <span className="desc">
                    Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
                </span>

                <div className="buttons">
                    <button className="play">
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