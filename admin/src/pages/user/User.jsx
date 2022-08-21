import "./user.scss";
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching } from "@material-ui/icons";

const User = ({ }) => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img className="userShowImg" src="https://pbs.twimg.com/profile_images/1392292811790331904/RLBAgHDt_400x400.jpg" alt="" />

                        <div className="userShowTopTitle">
                            <div className="userShowUsername">David Hernandez</div>
                            <div className="userShowUserTitle">Software Engineer</div>
                        </div>
                    </div>

                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>

                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />

                            <span className="userShowInfoTitle">kermito_el_sapito</span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />

                            <span className="userShowInfoTitle">09.11.1990</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />

                            <span className="userShowInfoTitle">+1 446 565 1455</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />

                            <span className="userShowInfoTitle">kermito@gmail.com</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />

                            <span className="userShowInfoTitle">Madrid | Spain</span>
                        </div>
                    </div>
                </div>

                <div className="userUpdate">

                </div>
            </div>
        </div>
    );
}

export default User;