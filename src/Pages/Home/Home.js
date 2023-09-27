import React from 'react'
import TopBar from '../../Components/TopBar/TopBar'
import ItemCard from '../../Components/ItemCard/ItemCard'

const Home = () => {
    return (
        <div className='grid-parent-div'>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    )
}

export default Home