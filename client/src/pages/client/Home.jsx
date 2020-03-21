import React from 'react';
import Client from '../../layouts/Client';
import Header from '../../components/client/Header/Header';
import FirstSlide from '../../components/client/FirstSlide/FirstSlide';
import HowWeWork from '../../components/client/HowWeWork/HowWeWork';
import Products from '../../components/client/Products/Home/Items';
import SignUp from '../../components/client/SignUpBlock/Home/SignUp';
import Blog from '../../components/client/Blog/Home/Blog';
import Footer from '../../components/client/Footer/Footer';
const Home = () => {

    return (
        <Client>
            <Header/>
            <FirstSlide/>
            <HowWeWork/>
            <Products/>
            <SignUp/>
            <Blog/>
            <Footer/>
        </Client>
    )
};

export default Home;