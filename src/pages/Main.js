import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Search from '../components/Search'
import MainMenu from '../components/MainMenu'
import MainLive from '../components/MainLive'
import MainYoutube from '../components/MainYoutube'
import Footer from '../components/Footer'

function Main() {
    return (
        <>
            <Nav />
            <Banner />
            <Search />
            <MainMenu />
            <MainLive />
            <MainYoutube />
            <Footer />
        </>
    )
}

export default Main