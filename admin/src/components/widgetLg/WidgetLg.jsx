import "./widgetLg.scss";

const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgBtn " + type}>{type}</button>
    };

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>

            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://pbs.twimg.com/profile_images/1392292811790331904/RLBAgHDt_400x400.jpg" className="widgetLgImg" alt="" />

                        <span className="widgetLgName">Monkey D. Luffy</span>
                    </td>
                    <td className="widgetLgDate">September 28, 2022</td>
                    <td className="widgetLgAmount">$4958.45</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://pbs.twimg.com/profile_images/1392292811790331904/RLBAgHDt_400x400.jpg" className="widgetLgImg" alt="" />

                        <span className="widgetLgName">Monkey D. Luffy</span>
                    </td>
                    <td className="widgetLgDate">September 28, 2022</td>
                    <td className="widgetLgAmount">$4958.45</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://pbs.twimg.com/profile_images/1392292811790331904/RLBAgHDt_400x400.jpg" className="widgetLgImg" alt="" />

                        <span className="widgetLgName">Monkey D. Luffy</span>
                    </td>
                    <td className="widgetLgDate">September 28, 2022</td>
                    <td className="widgetLgAmount">$4958.45</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default WidgetLg;