import React from 'react'
import Promo from '../components/Promo';
import WorkHeader from '../components/WorkHeader'
import DataSection from '../components/DataSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/DataSection/Data';
import Deals from '../components/Deals';
import Prepare from '../components/Prepare'

const Hireme = () => {
    return (
        <>
            <Promo />
            <WorkHeader />
            <DataSection {...homeObjOne} />
            <DataSection {...homeObjTwo} />
            <DataSection {...homeObjThree} />
            <Deals />
            <Prepare />
        </>
    )
}

export default Hireme;