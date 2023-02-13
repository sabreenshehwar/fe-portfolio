import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { HeroContainer, HeroContent, HeroWrapper, HeaderWrapper, HeroRow, Column1, Img, ImgWrap, Column2, Subheading, HeroPLink, HeaderH1 } from './HeroElements';
import img from '../../media/bgh.jpg';


const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroContent>
                <HeroWrapper>
                    <HeroRow>
                        <Column1>
                            <ImgWrap>
                                <Img src={img} />
                            </ImgWrap>
                        </Column1>
                        <Column2 initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 2,
                                delay: 1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                            <HeaderWrapper>
                                <HeaderH1>
                                    Hey there, <br />
                                    I'm Sabreen
                                </HeaderH1>
                                <Subheading>
                                    I craft bold and intuitive user experiences using my expertise in CSS, Photoshop, and animation. As a self-taught Front-End Developer, I have a strong passion for design. My unique perspective brings a fresh approach to web development. I draw inspiration from diverse sources such as grunge fashion, art, and music to bring an 'avant-garde' touch to my work. I'm passionate about what I do, I love being at the intersection of creativity and technology.
                                </Subheading>
                                <HeroPLink to="aboutme">
                                    <AiOutlineArrowRight />
                                    Get to know me
                                </HeroPLink>
                            </HeaderWrapper>
                        </Column2>
                    </HeroRow>
                </HeroWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;