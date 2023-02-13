import React from 'react'
import { ExperienceContainer, ExperienceH5, ExperienceWrapper, Title, CodeButton, LiveButton } from './ExperienceElements'

const Experience = () => {
    return (
        <ExperienceContainer>
            <ExperienceH5>
                ///recent works
            </ExperienceH5>
            <ExperienceWrapper>
                <a href="https://www.sullystatcave.com/" target="_blank" rel="noreferrer">
                    <LiveButton>
                        Sullys Tat Cave
                    </LiveButton>
                </a>
                <a href="https://github.com/sabreenshehwar/sullytattoo" target="_blank" rel="noreferrer">
                    <CodeButton>
                        Read my Code
                    </CodeButton>
                </a>
                <a href="https://prayerplants.netlify.app/" target="_blank" rel="noreferrer">
                    <LiveButton>
                        Prayer Plants
                    </LiveButton>
                </a>
                <a href="https://github.com/sabreenshehwar/prayer-plants" target="_blank" rel="noreferrer">
                    <CodeButton>
                        Read my Code
                    </CodeButton>
                </a>

                <a href="https://skyboundband.netlify.app/" target="_blank" rel="noreferrer">
                    <LiveButton>
                        Skybound
                    </LiveButton>
                </a>
                <a href="https://github.com/sabreenshehwar/skybound" target="_blank" rel="noreferrer">
                    <CodeButton>
                        Read my Code
                    </CodeButton>
                </a>


            </ExperienceWrapper>
        </ExperienceContainer>
    )
}

export default Experience