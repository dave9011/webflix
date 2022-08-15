import {
    LineStyle,
    Timeline,
    TrendingUp,
    PersonOutline,
    Storefront,
    LocalAtm,
    BarChart,
    ListAlt,
    Movie,
    LiveTv,
    Settings
} from "@material-ui/icons";
import "./sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>

                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>

                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <PersonOutline className="sidebarIcon" />
                            Users
                        </li>
                        <li className="sidebarItem">
                            <Storefront className="sidebarIcon" />
                            Products
                        </li>
                        <li className="sidebarItem">
                            <LocalAtm className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarItem">
                            <BarChart className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Movies and Series</h3>

                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <ListAlt className="sidebarIcon" />
                            Lists
                        </li>
                        <li className="sidebarItem">
                            <Movie className="sidebarIcon" />
                            Movies
                        </li>
                        <li className="sidebarItem">
                            <LiveTv className="sidebarIcon" />
                            Series
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Settings</h3>

                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <Settings className="sidebarIcon" />
                            General
                        </li>
                        <li className="sidebarItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;