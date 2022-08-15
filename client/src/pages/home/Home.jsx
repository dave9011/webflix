import { useEffect } from 'react';
import { useState } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import NavBar from '../../components/navbar/NavBar';
import { getList } from '../../services/api/list';
import './home.scss';

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(async () => {
        try {
            const response = await getList({
                ... (type && { type }),
                ... (genre && { genre }),
            });

            setLists(response.data);

            return () => {
                setLists([]);
                setGenre(null);
            };
        } catch (err) {
            console.log(err);
        }
    }, [type, genre]);

    return (
        <div className="home">
            <NavBar />
            <Featured type={type} />

            {lists.map(list => (
                <List list={list} />
            ))}
        </div>
    );
}

export default Home;