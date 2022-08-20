import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { getActiveUserData } from "../../services/api/user";
import "./home.scss";

const Home = () => {
    const userData = getActiveUserData();

    return (
        <div className="home">
            <FeaturedInfo />

            <Chart data={userData} dataKey="active_users" title="Monthly Active Users" grid />

            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}

export default Home;