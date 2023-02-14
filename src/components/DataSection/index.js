import React from 'react'
import { DataContainer, DataWrapper, DataRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Img, ImgWrap, Column2 } from './DataElements';

const DataSection = ({ lightBg, imgStart, topLine, topText, lightText, headline, darkText, description, img, alt }) => {
    return (
        <>
            <DataContainer lightBg={lightBg}>
                <DataWrapper>
                    <DataRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine topText={topText}>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                            </TextWrapper>
                            <TextWrapper>
                                <Subtitle darkText={darkText}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 2,
                                        delay: 1,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}>
                                    {description}
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 2,
                                        delay: 1.2,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}
                                    src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </DataRow>
                </DataWrapper>
            </DataContainer>
        </>
    )
}

export default DataSection;