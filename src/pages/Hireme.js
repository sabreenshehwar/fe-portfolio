import React from 'react'
import Promo from '../components/Promo';
import Deals from '../components/Deals';
import Contact from '../components/Contact/ContactForm'
import WorkHeader from '../components/WorkHeader'
import Prepare from '../components/Prepare'

const Hireme = () => {
    return (
        <>
            <Promo />
            <WorkHeader />
            <Deals />
            <Prepare />
            <Contact />
        </>
    )
}

export default Hireme;