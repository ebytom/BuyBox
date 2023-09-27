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
        <div class="d-flex flex-column flex-shrink-0 rounded-4 p-3 text-white bg-dark h-100" style={{ width: "280px" }}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span class="fs-4 fw-bold">BuyBox </span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto gap-2">
                <li class="nav-item">
                    <a onClick={() => { nav('/home'); setSelected("home") }} class={selected == "home" ? "nav-link active" : "nav-link text-white"} aria-current="page" style={{ cursor: "pointer" }}>
                        <b>Home</b>
                    </a>
                </li>
                <li class="nav-item">
                    <a onClick={() => { nav('/orders'); setSelected("orders") }} class={selected == "orders" ? "nav-link active" : "nav-link text-white"} aria-current="page" style={{ cursor: "pointer" }}>
                        <b>My Orders</b>
                    </a>
                </li>
                <li class="nav-item">
                    <a onClick={() => { nav('/profile'); setSelected("profile") }} class={selected == "profile" ? "nav-link active" : "nav-link text-white"} aria-current="page" style={{ cursor: "pointer" }}>
                        <b>Profile</b>
                    </a>
                </li>
            </ul>
            <hr />
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://s3mn.mnimgs.com/img/shared/userimages/userimage_26851813.jpg?26851813" alt="" width="32" height="32" class="rounded-circle me-2" />
                    <strong>User</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar