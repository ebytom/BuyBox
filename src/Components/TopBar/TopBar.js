import { HomeFillIcon, PersonFillIcon, PlusIcon, StackIcon } from '@primer/octicons-react'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Modal } from 'antd';
import { Axios } from '../../Config/Axios/Axios';

const TopBar = ({ updateValue }) => {

    const loc = useLocation()

    const [name, setName] = useState(null)
    const [category, setCategory] = useState(null)
    const [desc, setDesc] = useState(null)
    const [price, setPrice] = useState(null)
    const [URL, setURL] = useState(null)
    const [rating, setRating] = useState(null)

    // ----------------------------------------------------

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setLoading(true);
        Axios.post('/api/v1/app/services/postProduct', {
            name: name,
            category: category,
            desc: desc,
            price: price,
            URL: URL,
            rating: rating
        })
            .then(res => { console.log(res); setLoading(false); setOpen(false); updateValue() })
            .catch(err => { console.log(err); setLoading(false) })
    };
    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div className="d-flex justify-content-between align-items-center rounded-4 p-3 bg-black w-100" style={{ minHeight: "80px" }}>
            {
                (loc.pathname === '/home' || loc.pathname === '/') &&
                <>
                    <div className="d-flex align-items-center">
                        <HomeFillIcon fill='white' size={30} />
                        <b className="text-white fs-4 ms-2">Home</b>
                    </div>
                    <div className="d-flex align-items-center btn btn-primary rounded-3" style={{ height: "40px" }} onClick={showModal}>
                        <PlusIcon size={22} />
                        <b className='ms-1' style={{ fontSize: "14px" }}>Add Item</b>
                    </div>
                </>
            }
            {
                loc.pathname === '/orders' &&
                <div className="d-flex align-items-center">
                    <StackIcon fill='white' size={30} />
                    <b className="text-white fs-4 ms-2">My Orders</b>
                </div>
            }
            {
                loc.pathname === '/profile' &&
                <div className="d-flex align-items-center">
                    <PersonFillIcon fill='white' size={30} />
                    <b className="text-white fs-4 ms-2">Profile</b>
                </div>
            }

            <Modal
                open={open}
                title="Add Item"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Submit
                    </Button>,
                ]}
            >
                <div className="d-flex justify-content-between my-2">
                    <b>Product Name</b>
                    <input className='w-50 p-1 rounded' onChange={e => setName(e.target.value)} />
                </div>
                <div className="d-flex justify-content-between my-2">
                    <b>Category</b>
                    <select className='w-50 p-2 rounded' style={{ border: "1px solid black" }} onChange={e => setCategory(e.target.value)} >
                        <option value="Electronics">Electronics</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Clothing and Apparel">Clothing and Apparel</option>
                        <option value="Home and Furniture">Home and Furniture</option>
                        <option value="Beauty and Personal Care">Beauty and Personal Care</option>
                        <option value="Toys and Games">Toys and Games</option>
                        <option value="Sports and Outdoors">Sports and Outdoors</option>
                        <option value="Books and Media">Books and Media</option>
                        <option value="Health and Wellness">Health and Wellness</option>
                        <option value="Jewelry and Watches">Jewelry and Watches</option>
                    </select>

                </div>
                <div className="d-flex justify-content-between my-2">
                    <b>Description</b>
                    <textarea className='w-50 p-1 rounded' style={{ border: "1px solid black" }} onChange={e => setDesc(e.target.value)} />
                </div>
                <div className="d-flex justify-content-between my-2">
                    <b>URL</b>
                    <input type="link" className='w-50 p-1 rounded' onChange={e => setURL(e.target.value)} />
                </div>
                <div className="d-flex justify-content-between my-2">
                    <b>Price</b>
                    <input type="number" className='w-50 p-1 rounded' onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="d-flex justify-content-between my-2">
                    <b>Raing</b>
                    <input type="number" min={0} max={5} className='w-50 p-1 rounded' onChange={e => setRating(e.target.value)} />
                </div>
            </Modal>
        </div>
    )
}

export default TopBar