import React, { useEffect, useState } from 'react'
import TopBar from '../../Components/TopBar/TopBar'
import ItemCard from '../../Components/ItemCard/ItemCard'
import { Axios } from '../../Config/Axios/Axios'


const Home = ({ updateVal }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        Axios.get('/api/v1/app/services/getProducts')
            .then(res => {
                console.log(res);
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [updateVal])


    return (
        <div className='grid-parent-div'>
            {
                products.map(product => {
                    return (
                        <ItemCard key={product.product_id} details={product} />
                    )
                })
            }
        </div>
    )
}

export default Home