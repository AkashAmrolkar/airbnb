import React from 'react'
import ListingCard from '../component/ListingCard'

const Home = () => {
  return (
    <div className='grid grid-cols-5 gap-6'>
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
    </div>   
  )
}

export default Home