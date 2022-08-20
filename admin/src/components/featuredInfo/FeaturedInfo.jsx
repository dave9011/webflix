import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.scss";

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>

                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,526.32</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative" /></span>
                </div>

                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>

                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$16,234.58</span>
                    <span className="featuredMoneyRate">+22.5 <ArrowUpward className="featuredIcon positive" /></span>
                </div>

                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Costs</span>

                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$7651.48</span>
                    <span className="featuredMoneyRate">-69.57 <ArrowUpward className="featuredIcon positive" /></span>
                </div>

                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    );
}

export default FeaturedInfo;