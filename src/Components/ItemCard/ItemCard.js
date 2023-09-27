import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'antd';
import Payment from '../Payment/Payment';
import { CheckCircleFillIcon } from '@primer/octicons-react';

const ItemCard = ({ details }) => {

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const [status, setStatus] = useState(false)

    const showModal = () => {
        setOpen(true);
        setStatus(false)
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const paymentStatus = (sts) => {
        setStatus(sts)
    }

    return (
        <>
            <figure className="card card-product-grid card-lg">
                <a className="img-wrap" data-abc="true">
                    <img className="rounded-4" src={details?.url} />
                </a>
                <figcaption className="info-wrap">
                    <div className="row">
                        <div className="col-md-9 col-xs-9"> <a href="#" className="title" data-abc="true"><b>{details?.name}</b></a> <span className="rated text-secondary">{details?.category}</span> </div>
                        <div className="col-md-3 col-xs-3">
                            <div className="rating text-right"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <span className="rated text-secondary fw-bold">Rated {details?.rating}/5</span> </div>
                        </div>
                    </div>
                </figcaption>
                <div className="bottom-wrap-payment">
                    <div className="d-flex p-3 py-2 align-items-center justify-content-between">
                        <div className="text-white"><div><b>Rs {details?.price}</b></div><span className="rated text-secondary">VISA Platinum</span> </div>
                        <div className="btn btn-primary rounded-4" onClick={showModal}>Buy Now</div>
                    </div>
                </div>
            </figure>
            <Modal
                open={open}
                onCancel={handleCancel}
                footer={[
                    // <Button key="back" onClick={handleCancel}>
                    //     Return
                    // </Button>,
                    // <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                    //     Submit
                    // </Button>
                ]}
            >
                <>
                    {
                        status ?
                            <div className='d-flex align-items-center gap-3'>
                                <CheckCircleFillIcon size="large" fill='green' />
                                <b className='fs-3'>Order placed successfully!</b>
                            </div>
                            :
                            <div>
                                <div className="d-flex">
                                    <div className="w-50"><img class="rounded-3 w-100" style={{ minWidth: "180px" }} src={details.url} /></div>
                                    <div className="ms-3 d-flex flex-column">
                                        <b className="fs-5">{details.name}</b>
                                        <b className="text-secondary">{details.category}</b>
                                        <p className='mb-0'>{details.description}</p>
                                        <div className="d-flex align-items-center mt-0">
                                            <b>Rating &nbsp;</b>
                                            {
                                                Array.from({ length: details.rating }).map((_, index) => (
                                                    <span key={index} className="fs-5">⭐</span>
                                                ))
                                            }
                                        </div>
                                        <b className="fs-5 mt-2">Rs. {details.price}</b>
                                    </div>
                                </div>
                                <hr />
                                <Payment details={details} setOpen={setOpen} paymentStatus={paymentStatus} />
                            </div>
                    }
                </>

            </Modal>
        </>
    )
}

export default ItemCard