import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { getActiveUserData } from "../../services/api/user";
import "./home.scss";

const Home = () => {
    const userData = getActiveUserData();

    return (
        <div className="home">
            <FeaturedInfo />

            <Chart data={userData} dataKey="active_users" title="Monthly Active Users" grid />
        </div>
    );
}

export default Home;