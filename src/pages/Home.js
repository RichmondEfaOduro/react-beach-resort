import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRoom';

const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe room starting at $1299"> 
                    <Link to="/rooms" className="btn-primary">Our rooms</Link>
                </Banner>     
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}

export default Home;