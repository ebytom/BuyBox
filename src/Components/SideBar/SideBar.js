import { HomeFillIcon, PersonFillIcon, StackIcon } from '@primer/octicons-react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SideBar = () => {

    const [selected, setSelected] = useState("home")


    const nav = useNavigate()
    const loc = useLocation()

    useEffect(() => {
        setSelected(loc.pathname.split("/")[1])
    }, [])


    return (
        <div className="d-flex flex-column flex-shrink-0 rounded-4 p-3 text-white bg-black h-100" style={{ width: "280px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4 fw-bold">BuyBox </span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto gap-2">
                <li className="nav-item">
                    <a onClick={() => { nav('/home'); setSelected("home") }} className={selected == "home" ? "nav-link active" : "nav-link text-white"} aria-current="page" style={{ cursor: "pointer" }}>
                        <HomeFillIcon size={22} />
                        <b className="ms-2">Home</b>
                    </a>
                </li>
                <li className="nav-item">
                    <a onClick={() => { nav('/orders'); setSelected("orders") }} className={selected == "orders" ? "nav-link active" : "nav-link text-white"} aria-current="page" style={{ cursor: "pointer" }}>
                        <StackIcon size={22} />
                        <b className="ms-2">My Orders</b>
                    </a>
                </li>
                <li className="nav-item">
                    <a onClick={() => { nav('/profile'); setSelected("profile") }} className={selected == "profile" ? "nav-link active" : "nav-link text-white"} aria-current="page" style={{ cursor: "pointer" }}>
                        <PersonFillIcon size={22} />
                        <b className="ms-2">Profile</b>
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://s3mn.mnimgs.com/img/shared/userimages/userimage_26851813.jpg?26851813" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>User</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar