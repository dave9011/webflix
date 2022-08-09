import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { useRef, useState } from 'react';
import ListItem from '../listitem/ListItem';
import './list.scss'

const List = () => {
    const [isMoved, setisMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setisMoved(true);

        // return early if the click would move the slider out of bounds
        if (direction === 'left' ? (slideNumber <= 0) : (slideNumber >= 3)) {
            return;
        }

        let distance = listRef.current.getBoundingClientRect().x - 50;
        let multiplier = (direction === 'left') ? 1 : -1;
        
        listRef.current.style.transform = `translateX(${distance + (230 * multiplier)}px)`;

        setSlideNumber(slideNumber - multiplier);
    };

    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className='sliderArrow left'
                    onClick={() => handleClick('left')}
                    style={{display: !isMoved && "none"}}
                    />
                
                <div className="container" ref={listRef}>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </div>

                <ArrowForwardIosOutlined
                    className='sliderArrow right'
                    onClick={() => handleClick('right')} 
                    />
            </div>
        </div>
    );
}
 
export default List;