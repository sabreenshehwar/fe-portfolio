import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import HeroSection from '../components/HeroSection';
import Contact from '../components/Contact/ContactForm';
import Experience from '../components/Experience';
import Info from '../components/Info';

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