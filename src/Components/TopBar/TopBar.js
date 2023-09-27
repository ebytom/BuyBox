import { HomeFillIcon, PersonFillIcon, PlusIcon, StackIcon } from '@primer/octicons-react'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Modal } from 'antd';

const TopBar = () => {

    const loc = useLocation()

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div className="d-flex justify-content-between rounded-4 p-3 bg-black w-100">
            {
                (loc.pathname === '/home' || loc.pathname === '/') &&
                <>
                    <div className="d-flex align-items-center">
                        <HomeFillIcon fill='white' size={30} />
                        <b className="text-white fs-4 ms-2">Home</b>
                    </div>
                    <div className="d-flex align-items-center btn btn-primary rounded-3" onClick={showModal}>
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
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export default TopBar