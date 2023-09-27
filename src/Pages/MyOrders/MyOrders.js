import React, { useContext, useEffect, useState } from 'react'
import OrderItem from '../../Components/OrderItem/OrderItem'
import { Axios } from '../../Config/Axios/Axios'
import { UserContext } from '../../App'

const MyOrders = () => {

    const [orders, setOrders] = useState([])

    const { user } = useContext(UserContext)

    useEffect(() => {
        Axios.get('/api/v1/app/services/getOrders', {
            params: {
                user_id: user.user_id
            }
        })
            .then(res => { console.log(res); setOrders(res.data) })
            .catch(err => { console.log(err); })
    }, [])


    return (
        <div className='grid-parent-div-orders'>
            {
                orders.map(order => {
                    return (<OrderItem order={order} />)
                })
            }
        </div>
    )
}

export default MyOrders