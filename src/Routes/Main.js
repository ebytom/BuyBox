import React, { useContext, useState } from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { UserContext } from '../App'
import SideBar from '../Components/SideBar/SideBar'
import Home from '../Pages/Home/Home'
import Profile from '../Pages/Profile/Profile'
import MyOrders from '../Pages/MyOrders/MyOrders'
import TopBar from '../Components/TopBar/TopBar'

const Main = () => {

    const [updateVal, setupdateVal] = useState(false)

    // const { user } = useContext(UserContext)

    const [user, setUser] = useState(1000)

    const updateValue = (value) => {
        setupdateVal(!updateVal)
    }

    return (
        <div className='p-2' style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
            <SideBar />
            <div className="ps-2" style={{ width: "calc(100vw)", overflow: "scroll" }}>
                <TopBar updateValue={updateValue} />
                <div className="rounded-4 mt-2 p-3" style={{ background: "#0d6bfd14", minHeight: "calc(100vh - 95px)" }}>
                    <Switch>
                        <Route path="/orders" element={<MyOrders />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/*" element={<Home updateVal={updateVal} updateValue={updateValue} />} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Main