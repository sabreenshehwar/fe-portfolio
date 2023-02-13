import React from 'react'
import { PrepareContainer, PrepareH3, PrepareP, PrepareWrapper, PrepareCard, PrepareMenu, PrepareSteps, PrepareSub, PrepareHeader } from './PrepareElements'

const Prepare = () => {
    return (
        <PrepareContainer>
            <PrepareWrapper>
                <PrepareCard>
                    <PrepareMenu>
                        <PrepareSteps>
                            <PrepareSub>
                                NO.1
                            </PrepareSub>
                            <PrepareHeader>
                                Get ready to make waves
                            </PrepareHeader>
                            <PrepareP>
                                Before we get started on the production process, you will be guided through a step-by step process to gather the necessary prerequisites. The goal is to make your experience as seamless and efficient as possible.                            </PrepareP>
                        </PrepareSteps>
                        <PrepareSteps>
                            <PrepareSub>
                                NO.2
                            </PrepareSub>
                            <PrepareHeader>
                                The Vision
                            </PrepareHeader>
                            <PrepareP>
                                To start off, we'll have a strategy call to ensure that your website is not only designed to convert sales  but also aligns with your vision. Afterwards, I'll apply my design expertise to bring your vision to life.
                            </PrepareP>
                        </PrepareSteps>
                        <PrepareSteps>
                            <PrepareSub>
                                NO.3
                            </PrepareSub>
                            <PrepareHeader>
                                Launch
                            </PrepareHeader>
                            <PrepareP>
                                After finishing the revisions, we'll be ready to launch. Post launch, you'll receive instructional materials and post-launch support to effortlessly manage your website. Feel free to reach out to me if you need any updates as well.
                            </PrepareP>
                        </PrepareSteps>
                    </PrepareMenu>
                </PrepareCard>
            </PrepareWrapper>
        </PrepareContainer>
    )
}

export default Prepare