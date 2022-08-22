import "./user.scss";
import { Publish, PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching } from "@material-ui/icons";

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
                    <span className="userUpdateTitle">Edit</span>

                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="kermit_el_sapito" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="David Hernandez" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="kermito@gmail.com" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+1 446 565 1455" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Madrid | Spain" className="userUpdateInput" />
                            </div>
                        </div>

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://pbs.twimg.com/profile_images/1392292811790331904/RLBAgHDt_400x400.jpg" alt="" className="userUpdateImg" />

                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>

                            <button className="userUpdateBtn">Update </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default User;