import React from 'react';
import Client from '../../layouts/Client';
import Header from '../../components/client/Header/Header';
import FirstSlide from '../../components/client/FirstSlide/FirstSlide';
import HowWeWork from '../../components/client/HowWeWork/HowWeWork';
import Footer from '../../components/client/Footer/Footer';
const Home = () => {
    const ProductList = [
        {
            id: '1',
            title: "realme X2",
            price: '900',
            img: '/upload/ezgif-3-11677be73175.jpg',
            slug: 'realme-x2'

        },
        {
            id: '2',
            title: "Apple iPhone 11",
            price: '1200',
            img: '/upload/ezgif-3-fcac4c269fe9.jpg',
            slug: 'apple-iphone-11'

        },
        {
            id: '3',
            title: "Honor 10i ",
            price: '900',
            img: '/upload/ezgif-3-b9fde9533c88.jpg',
            slug: 'Honor-10i'

        },

    ];
    return (
        <Client>
            <Header/>
            <FirstSlide/>
            <HowWeWork/>
            Home page
            <Footer/>
        </Client>
    )
};

export default Home;