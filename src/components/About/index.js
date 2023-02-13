import React from 'react'
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, ImgWrap, Img, AboutH1, AboutHeader, AboutP, AboutSub, Subheading, TextWrapper, BtnWrapper, Button } from './AboutElements'
import img from '../../media/S6.jpg';
import { BsArrow90DegUp } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';



const About = () => {
    return (
        <AboutContainer id="about">
            <AboutWrapper>
                <AboutRow>
                    <Column1>

                        <ImgWrap>
                            <Img src={img} initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 2,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }} />
                        </ImgWrap>
                        <Subheading
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 2,
                                delay: 2,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                            <BsArrow90DegUp />
                            That's me
                            <br />
                            Hi, I'm Sabreen Shehwar!
                        </Subheading>
                    </Column1>
                    <Column2
                        initial={{ x: -250 }}
                        animate={{ x: -10 }}
                        transition={{ ease: "easeOut", duration: 3 }}>
                        <AboutH1 initial={{ x: -250 }}
                            animate={{ x: -10 }}
                            transition={{ ease: "easeOut", duration: 0.5 }}>
                            Designing the web, <br />
                            one pixel at a time.
                        </AboutH1>
                        <TextWrapper>
                            <AboutP>
                                Hi, I'm Sabreen. I’m a self-taught Front-End Developer with a design focus. I use my skills in CSS, Photoshop, and animation to craft user-friendly, visually appealing websites. My passion for what I do lies at the intersection of creativity and development.
                            </AboutP>
                            <AboutSub
                                initial={{ y: -250 }}
                                animate={{ y: -10 }}
                                transition={{ ease: "easeOut", duration: 3 }}>
                                With my background in UI and development, I work closely with teams and businesses to deliver custom web experiences that cater to the needs of various users. My approach to building websites is not just about technical proficiency but also about creating a unique and enjoyable experience. When I'm not coding or keeping up with new technologies, you can find me nurturing my houseplants or playing video games.
                            </AboutSub>
                        </TextWrapper>
                    </Column2>
                </AboutRow>
                <BtnWrapper>
                    <Button to='/' onClick="home">
                        head back
                        <AiOutlineArrowRight />
                    </Button>
                </BtnWrapper>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About;