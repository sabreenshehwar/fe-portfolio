import React from 'react'
import { WorkContainer, WorkH5, WorkWrapper, WorkCard, WorkImg, Button, BtnWrap } from './WorkElements';
import img1 from '../../media/pp.png'
import img2 from '../../media/skyboundlogo.png'
import img3 from '../../media/sullys.png'


const Work = () => {

    return (
        <WorkContainer id="work">
            <WorkH5>
                my recent works
            </WorkH5>
            <WorkWrapper>
                <WorkCard>
                    <WorkImg src={img1} />
                    <BtnWrap>
                        <a href="https://github.com/sabreenshehwar/prayer-plants" target="_blank" rel="noreferrer">
                            <Button>
                                Code
                            </Button>
                        </a>
                        <a href="https://prayerplants.netlify.app/" target="_blank" rel="noreferrer">
                            <Button>
                                Live
                            </Button>
                        </a>
                    </BtnWrap>
                </WorkCard>
                <WorkCard>
                    <WorkImg src={img2} />
                    <BtnWrap>
                        <a href="https://github.com/sabreenshehwar/skybound" target="_blank" rel="noreferrer">
                            <Button>
                                Code
                            </Button>
                        </a>
                        <a href="https://skyboundband.netlify.app/" target="_blank" rel="noreferrer">
                            <Button>
                                Live
                            </Button>
                        </a>
                    </BtnWrap>
                </WorkCard>
                <WorkCard>
                    <WorkImg src={img3} />
                    <BtnWrap>
                        <a href="https://github.com/sabreenshehwar/sullytattoo" target="_blank" rel="noreferrer">
                            <Button>
                                Code
                            </Button>
                        </a>
                        <a href="https://www.sullystatcave.com/" target="_blank" rel="noreferrer">
                            <Button>
                                Live
                            </Button>
                        </a>
                    </BtnWrap>
                </WorkCard>
            </WorkWrapper>
        </WorkContainer >
    )
}

export default Work