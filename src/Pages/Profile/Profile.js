import React from 'react'

const Profile = () => {
    return (
        <div className="container cust-profile">
            <form method="">
                <div className="row">
                    <div className="col-md-4">
                        <img src={"profile.jpg"} width={200} />
                    </div>

                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>John S</h5>
                            <h6>Member Since 2016</h6>
                            <p className="profile-rating mt-3 mb-5">Total Order : <span>25</span></p>

                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" href="#home">About</a>
                                </li>


                            </ul>
                            <br></br>
                            <h5>Personal Information</h5>
                            <br></br>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>User ID</label>
                                </div>
                                <div className="col-md-6">
                                    <p>12587</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>John S</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>E-Mail</label>
                                </div>
                                <div className="col-md-6">
                                    <p>john.s@gmail.com</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Mobile No</label>
                                </div>
                                <div className="col-md-6">
                                    <p>9658437658</p>
                                </div>
                            </div>
                            <br></br>
                            <h5>Manage Addresses</h5>
                            <br></br>
                            <div className="ad">
                                <img className="add" height={14} width={14} src={"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMTc1RkYiIGQ9Ik0xMS4yNSA2Ljc1aC00LjV2NC41aC0xLjV2LTQuNUguNzV2LTEuNWg0LjVWLjc1aDEuNXY0LjVoNC41Ii8+PHBhdGggZD0iTS0zLTNoMTh2MThILTMiLz48L2c+PC9zdmc+"} />
                                <div>
                                    <label>  ADD A NEW ADDRESS</label>
                                </div>
                            </div>
                            <br></br>
                            <div className="bo">
                                <div className='home'>
                                    HOME
                                </div>
                                <div>
                                    <h3>John S </h3>
                                </div>
                                <div>
                                    <p>Olive garden house no : R1 Washington Pincode:867925</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Profile