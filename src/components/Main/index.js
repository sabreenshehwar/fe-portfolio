import React from 'react'
import Video from '../../media/smoke.mp4'
import { MainContainer, MainBg, VideoBg, MainContent, MainH1, HeaderP, MainP, MainBtnWrapper, Button } from './MainElements';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Main = () => {

    return (
        <MainContainer id="main">
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </MainBg>
            <MainContent initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <HeaderP>
                    Branding | Front-End Development
                </HeaderP>
                <MainH1>
                    Sabreen Shehwar
                </MainH1>
                <MainP>
                    using my passion to help you grow your business
                </MainP>
                <MainBtnWrapper>
                    <Button to="hireme">
                        Let's work together
                        <MdKeyboardArrowRight />
                    </Button>
                </MainBtnWrapper>
            </MainContent>
        </MainContainer>
    )
}

export default Main;