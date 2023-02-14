import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Info from '../components/Info';
import HeroSection from '../components/HeroSection';
import Experience from '../components/Experience';
import Contact from '../components/Contact/ContactForm';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Main />
            <Info />
            <HeroSection />
            <Experience />
            <Contact />
        </>
    );
};

export default Home