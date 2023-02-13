import React from 'react'
import { Bar, PromoContainer, PromoMenu, PLogo, PItem, PromoP, IconWrapper } from '../Promo/PromoElements'
const Promo = () => {


    return (
        <>
            <Bar>
                <PromoContainer>
                    <PLogo to='/' onClick="contact">
                        S.
                    </PLogo>
                    <PromoMenu initial={{ y: -250 }}
                        animate={{ y: -10 }}
                        transition={{ ease: "easeOut", duration: 1.5, delay: 1 }}>
                        <PItem>
                            <PromoP>
                                NOW BOOKING: FEB AND MARCH: 5 SPOTS AVAILABLE
                            </PromoP>
                        </PItem>
                    </PromoMenu>
                </PromoContainer>
            </Bar>
        </>
    )
}

export default Promo